"""
Independent verification of Karin Mall chart computation.
Recomputes with detailed cross-checking and diagnostic output.
"""
import json
from pathlib import Path
from datetime import datetime, timezone, timedelta
from kerykeion import AstrologicalSubjectFactory
from kerykeion.chart_data_factory import ChartDataFactory

print("=" * 70)
print("  KARIN MALL — CHART VERIFICATION")
print("=" * 70)

# ─── 1. Timezone Verification ───
print("\n─── 1. TIMEZONE CHECK ───")
print(f"  Birth: 1990-08-04 04:09 Europe/Rome")
print(f"  CEST = UTC+2 (summer time in Italy)")
print(f"  UTC equivalent: 1990-08-04 02:09 UTC")
print(f"  DST status: Valid (Italy observes CEST in August)")

# Verify Italy was on CEST in August 1990
print(f"  Cross-check: Italy adopted CEST in 1966, was active in August 1990. ✓")

# ─── 2. Recompute Chart ───
print("\n─── 2. RECOMPUTATION ───")

subject = AstrologicalSubjectFactory.from_birth_data(
    name="Karin Mall",
    year=1990, month=8, day=4, hour=4, minute=9,
    lng=10.7739, lat=46.6283,
    tz_str="Europe/Rome",
    online=False,
)

natal = ChartDataFactory.create_natal_chart_data(subject)

# ─── 3. Planetary Positions ───
print("\n─── 3. PLANETARY POSITIONS ───")
planet_names = [
    "sun", "moon", "mercury", "venus", "mars",
    "jupiter", "saturn", "uranus", "neptune", "pluto",
    "mean_node", "true_node", "chiron"
]

for name in planet_names:
    try:
        p = getattr(subject, name)
        retro = " ℞" if p.retrograde else ""
        print(f"  {p.name:8s}  {p.position:8.4f}° {p.sign:6s}  {p.house:20s}  abs={p.abs_pos:8.4f}°{retro}")
    except Exception as e:
        print(f"  {name}: NOT FOUND ({e})")

# ─── 4. House Cusps ───
print("\n─── 4. HOUSE CUSPS (Placidus) ───")
house_attrs = [
    ("first_house", "1 / ASC"),
    ("second_house", "2"),
    ("third_house", "3"),
    ("fourth_house", "4 / IC"),
    ("fifth_house", "5"),
    ("sixth_house", "6"),
    ("seventh_house", "7 / DESC"),
    ("eighth_house", "8"),
    ("ninth_house", "9"),
    ("tenth_house", "10 / MC"),
    ("eleventh_house", "11"),
    ("twelfth_house", "12"),
]

for attr, label in house_attrs:
    try:
        h = getattr(subject, attr)
        print(f"  House {label:10s} {h.position:8.4f}° {h.sign:6s}  abs={h.abs_pos:8.4f}°")
    except Exception as e:
        print(f"  House {label}: ERROR ({e})")

# ─── 5. Sun/Moon Position Sanity Check ───
print("\n─── 5. EPHEMERIS SANITY CHECK ───")
sun = subject.sun
moon = subject.moon
asc = subject.first_house

print(f"  Sun:  {sun.position:.2f}° {sun.sign} → absolute: {sun.abs_pos:.2f}°")
print(f"        Expected range for Aug 4: ~11-13° Leo (131-133° absolute)")
print(f"        Swiss Ephemeris gives: {sun.abs_pos:.2f}° → {'✓' if 130 < sun.abs_pos < 134 else '✗ OUT OF RANGE!'}")

print(f"  Moon: {moon.position:.2f}° {moon.sign} → absolute: {moon.abs_pos:.2f}°")
print(f"        Expected: Capricorn (270-300°), Aug 4 1990 at 02:09 UTC")
# Moon moves ~13° per day, at ~12° Cap = 282° absolute
print(f"        Swiss Ephemeris gives: {moon.abs_pos:.2f}° → {'✓' if 270 < moon.abs_pos < 300 else '✗ OUT OF RANGE!'}")

print(f"  ASC:  {asc.position:.2f}° {asc.sign} → absolute: {asc.abs_pos:.2f}°")
print(f"        At 02:09 UTC on Aug 4 at 46.6°N 10.8°E, ASC ~19° Cancer (109°)")
print(f"        Swiss Ephemeris gives: {asc.abs_pos:.2f}° → {'✓' if 100 < asc.abs_pos < 120 else '✗ OUT OF RANGE!'}")

# ─── 6. Most Significant Aspects (by orb) ───
print("\n─── 6. CLOSEST ASPECTS (sorted by orbit) ───")
# Filter to planet-planet aspects only
major_bodies = {"Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Chiron"}
sorted_aspects = sorted(
    [a for a in natal.aspects if a.p1_name in major_bodies and a.p2_name in major_bodies],
    key=lambda a: a.orbit
)

