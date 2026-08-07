"""
Compute full natal chart for Karin Mall and output structured data.
Birth: 4 August 1990, 04:09 AM, Schlanders/Silandro, South Tyrol, Italy
"""
import json
import os
from pathlib import Path
from datetime import datetime
from kerykeion import AstrologicalSubjectFactory
from kerykeion.chart_data_factory import ChartDataFactory
from kerykeion.charts.chart_drawer import ChartDrawer

# Ensure output directory
analyses_dir = Path("analyses")
analyses_dir.mkdir(exist_ok=True, parents=True)

# Birth data
subject = AstrologicalSubjectFactory.from_birth_data(
    name="Karin Mall",
    year=1990,
    month=8,
    day=4,
    hour=4,
    minute=9,
    lng=10.7739,
    lat=46.6283,
    tz_str="Europe/Rome",
    online=False,
)

# Compute natal chart data
natal_data = ChartDataFactory.create_natal_chart_data(subject)

# Generate SVG chart
chart_drawer = ChartDrawer(chart_data=natal_data)
chart_drawer.save_svg(output_path=analyses_dir, filename="karin-mall-natal")

# Compute current transits (Aug 5, 2026)
transit_subject = AstrologicalSubjectFactory.from_birth_data(
    name="Transit 2026-08-05",
    year=2026,
    month=8,
    day=5,
    hour=12,
    minute=0,
    lng=10.7739,
    lat=46.6283,
    tz_str="Europe/Rome",
    online=False,
)
transit_data = ChartDataFactory.create_transit_chart_data(subject, transit_subject)
transit_drawer = ChartDrawer(chart_data=transit_data)
transit_drawer.save_svg(output_path=analyses_dir, filename="karin-mall-transits")

# --- Dump structured data ---
output = {}

# Subject info
output["subject"] = {
    "name": subject.name,
    "birth_date": "1990-08-04",
    "birth_time": "04:09",
    "location": "Schlanders/Silandro, South Tyrol, Italy",
    "coordinates": {"lat": 46.6283, "lng": 10.7739},
    "timezone": "Europe/Rome",
    "sex": "Female",
}

# Planet positions from the subject model
planet_names = [
    "sun", "moon", "mercury", "venus", "mars",
    "jupiter", "saturn", "uranus", "neptune", "pluto",
    "mean_node", "true_node", "chiron", "lilith"
]
planets = []
for planet_name in planet_names:
    try:
        p = getattr(subject, planet_name)
        planets.append({
            "name": p.name,
            "sign": p.sign,
            "sign_num": p.sign_num,
            "position": round(p.position, 4),
            "abs_pos": round(p.abs_pos, 4),
            "house": p.house,
            "retrograde": p.retrograde,
            "element": p.element,
            "quality": p.quality,
        })
    except Exception:
        pass
output["planets"] = planets

# Houses
houses = []
house_names_map = [
    ("first_house", 1), ("second_house", 2), ("third_house", 3),
    ("fourth_house", 4), ("fifth_house", 5), ("sixth_house", 6),
    ("seventh_house", 7), ("eighth_house", 8), ("ninth_house", 9),
    ("tenth_house", 10), ("eleventh_house", 11), ("twelfth_house", 12),
]
for attr_name, house_num in house_names_map:
    try:
        h = getattr(subject, attr_name)
        houses.append({
            "house_number": house_num,
            "sign": h.sign,
            "position": round(h.position, 4),
            "abs_pos": round(h.abs_pos, 4),
            "element": h.element,
            "quality": h.quality,
        })
    except Exception:
        pass
output["houses"] = houses

# Aspects from chart data (correct field names: orbit, aspect, p1_name, p2_name)
aspects = []
for aspect in natal_data.aspects:
    aspects.append({
        "planet1": aspect.p1_name,
        "planet2": aspect.p2_name,
        "aspect_type": aspect.aspect,
        "orbit": round(aspect.orbit, 4),
        "diff": round(aspect.diff, 4),
        "movement": aspect.aspect_movement,
    })
output["aspects"] = aspects

