"""Minecraft-style block heads: 8x8 pixel faces drawn as a 3D cube (front, top, right side)."""
import os, sys
OUT = sys.argv[1]
os.makedirs(OUT, exist_ok=True)

U = 13                      # pixel size on the front face
DX, DY = 44, -40            # depth of the cube (whole 8 pixels)
X0, Y0 = 26, 68             # front face top-left

def grid(rows, pal, matrix, overlay=None):
    out = [f'<g transform="matrix({matrix})" shape-rendering="crispEdges">']
    for y, row in enumerate(rows):
        for x, ch in enumerate(row):
            out.append(f'<rect x="{x}" y="{y}" width="1.04" height="1.04" fill="{pal[ch]}"/>')
    if overlay:
        out.append(f'<rect width="8" height="8" fill="{overlay[0]}" opacity="{overlay[1]}"/>')
    out.append('<rect width="8" height="8" fill="none" stroke="#0b1220" stroke-width=".12"/></g>')
    return ''.join(out)

def head(bg, pal, front, top, side, title):
    m_front = f'{U} 0 0 {U} {X0} {Y0}'
    m_top = f'{U} 0 {-DX/8} {-DY/8} {X0+DX} {Y0+DY}'
    m_side = f'{DX/8} {DY/8} 0 {U} {X0+8*U} {Y0}'
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="{title}">'
            f'<title>{title}</title><defs><clipPath id="c"><circle cx="100" cy="100" r="100"/></clipPath></defs>'
            f'<g clip-path="url(#c)"><rect width="200" height="200" fill="{bg}"/>'
            f'<circle cx="100" cy="100" r="92" fill="#fff" opacity=".14"/>'
            f'<ellipse cx="{X0+8*U/2+DX/2}" cy="{Y0+8*U+6}" rx="78" ry="12" fill="#000" opacity=".18"/>'
            + grid(top, pal, m_top, ('#fff', .12))
            + grid(side, pal, m_side, ('#000', .24))
            + grid(front, pal, m_front)
            + '</g></svg>')

BASE = {'W': '#ffffff', 'M': '#6b2b2b', 'K': '#1f2937', 'Y': '#facc15', 'B': '#f08a8a'}
def P(**k): return {**BASE, **k}

A = {}

# Jaxon: short black curls, red sweatband
pal = P(H='#1a1110', h='#3a2618', S='#8d5524', s='#6b3f18', E='#3b2314', A='#ef4444', a='#fecaca')
A['jaxon'] = head('#38bdf8', pal,
    ['HhHHhHHh', 'AAaAAaAA', 'SSSSSSSS', 'SSSSSSSS', 'SWESSEWS', 'SSSssSSS', 'SSMMMMSS', 'SSSSSSSS'],
    ['hHHhHHhH', 'HHhHHHhH', 'HhHHhHHH', 'HHHhHHhH', 'hHHHHhHH', 'HHhHHHHh', 'HhHHhHHH', 'HHHhHHhH'],
    ['HhHHhHHh', 'AAAAAAAA', 'SSSSShHH', 'SSSSSHHH', 'SSSssSHH', 'SSSssSSH', 'SSSSSSSS', 'SSSSSSSS'], 'Jaxon')

# Priya: long dark hair, cyan goggles
pal = P(H='#2b1b17', h='#46302a', S='#c68642', s='#9e6830', E='#3b2314', G='#67e8f9', g='#0e7490')
A['priya'] = head('#a3e635', pal,
    ['HHHHHHHH', 'HGGKKGGH', 'HSSSSSSH', 'HSSSSSSH', 'HWESSEWH', 'HSSssSSH', 'HSSMMSSH', 'HSSSSSSH'],
    ['HHHhhHHH', 'HHHhhHHH', 'HHHhhHHH', 'HHHhhHHH', 'HHHhhHHH', 'HHHhhHHH', 'HHHhhHHH', 'KKKKKKKK'],
    ['HHHHHHHH', 'KKKKKKKK', 'SHHHHHHH', 'SHHHhHHH', 'SHHHHHHH', 'SHHhHHHH', 'SHHHHHHh', 'HHHHHHHH'], 'Priya')

# Lachie: blue beanie with pompom, ginger fringe, freckles, green eyes
pal = P(A='#1e3a8a', a='#2563eb', H='#c2410c', S='#f5cba7', s='#d9a07a', E='#16a34a', F='#b45309', p='#fbbf24')
A['lachie'] = head('#fde047', pal,
    ['AaAaAaAa', 'aaaaaaaa', 'HHSHHSHH', 'SSSSSSSS', 'SWESSEWS', 'SFSssSFS', 'SSSMMSSS', 'SSSSSSSS'],
    ['AaAaAaAa', 'AaAaAaAa', 'AaAaAaAa', 'AaappaAa', 'AaappaAa', 'AaAaAaAa', 'AaAaAaAa', 'AaAaAaAa'],
    ['AaAaAaAa', 'aaaaaaaa', 'HHHHHHHH', 'SSSSHHHH', 'SSSssHHH', 'SSSssHHH', 'SSSSSSHH', 'SSSSSSSS'], 'Lachie')

# Sofia: dark brown hair with bun, glasses, pink headphones
pal = P(H='#3b2314', h='#24150c', S='#d8a47f', s='#b5825e', E='#4a2c17', G='#111827', C='#f472b6', p='#fbcfe8')
A['sofia'] = head('#c084fc', pal,
    ['HHHHHHHH', 'HHHHHHSH', 'HSSSSSSS', 'SSSSSSSS', 'GWEGGEWG', 'SSSssSSS', 'SSMMMMSS', 'SSSSSSSS'],
    ['HHHHHHHH', 'HHHhhHHH', 'HHhhhhHH', 'HHhhhhHH', 'KKKKKKKK', 'HHHHHHHH', 'HHHHHHHH', 'HHHHHHHH'],
    ['HHHKKHHH', 'HHHKKHHH', 'SSCCCCHH', 'SSCppCHH', 'SSCppCHH', 'SSCCCCHH', 'SSSSSSHH', 'SSSSSSSH'], 'Sofia')

# Ruby: black hair with bangs, yellow bows, rosy cheeks
pal = P(H='#171717', h='#2e2e2e', S='#f3d2b3', s='#d9ab86', E='#3f2a1d', y='#fde047')
A['ruby'] = head('#fdba74', pal,
    ['HHHHHHHH', 'HHHHHHHH', 'HHHHHHHH', 'SSSSSSSS', 'SWESSEWS', 'SBSssSBS', 'SSSMMSSS', 'SSSSSSSS'],
    ['HHHhHHHH', 'HHHhHHHH', 'HHHhHHHH', 'HHHhHHHH', 'HHHhHHHH', 'HHHhHHHH', 'HHHhHHHH', 'HHHhHHHH'],
    ['HHHHHHHH', 'HHHYyHHH', 'HHHyYHHH', 'SSHHHHHH', 'SSSHHHHH', 'SSSHHHhH', 'SSSSHHHH', 'SSSSSHHH'], 'Ruby')

for k, v in A.items():
    open(os.path.join(OUT, k + '.svg'), 'w').write(v)
print('wrote', list(A))