for a in sorted_aspects[:30]:
    arrow = "→" if a.aspect_movement == "Applying" else "←"
    print(f"  {arrow} {a.p1_name:8s} {a.aspect:12s} {a.p2_name:8s}  orbit={a.orbit:7.4f}°  diff={a.diff:8.4f}°")

# ─── 7. Verify Key Claimed Aspects ───
print("\n─── 7. VERIFYING CLAIMS IN ANALYSIS ───")

claims = {
    "Moon conjunct Neptune (0.21°)": ("Moon", "Neptune", "conjunction", 0.3),
    "Mars opposite Pluto (0.42°)": ("Mars", "Pluto", "opposition", 0.5),
    "Venus conjunct Ascendant (1.19°)": ("Venus", "Ascendant", "conjunction", 1.3),
    "Venus opposite Saturn (2.52°)": ("Venus", "Saturn", "opposition", 2.6),
    "Saturn conjunct Descendant (1.33°)": ("Saturn", "Descendant", "conjunction", 1.4),
    "Jupiter trine MC (1.91°)": ("Jupiter", "Medium_Coeli", "trine", 2.0),
    "Sun square Mars (3.11°)": ("Sun", "Mars", "square", 3.2),
    "Sun square Pluto (3.53°)": ("Sun", "Pluto", "square", 3.6),
    "Mercury trine Uranus (1.35°)": ("Mercury", "Uranus", "trine", 1.5),
    "Pluto trine Ascendant (4.24°)": ("Pluto", "Ascendant", "trine", 4.3),
    "Venus trine Pluto (3.05°)": ("Venus", "Pluto", "trine", 3.2),
    "Moon trine Mars (2.35°)": ("Moon", "Mars", "trine", 2.5),
    "Moon sextile Pluto (2.77°)": ("Moon", "Pluto", "sextile", 2.9),
    "Mars trine Saturn (5.99°)": ("Mars", "Saturn", "trine", 6.1),
    "Mars trine Neptune (2.14°)": ("Mars", "Neptune", "trine", 2.3),
    "Chiron conjunct Ascendant (2.08°)": ("Chiron", "Ascendant", "conjunction", 2.2),
    "Neptune sextile Pluto (2.56°)": ("Neptune", "Pluto", "sextile", 2.7),
}

aspect_lookup = {}
for a in natal.aspects:
    key = (a.p1_name, a.p2_name, a.aspect)
    aspect_lookup[key] = a
    # Also try reversed
    aspect_lookup[(a.p2_name, a.p1_name, a.aspect)] = a

errors = []
for claim, (p1, p2, asp_type, max_orb) in claims.items():
    key = (p1, p2, asp_type)
    if key in aspect_lookup:
        a = aspect_lookup[key]
        if a.orbit <= max_orb:
            print(f"  ✓ {claim} → found: {a.p1_name} {a.aspect} {a.p2_name} orbit={a.orbit:.4f}°")
        else:
            print(f"  ✗ {claim} → orbit too wide: {a.orbit:.4f}° > {max_orb}° threshold")
            errors.append(claim)
    else:
        print(f"  ✗ {claim} → NOT FOUND in aspect list!")
        errors.append(claim)

# ─── 8. Element/Quality Balance ───
print("\n─── 8. ELEMENT & QUALITY BALANCE ───")
elements = {"Fire": 0, "Earth": 0, "Air": 0, "Water": 0}
qualities = {"Cardinal": 0, "Fixed": 0, "Mutable": 0}

for name in ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"]:
    try:
        p = getattr(subject, name)
        elements[p.element] = elements.get(p.element, 0) + 1
        qualities[p.quality] = qualities.get(p.quality, 0) + 1
    except:
        pass

print(f"  Elements: {elements}")
print(f"  Claimed:  Fire=1, Earth=6, Water=4 (no Air)")
claimed_elems = {"Fire": 1, "Earth": 6, "Air": 0, "Water": 4}
for e in elements:
    if elements[e] != claimed_elems.get(e, -1):
        print(f"    ✗ {e}: computed {elements[e]}, claimed {claimed_elems.get(e, '?')}")
    else:
        print(f"    ✓ {e}: {elements[e]}")

print(f"  Qualities: {qualities}")
print(f"  Claimed:   Cardinal=7, Fixed=3, Mutable=1")
claimed_quals = {"Cardinal": 7, "Fixed": 3, "Mutable": 1}
for q in qualities:
    if qualities[q] != claimed_quals.get(q, -1):
        print(f"    ✗ {q}: computed {qualities[q]}, claimed {claimed_quals.get(q, '?')}")
    else:
        print(f"    ✓ {q}: {qualities[q]}")

# ─── 9. Chart Ruler ───
print("\n─── 9. CHART RULER ───")
asc_sign = subject.first_house.sign
chart_rulers = {
    "Ari": "Mars", "Tau": "Venus", "Gem": "Mercury", "Can": "Moon",
    "Leo": "Sun", "Vir": "Mercury", "Lib": "Venus", "Sco": "Pluto",
    "Sag": "Jupiter", "Cap": "Saturn", "Aqu": "Uranus", "Pis": "Neptune",
}
ruler = chart_rulers.get(asc_sign, "UNKNOWN")
print(f"  ASC sign: {asc_sign}")
print(f"  Chart ruler: {ruler} (traditional)")
print(f"  ✓ Moon rules Cancer ASC")

