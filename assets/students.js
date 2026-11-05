/* Example Consensus21 learners. Fictional, for showing what a profile looks like.
   Dates are "days ago" so the profiles always look current. */
window.C21_STUDENTS = [
  {
    id: 'jaxon', login: 'jaxon-c21', name: 'Jaxon Reid', age: 14, stage: 'Builder', color: '#38bdf8',
    focus: 'Sports science for the local footy club',
    bio: 'Sports science nerd. Building tools for my local footy club so the coaches can stop using whiteboards.',
    followers: 31, following: 18,
    headline: "Hey, I'm Jaxon 🏉",
    about: 'Most of what I build is for the Mount Martha U15s: stats, sprint times and recovery. If a coach asks for it twice, I make a tool for it.',
    activity: { seed: 7, rate: 0.62, peak: 9 },
    mentors: [{ id: 'priya', note: 'Python' }, { name: 'Coach Dana' }],
    pinned: ['footy-stats', 'sprint-timer', 'recovery-tracker', 'surf-fit-drills'],
    programs: { 'Time management': 68, 'Financial literacy & blockchain': 52, 'Reflection & portfolio': 74 },
    repos: [
      { name: 'footy-stats', language: 'Python', stars: 9, created: 160, w: 5, description: 'Live stat tracking for the U15s from a phone on the boundary: disposals, tackles, goals.' },
      { name: 'sprint-timer', language: 'C++', stars: 3, created: 70, w: 3, description: 'Two laser gates and an Arduino. 20m sprint times to the nearest hundredth.' },
      { name: 'recovery-tracker', language: 'JavaScript', stars: 4, created: 110, w: 2, description: 'Sleep, soreness and training load for the team, with a weekly report for each player.' },
      { name: 'surf-fit-drills', language: 'Markdown', stars: 6, created: 40, w: 1, description: 'Surf lifesaving drills for C21 Fit, written up and tested on Mount Martha beach.' }
    ],
    explorers: [
      { ago: 3, title: 'Mount Martha Life Saving Club', note: 'Did the pool test. The coach showed me how they track training load, which is basically my recovery-tracker.' },
      { ago: 31, title: 'University sports science lab', note: 'Got my VO2 max tested. Asked how they calibrate timing gates.' },
      { ago: 59, title: 'Club training night, Frankston', note: 'Watched how a senior team runs drills. Stole three for surf-fit-drills.' }
    ],
    reflections: [
      { ago: 6, title: 'Week 45: footy-stats survived a real game', note: 'Phone battery died in the third quarter. Adding offline save.' },
      { ago: 13, title: 'Week 44: sprint gates finally consistent', note: 'Sunlight was tripping the sensors. Shaded tubes fixed it.' },
      { ago: 20, title: 'Week 43: wrote my first SIP', note: 'Harder than code. You have to convince people, not compilers.' }
    ],
    sips: [
      { ago: 21, id: 'SIP-009', title: 'Surf option for C21 Fit in Term 1', status: 'accepted', note: 'Two mornings a week on the beach, run with the life saving club.' },
      { ago: 4, id: 'SIP-014', title: 'A sports kit library', status: 'discussion', note: 'Borrow boots, boards and bats instead of every family buying them.' }
    ]
  },
  {
    id: 'priya', login: 'priya-c21', name: 'Priya Nair', age: 16, stage: 'Founder', color: '#a3e635',
    focus: 'Robots that look after gardens',
    bio: 'Robots that look after gardens. Currently teaching a mower the difference between kikuyu and native grasses.',
    followers: 64, following: 27,
    headline: "Hi, I'm Priya 🌱🤖",
    about: 'I build landscaping robots. My fund unlocks in two years and I want a small business by then: robot care for native gardens on the Peninsula.',
    activity: { seed: 13, rate: 0.8, peak: 13 },
    mentors: [{ name: 'Ravi, landscape engineer' }],
    pinned: ['mowbot', 'weed-spotter', 'drip-brain', 'garden-map'],
    programs: { 'Time management': 85, 'Financial literacy & blockchain': 70, 'Reflection & portfolio': 90 },
    repos: [
      { name: 'mowbot', language: 'C++', stars: 18, created: 300, w: 5, description: 'Autonomous mower for native gardens. GPS fence, bump sensors, and it avoids anything on the keep list.' },
      { name: 'weed-spotter', language: 'Python', stars: 12, created: 140, w: 4, description: 'A camera and a small vision model that tells weeds from natives. 91% on 1,200 test photos.' },
      { name: 'drip-brain', language: 'C++', stars: 8, created: 200, w: 2, description: 'Soil-moisture irrigation controller. Cut water use on the campus beds by about a third.' },
      { name: 'garden-map', language: 'JavaScript', stars: 5, created: 60, w: 2, description: 'Every bed on campus: what is planted, when it was watered, what the robot did.' }
    ],
    explorers: [
      { ago: 3, title: 'Landscaping crew, Mornington', note: 'A day with a crew of four. Edging takes them longer than mowing, so that is my next target.' },
      { ago: 24, title: 'Royal Botanic Gardens Cranbourne', note: 'Photographed 300 native grasses for the weed-spotter training set.' },
      { ago: 52, title: 'University robotics lab open day', note: 'Asked about outdoor localisation. GPS alone is not good enough under trees.' }
    ],
    reflections: [
      { ago: 6, title: 'Week 45: mowbot did a full lap without help', note: 'Forty minutes, no rescues. Battery is the next problem.' },
      { ago: 13, title: 'Week 44: my weed model was learning shadows', note: 'It flagged anything in shade. Retook photos at midday.' },
      { ago: 20, title: 'Week 43: pitched drip-brain to a nursery', note: 'They want three. I need to work out what to charge.' }
    ],
    sips: [
      { ago: 70, id: 'SIP-012', title: 'Robotics bench in the shed', status: 'accepted', note: 'A proper bench, tools and a parts budget anyone can use.' },
      { ago: 9, id: 'SIP-016', title: 'Native-only planting on campus', status: 'voting', note: 'Less water, more wildlife, and easier for the robots.' }
    ]
  },
  {
    id: 'lachie', login: 'lachie-c21', name: 'Lachie Brooks', age: 15, stage: 'Builder', color: '#fde047',
    focus: 'Helping people sleeping rough on the Peninsula',
    bio: 'Working out how a 15-year-old can actually help people sleeping rough on the Peninsula. Mostly listening, then building small useful things.',
    followers: 42, following: 35,
    headline: "G'day, I'm Lachie 🧡",
    about: 'I volunteer on the soup van and build simple tools for the people and services there. Everything is checked with the people it is meant to help before it ships.',
    activity: { seed: 29, rate: 0.55, peak: 8 },
    mentors: [{ name: 'Mel, youth worker' }, { id: 'sofia', note: 'design' }],
    pinned: ['beds-tonight', 'warm-kits', 'service-directory', 'streetside-stories'],
    programs: { 'Time management': 60, 'Financial literacy & blockchain': 48, 'Reflection & portfolio': 81 },
    repos: [
      { name: 'beds-tonight', language: 'JavaScript', stars: 14, created: 120, w: 5, description: 'Which local shelters have a bed free tonight. Services update it with a text message.' },
      { name: 'warm-kits', language: 'Markdown', stars: 7, created: 180, w: 2, description: 'Packing lists, budgets and runs for winter kits. 212 handed out so far with the soup van.' },
      { name: 'service-directory', language: 'HTML', stars: 6, created: 80, w: 3, description: 'Plain-English directory of Peninsula support services that works on a cracked phone screen.' },
      { name: 'streetside-stories', language: 'Markdown', stars: 3, created: 35, w: 1, description: 'Interviews, with permission, about what actually helps. The basis for my next SIP.' }
    ],
    explorers: [
      { ago: 3, title: 'Night shift on the soup van, Frankston', note: 'Forty meals. The biggest ask was not food, it was somewhere to charge a phone.' },
      { ago: 38, title: 'Drop-in centre, Rosebud', note: 'Shadowed the intake worker. Paper forms everywhere, which gave me an idea.' },
      { ago: 66, title: 'Council housing team', note: 'Learned how the waiting list works. It is longer than I thought.' }
    ],
    reflections: [
      { ago: 6, title: 'Week 45: phone charging station prototype', note: 'A solar panel and a lockbox. Testing it at the van next week.' },
      { ago: 13, title: 'Week 44: two services now update beds-tonight', note: 'Text messages beat an app. Nobody wants another login.' },
      { ago: 27, title: 'Week 42: learned to ask before helping', note: 'I built a feature nobody wanted. Deleted it.' }
    ],
    sips: [
      { ago: 45, id: 'SIP-015', title: 'Community Lunch leftovers to the soup van', status: 'accepted', note: 'Leftovers are packed and dropped off on Thursday nights.' },
      { ago: 5, id: 'SIP-019', title: 'A service day each term', status: 'discussion', note: 'The whole school volunteers somewhere local for a day.' }
    ]
  },
  {
    id: 'sofia', login: 'sofia-c21', name: 'Sofia Mendes', age: 12, stage: 'Builder', color: '#c084fc',
    focus: 'Making games about the ocean',
    bio: 'I make small games about the ocean. Godot, pixel art, and too many sound effects.',
    followers: 57, following: 40,
    headline: "Hi! I'm Sofia 🎮🐚",
    about: 'My games are set in the rockpools at Mount Martha. I playtest everything with the younger learners because they are the most honest critics.',
    activity: { seed: 41, rate: 0.7, peak: 11 },
    mentors: [{ name: 'Tom, game developer' }],
    pinned: ['tidepool-quest', 'pixel-pals', 'jam-2026', 'sfx-bucket'],
    programs: { 'Time management': 55, 'Financial literacy & blockchain': 40, 'Reflection & portfolio': 77 },
    repos: [
      { name: 'tidepool-quest', language: 'GDScript', stars: 21, created: 210, w: 5, description: 'Puzzle-platformer in the Mount Martha rockpools. You are a hermit crab looking for a bigger shell.' },
      { name: 'pixel-pals', language: 'Lua', stars: 11, created: 150, w: 2, description: 'Free sprite pack: 64 sea creatures in 16×16. Used in three other learners\' games.' },
      { name: 'jam-2026', language: 'GDScript', stars: 6, created: 75, w: 2, description: '48-hour game jam entry, "Low Tide". Came third in the under-15s.' },
      { name: 'sfx-bucket', language: 'Markdown', stars: 2, created: 30, w: 1, description: 'Sound effects recorded on Explorers Days: waves, gulls, one very angry seagull.' }
    ],
    explorers: [
      { ago: 3, title: 'ACMI, Melbourne', note: 'Played games from the 80s and asked a curator how they decide what to keep.' },
      { ago: 31, title: 'Indie game studio, Collingwood', note: 'Six people made a game I have played. They use the same engine as me!' },
      { ago: 45, title: 'Rockpool walk with a marine biologist', note: 'Hermit crabs actually queue up by size to swap shells. That is now a level.' }
    ],
    reflections: [
      { ago: 6, title: 'Week 45: the crab can finally change shells', note: 'Took three tries. The animation was the hard part, not the code.' },
      { ago: 13, title: 'Week 44: playtest with the seven-year-olds', note: 'Nobody found the jump button. Making it bigger.' },
      { ago: 20, title: 'Week 43: cut two levels', note: 'The game got better when it got shorter.' }
    ],
    sips: [
      { ago: 36, id: 'SIP-018', title: 'Friday game showcase at Community Lunch', status: 'accepted', note: 'Anyone can show something they made. Games, music, robots, anything.' }
    ]
  },
  {
    id: 'ruby', login: 'ruby-c21', name: 'Ruby Chen', age: 8, stage: 'Explorer', color: '#fdba74',
    focus: 'Bugs, birds and a bug-hotel camera',
    bio: 'I like bugs. I built a bug hotel and a camera that watches it.',
    followers: 22, following: 9,
    headline: "I'm Ruby 🐞",
    about: 'I look for bugs and birds and write down what I find. Sofia helps me with the computer parts.',
    activity: { seed: 53, rate: 0.35, peak: 4 },
    mentors: [{ id: 'sofia', note: 'Scratch' }, { name: 'Jen, parent mentor' }],
    pinned: ['bug-hotel-cam', 'backyard-birds', 'worm-farm-log'],
    programs: { 'Time management': 30, 'Financial literacy & blockchain': 20, 'Reflection & portfolio': 55 },
    repos: [
      { name: 'bug-hotel-cam', language: 'Scratch', stars: 9, created: 90, w: 3, description: 'A camera watches my bug hotel and counts visitors. Most visitors: earwigs.' },
      { name: 'backyard-birds', language: 'Markdown', stars: 5, created: 200, w: 2, description: 'Every bird I saw this year, drawn and counted. 23 kinds so far!' },
      { name: 'worm-farm-log', language: 'Markdown', stars: 2, created: 50, w: 1, description: 'How heavy my worm farm gets every week.' }
    ],
    explorers: [
      { ago: 3, title: 'The Briars, Mount Martha', note: 'I saw a koala and three kinds of frog.' },
      { ago: 24, title: 'Melbourne Museum bug room', note: 'The biggest stick insect is longer than my arm.' },
      { ago: 52, title: 'Rockpools at Mount Martha beach', note: 'Sofia showed me the hermit crabs from her game.' }
    ],
    reflections: [
      { ago: 6, title: 'Week 45: my camera saw a moth at night', note: 'I had to turn on the night light setting.' },
      { ago: 13, title: 'Week 44: I drew 4 new birds', note: 'The wattlebird was the hardest.' }
    ],
    sips: [
      { ago: 8, id: 'SIP-021', title: 'A school pet chicken', status: 'discussion', note: 'Chickens eat bugs and lay eggs and they are nice.' }
    ]
  }
];
