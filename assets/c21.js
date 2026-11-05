/* Consensus21 shared script: the default learning week, timetable renderer, .ics export.
   Any learner can override the week by adding a "week" block to their c21.json (see /template). */
(function () {
  const TYPES = {
    fit:       { label: 'Body',        color: '#a3e635' },
    explore:   { label: 'Explore',     color: '#38bdf8' },
    core:      { label: 'Core program', color: '#f7931a' },
    ai:        { label: 'AI & tools',  color: '#c084fc' },
    sip:       { label: 'Governance',  color: '#fde047' },
    pbl:       { label: 'Projects',    color: '#fb7185' },
    community: { label: 'Community',   color: '#2dd4bf' },
    unschool:  { label: 'Self-directed', color: '#94a3b8' }
  };

  const INFO = {
    'C21 Fit': 'Start the day moving. Run, stretch, swim, play. A clear head first, then the work.',
    'Explorers Day Out': 'Off campus for the day: workshops, farms, labs, studios, the beach, local businesses. Learners plan the trip, run the budget and log it in their Git portfolio as an Explorer entry.',
    'Time Management': 'Core program. Learners run their own digital calendar, prioritise tasks, audit where their hours went and share their schedule with mentors and parents.',
    'AI Prompt Engineers': 'Learning to work with AI as a tool: writing good prompts, checking outputs, building small things with it and knowing when not to trust it.',
    'Financial Literacy': 'Core program. The history of money, setting up a hardware wallet, public and private keys, how a Bitcoin transaction works and how to read the blockchain.',
    'SIP Discussion': 'School Improvement Proposals. Anyone, including any learner, can propose a change to how the school works. This hour is for drafting, debating and voting on SIPs.',
    'Reflection / Digital Portfolio': 'Core program. Write up the week, commit reflections and project progress to your Git repo. This record replaces report cards.',
    'Problem Based Learning': 'Real problems, real projects. Learners set their own direction with mentors and prove what they know by finishing things, not by sitting exams.',
    'Community Lunch': 'Everyone eats together: learners, mentors, visiting parents. Older and younger learners mix, which is where a lot of the mentoring actually happens.',
    'Unschool After-hours': 'Optional, self-directed time on campus. Keep building, follow a rabbit hole, help someone else with their project.'
  };

  const DEFAULT_WEEK = {
    start: 8, end: 17,
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    blocks: [
      { day: 0, start: 9,  end: 15, title: 'Explorers Day Out', type: 'explore' },
      ...[1, 2, 3, 4].map(d => ({ day: d, start: 8, end: 9, title: 'C21 Fit', type: 'fit' })),
      { day: 1, start: 9,  end: 11, title: 'Time Management', type: 'core' },
      ...[2, 3, 4].map(d => ({ day: d, start: 9, end: 10, title: 'AI Prompt Engineers', type: 'ai' })),
      { day: 2, start: 10, end: 11, title: 'Financial Literacy', type: 'core' },
      { day: 3, start: 10, end: 11, title: 'SIP Discussion', type: 'sip' },
      { day: 4, start: 10, end: 11, title: 'Reflection / Digital Portfolio', type: 'core' },
      ...[1, 2, 3, 4].map(d => ({ day: d, start: 11, end: 13, title: 'Problem Based Learning', type: 'pbl' })),
      ...[1, 2, 3, 4].map(d => ({ day: d, start: 13, end: 14, title: 'Community Lunch', type: 'community' })),
      ...[1, 2, 3, 4].map(d => ({ day: d, start: 14, end: 17, title: 'Unschool After-hours', type: 'unschool' }))
    ]
  };

  const FULL_DAYS = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday' };

  function fmt(h) {
    const hr = Math.floor(h), min = Math.round((h - hr) * 60);
    const ap = hr >= 12 ? 'pm' : 'am', h12 = ((hr + 11) % 12) + 1;
    return h12 + (min ? ':' + String(min).padStart(2, '0') : '') + ap;
  }
  function range(b) { return fmt(b.start) + ' – ' + fmt(b.end); }

  // Current day/time on campus (Mount Martha, VIC)
  function campusNow() {
    const parts = new Intl.DateTimeFormat('en-AU', {
      timeZone: 'Australia/Melbourne', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false
    }).formatToParts(new Date());
    const get = t => (parts.find(p => p.type === t) || {}).value;
    const h = parseInt(get('hour'), 10) % 24, m = parseInt(get('minute'), 10);
    return { day: get('weekday').slice(0, 3), hour: h + m / 60 };
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function renderWeek(root, week, opts) {
    week = week || DEFAULT_WEEK;
    opts = opts || {};
    const span = week.end - week.start;
    const types = Object.assign({}, TYPES, week.types || {});
    const info = Object.assign({}, INFO, week.info || {});
    let active = null, filter = null;
    let mobileDay = 0;

    root.classList.add('tt');
    root.innerHTML = `
      <div class="tt-top">
        <div class="tt-status" aria-live="polite"></div>
        <div class="tt-legend" role="group" aria-label="Filter by type"></div>
      </div>
      <div class="tt-tabs" role="tablist"></div>
      <div class="tt-body">
        <div class="tt-grid" style="--rows:${span}">
          <div class="tt-gutter"><div class="tt-dayhead"></div><div class="tt-hours"></div></div>
        </div>
        <aside class="tt-detail" hidden></aside>
      </div>`;

    const grid = root.querySelector('.tt-grid');
    const hours = root.querySelector('.tt-hours');
    for (let h = week.start; h <= week.end; h++) {
      const el = document.createElement('div');
      el.className = 'tt-hour';
      el.style.top = ((h - week.start) / span * 100) + '%';
      el.textContent = fmt(h);
      hours.appendChild(el);
    }

    const cols = week.days.map((d, i) => {
      const col = document.createElement('div');
      col.className = 'tt-col';
      col.dataset.day = d;
      col.innerHTML = `<div class="tt-dayhead"><span>${esc(d)}</span></div><div class="tt-track"></div>`;
      grid.appendChild(col);
      return col;
    });

    const blockEls = week.blocks.map(b => {
      const t = types[b.type] || TYPES.unschool;
      const el = document.createElement('button');
      el.type = 'button';
      el.className = 'tt-block t-' + b.type + (b.end - b.start <= 1 ? ' short' : '');
      el.style.setProperty('--c', t.color);
      el.style.top = ((b.start - week.start) / span * 100) + '%';
      el.style.height = ((b.end - b.start) / span * 100) + '%';
      el.innerHTML = `<span class="tt-title">${esc(b.title)}</span><span class="tt-time">${range(b)}</span>`;
      el.addEventListener('click', () => select(b, el));
      cols[b.day].querySelector('.tt-track').appendChild(el);
      return { b, el };
    });

    // legend doubles as a filter
    const legend = root.querySelector('.tt-legend');
    const used = [...new Set(week.blocks.map(b => b.type))];
    used.forEach(k => {
      const t = types[k] || TYPES.unschool;
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'tt-chip';
      chip.style.setProperty('--c', t.color);
      chip.setAttribute('aria-pressed', 'false');
      chip.innerHTML = `<i></i>${esc(t.label)}`;
      chip.addEventListener('click', () => {
        filter = filter === k ? null : k;
        legend.querySelectorAll('.tt-chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
        if (filter) chip.setAttribute('aria-pressed', 'true');
        blockEls.forEach(({ b, el }) => el.classList.toggle('dim', !!filter && b.type !== filter));
      });
      legend.appendChild(chip);
    });

    // mobile day tabs
    const tabs = root.querySelector('.tt-tabs');
    week.days.forEach((d, i) => {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.setAttribute('role', 'tab');
      tab.textContent = d;
      tab.addEventListener('click', () => setMobileDay(i));
      tabs.appendChild(tab);
    });
    function setMobileDay(i) {
      mobileDay = i;
      [...tabs.children].forEach((t, j) => t.setAttribute('aria-selected', String(i === j)));
      cols.forEach((c, j) => c.classList.toggle('m-show', i === j));
    }

    const detail = root.querySelector('.tt-detail');
    function select(b, el) {
      if (active) active.classList.remove('sel');
      if (active === el) { active = null; detail.hidden = true; return; }
      active = el;
      el.classList.add('sel');
      const t = types[b.type] || TYPES.unschool;
      detail.style.setProperty('--c', t.color);
      detail.innerHTML = `
        <div class="tt-d-type"><i></i>${esc(t.label)}</div>
        <h4>${esc(b.title)}</h4>
        <div class="tt-d-when">${esc(FULL_DAYS[week.days[b.day]] || week.days[b.day])} · ${range(b)}</div>
        <p>${esc(b.note || info[b.title] || '')}</p>
        <button type="button" class="tt-d-close" aria-label="Close">×</button>`;
      detail.querySelector('.tt-d-close').addEventListener('click', () => select(b, el));
      detail.hidden = false;
    }

    // now line + happening-now status
    const nowLine = document.createElement('div');
    nowLine.className = 'tt-now';
    const status = root.querySelector('.tt-status');
    function tick() {
      const now = campusNow();
      const di = week.days.indexOf(now.day);
      cols.forEach((c, i) => c.classList.toggle('today', i === di));
      blockEls.forEach(({ b, el }) => el.classList.toggle('live', b.day === di && now.hour >= b.start && now.hour < b.end));
      if (di >= 0 && now.hour >= week.start && now.hour <= week.end) {
        nowLine.style.top = ((now.hour - week.start) / span * 100) + '%';
        cols[di].querySelector('.tt-track').appendChild(nowLine);
      } else nowLine.remove();

      const live = blockEls.find(x => x.el.classList.contains('live'));
      const next = week.blocks
        .filter(b => b.day === di && b.start > now.hour)
        .sort((a, b) => a.start - b.start)[0];
      if (live) status.innerHTML = `<span class="pulse"></span>Now on campus: <b>${esc(live.b.title)}</b>` + (next ? ` <span class="muted">· next ${esc(next.title)} at ${fmt(next.start)}</span>` : '');
      else if (next) status.innerHTML = `<span class="pulse off"></span>Up next on campus: <b>${esc(next.title)}</b> at ${fmt(next.start)}`;
      else status.innerHTML = `<span class="pulse off"></span>Campus is quiet right now. Mount Martha time ${fmt(Math.floor(now.hour * 4) / 4)}`;
      return di;
    }
    const di = tick();
    setMobileDay(di >= 0 ? di : 0);
    setInterval(tick, 60000);
  }

  // Export the week as a recurring calendar the learner can import (Time Management, step one)
  function weekToICS(week, name) {
    week = week || DEFAULT_WEEK;
    const pad = n => String(n).padStart(2, '0');
    const byday = { Mon: 'MO', Tue: 'TU', Wed: 'WE', Thu: 'TH', Fri: 'FR', Sat: 'SA', Sun: 'SU' };
    const dayIdx = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    const today = new Date();
    const stamp = today.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Consensus21//Learning Week//EN',
      'CALSCALE:GREGORIAN', 'X-WR-CALNAME:' + (name || 'Consensus21 week'), 'X-WR-TIMEZONE:Australia/Melbourne'];
    week.blocks.forEach((b, i) => {
      const dname = week.days[b.day];
      const d = new Date(today);
      d.setDate(d.getDate() + ((dayIdx[dname] - d.getDay() + 7) % 7));
      const ymd = d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate());
      const t = h => pad(Math.floor(h)) + pad(Math.round((h % 1) * 60)) + '00';
      lines.push('BEGIN:VEVENT', 'UID:c21-' + i + '-' + ymd + '@consensus21.school', 'DTSTAMP:' + stamp,
        'DTSTART;TZID=Australia/Melbourne:' + ymd + 'T' + t(b.start),
        'DTEND;TZID=Australia/Melbourne:' + ymd + 'T' + t(b.end),
        'RRULE:FREQ=WEEKLY;BYDAY=' + byday[dname],
        'SUMMARY:' + b.title,
        'DESCRIPTION:' + (b.note || INFO[b.title] || '').replace(/[,;]/g, '\\$&'),
        'LOCATION:Consensus21 Campus 01\\, 370 Craigie Road\\, Mount Martha VIC 3934',
        'END:VEVENT');
    });
    lines.push('END:VCALENDAR');
    return lines.join('\r\n');
  }

  function downloadICS(week, filename) {
    const blob = new Blob([weekToICS(week)], { type: 'text/calendar' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename || 'consensus21-week.ics';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  }

  // Reveal-on-scroll for anything with .reveal
  function reveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
  }

  window.C21 = { TYPES, INFO, DEFAULT_WEEK, renderWeek, weekToICS, downloadICS, esc, reveal };
})();