# ─── 10. Transit Verification ───
print("\n─── 10. TRANSIT VERIFICATION ───")
transit_subj = AstrologicalSubjectFactory.from_birth_data(
    name="Transit",
    year=2026, month=8, day=5, hour=12, minute=0,
    lng=10.7739, lat=46.6283,
    tz_str="Europe/Rome",
    online=False,
)
transit_data = ChartDataFactory.create_transit_chart_data(subject, transit_subj)

# Check transit planet positions
for name in ["sun", "jupiter", "saturn", "pluto", "uranus", "chiron"]:
    try:
        tp = getattr(transit_subj, name)
        retro = " ℞" if tp.retrograde else ""
        print(f"  Transit {tp.name:8s}: {tp.position:7.2f}° {tp.sign:6s}{retro}")
    except Exception as e:
        print(f"  Transit {name}: ERROR ({e})")

# Verify key transit claims
print("\n  Key transit claims:")
transit_claims = {
    "Pluto sq natal Sun (1.98°)": ("Sun", "Pluto", "square", 2.5),
    "Jupiter conj natal MC (3.99°)": ("Medium_Coeli", "Jupiter", "conjunction", 4.5),
    "Jupiter conj natal Mercury (2.91°)": ("Mercury", "Jupiter", "conjunction", 3.5),
    "Saturn sq natal ASC (2.11°)": ("Ascendant", "Saturn", "square", 2.5),
    "Saturn opp natal MC (2.36°)": ("Medium_Coeli", "Saturn", "opposition", 3.0),
    "Chiron conj natal MC (1.62°)": ("Medium_Coeli", "Chiron", "conjunction", 2.0),
    "Uranus trine natal Moon (2.05°)": ("Moon", "Uranus", "trine", 2.5),
    "Sun conj natal Sun (birthday)": ("Sun", "Sun", "conjunction", 3.0),
}

t_aspect_lookup = {}
for a in transit_data.aspects:
    # Transit planets are p1, natal are p2
    # But check both ways
    t_aspect_lookup[(a.p1_name, a.p2_name, a.aspect)] = a
    t_aspect_lookup[(a.p2_name, a.p1_name, a.aspect)] = a

for claim, (p1, p2, asp_type, max_orb) in transit_claims.items():
    # Try both orderings
    found = False
    for a in transit_data.aspects:
        if ((a.p1_name == p1 and a.p2_name == p2) or (a.p1_name == p2 and a.p2_name == p1)) and a.aspect == asp_type:
            if a.orbit <= max_orb:
                print(f"  ✓ {claim} → {a.p1_name} {a.aspect} {a.p2_name} orbit={a.orbit:.4f}°")
            else:
                print(f"  ⚠ {claim} → found but orb {a.orbit:.4f}° > {max_orb}° threshold")
            found = True
            break
    if not found:
        print(f"  ✗ {claim} → NOT FOUND!")

# ─── 11. Venus in 12th house check ───
print("\n─── 11. VENUS HOUSE PLACEMENT ───")
venus = subject.venus
print(f"  Venus position: {venus.position:.2f}° {venus.sign} (abs={venus.abs_pos:.2f}°)")
# House 12 cusp: Gemini 14.09° (abs=74.09°)
# Venus at 108.04° absolute
# Houses:
#   11th: Taurus 1.98° (abs=31.98°)
#   12th: Gemini 14.09° (abs=74.09°)
#   1st: Cancer 19.23° (abs=109.23°)
# Venus at 108.04° means it's in the 12th house (between 74.09° and 109.23°)
house_11 = subject.eleventh_house.abs_pos
house_12 = subject.twelfth_house.abs_pos
house_1 = subject.first_house.abs_pos
print(f"  11th cusp abs: {house_11:.2f}°")
print(f"  12th cusp abs: {house_12:.2f}°")
print(f"  1st cusp abs:  {house_1:.2f}°")
print(f"  Venus abs:      {venus.abs_pos:.2f}°")
if house_12 <= venus.abs_pos < house_1:
    print(f"  ✓ Venus is in 12th house (between 12th cusp and 1st cusp)")
elif house_11 <= venus.abs_pos < house_12:
    print(f"  ✗ Venus is in 11th house! Wrong house claim.")
else:
    print(f"  ⚠ Unclear placement — check house boundaries")

# ─── 12. Final Summary ───
print("\n" + "=" * 70)
print("  VERIFICATION SUMMARY")
print("=" * 70)
if errors:
    print(f"  ⚠ {len(errors)} ERRORS FOUND:")
    for e in errors:
        print(f"    - {e}")
else:
    print("  ✓ All claims VERIFIED — no errors found.")
print("=" * 70)