# Chart data summary
output["chart_summary"] = {
    "ascendant_sign": subject.first_house.sign if hasattr(subject, 'first_house') else "N/A",
    "ascendant_degree": round(subject.first_house.position, 2) if hasattr(subject, 'first_house') else None,
    "midheaven_sign": subject.tenth_house.sign if hasattr(subject, 'tenth_house') else "N/A",
    "midheaven_degree": round(subject.tenth_house.position, 2) if hasattr(subject, 'tenth_house') else None,
    "sun_sign": subject.sun.sign,
    "moon_sign": subject.moon.sign,
}

# Determine chart ruler by Ascendant
asc_sign = subject.first_house.sign if hasattr(subject, 'first_house') else ""
chart_rulers = {
    "Ari": "Mars", "Tau": "Venus", "Gem": "Mercury", "Can": "Moon",
    "Leo": "Sun", "Vir": "Mercury", "Lib": "Venus", "Sco": "Pluto",
    "Sag": "Jupiter", "Cap": "Saturn", "Aqu": "Uranus", "Pis": "Neptune",
}
output["chart_summary"]["chart_ruler"] = chart_rulers.get(asc_sign, "N/A")

# Element counts
element_counts = {}
for p in planets:
    elem = p["element"]
    element_counts[elem] = element_counts.get(elem, 0) + 1
output["chart_summary"]["element_balance"] = element_counts

# Quality counts
quality_counts = {}
for p in planets:
    qual = p["quality"]
    quality_counts[qual] = quality_counts.get(qual, 0) + 1
output["chart_summary"]["quality_balance"] = quality_counts

# Transits
transit_aspects = []
for aspect in transit_data.aspects:
    transit_aspects.append({
        "transit_planet": aspect.p1_name,
        "natal_planet": aspect.p2_name,
        "aspect_type": aspect.aspect,
        "orbit": round(aspect.orbit, 4),
        "movement": aspect.aspect_movement,
    })
output["current_transits"] = {
    "date": "2026-08-05",
    "aspects": transit_aspects,
}

# Transit planet positions
transit_planets = []
for planet_name in [
    "sun", "moon", "mercury", "venus", "mars",
    "jupiter", "saturn", "uranus", "neptune", "pluto"
]:
    try:
        p = getattr(transit_subject, planet_name)
        transit_planets.append({
            "name": p.name,
            "sign": p.sign,
            "position": round(p.position, 4),
            "retrograde": p.retrograde,
        })
    except Exception:
        pass
output["current_transits"]["planet_positions"] = transit_planets

# Write JSON
json_path = analyses_dir / "karin-mall-chart-data.json"
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(output, f, indent=2, ensure_ascii=False)
print(f"Chart data saved to {json_path}")
print(f"Chart SVG saved to {analyses_dir / 'karin-mall-natal.svg'}")
print(f"Transit SVG saved to {analyses_dir / 'karin-mall-transits.svg'}")

# Print key positions for immediate reference
print("\n=== KARIN MALL — NATAL CHART SUMMARY ===")
for p in planets:
    retro = " ℞" if p["retrograde"] else ""
    print(f"  {p['name']:12s} {p['position']:7.2f}° {p['sign']:10s} {p['house']}{retro}")

print("\n=== HOUSES (Placidus) ===")
for h in houses:
    print(f"  House {h['house_number']:2d}: {h['position']:7.2f}° {h['sign']}")

print(f"\n=== ELEMENT BALANCE ===")
for elem, count in sorted(element_counts.items()):
    print(f"  {elem}: {count}")

print(f"\n=== CURRENT TRANSITS (2026-08-05) ===")
for tp in transit_planets:
    retro = " ℞" if tp["retrograde"] else ""
    print(f"  {tp['name']:12s} {tp['position']:7.2f}° {tp['sign']}{retro}")

print(f"\n=== KEY TRANSIT-TO-NATAL ASPECTS ===")
for ta in transit_aspects:
    print(f"  {ta['transit_planet']:8s} {ta['aspect_type']:10s} natal {ta['natal_planet']} (orbit: {ta['orbit']:.2f}°)")
