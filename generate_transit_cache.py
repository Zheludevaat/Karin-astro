"""Generate a compact one-year transit cache for Karin Mall."""

import json
from datetime import datetime, timedelta
from pathlib import Path

from kerykeion import AstrologicalSubjectFactory
from kerykeion.chart_data_factory import ChartDataFactory


PROJECT_ROOT = Path(__file__).resolve().parent
OUTPUT_PATH = PROJECT_ROOT / "transit-cache.json"

natal = AstrologicalSubjectFactory.from_birth_data(
    "Karin Mall",
    1990,
    8,
    4,
    4,
    9,
    lng=10.7739,
    lat=46.6283,
    tz_str="Europe/Rome",
    online=False,
)

start = datetime(2026, 8, 4)
cache = {
    "generated": start.strftime("%Y-%m-%d"),
    "weekly_positions": {},
    "transit_events": [],
}

ATTR_MAP = {
    "Sun": "sun",
    "Moon": "moon",
    "Mercury": "mercury",
    "Venus": "venus",
    "Mars": "mars",
    "Jupiter": "jupiter",
    "Saturn": "saturn",
    "Uranus": "uranus",
    "Neptune": "neptune",
    "Pluto": "pluto",
}

ASPECT_TYPES = {
    "conjunction": "Konjunktion",
    "opposition": "Opposition",
    "square": "Quadrat",
    "trine": "Trigon",
    "sextile": "Sextil",
}

VALID_NATAL_POINTS = set(ATTR_MAP) | {
    "Medium_Coeli",
    "Ascendant",
    "Descendant",
    "Chiron",
}


def create_transit_subject(date: datetime):
    return AstrologicalSubjectFactory.from_birth_data(
        "T",
        date.year,
        date.month,
        date.day,
        12,
        0,
        lng=10.7739,
        lat=46.6283,
        tz_str="Europe/Rome",
        online=False,
    )


# Weekly positions for a little over one year.
for week in range(53):
    date = start + timedelta(days=week * 7)
    if date > start + timedelta(days=370):
        break

    date_str = date.strftime("%Y-%m-%d")
    transit = create_transit_subject(date)
    positions = {}

    for planet_name, attr in ATTR_MAP.items():
        try:
            planet = getattr(transit, attr)
            positions[planet_name] = [
                round(planet.position, 2),
                int(planet.retrograde),
                planet.sign,
            ]
        except Exception as exc:
            print(f"Warning: could not read {planet_name} for {date_str}: {exc}")

    cache["weekly_positions"][date_str] = positions


# Keep the closest daily approach for each major transit-to-natal aspect.
seen = {}

for day_index in range(370):
    date = start + timedelta(days=day_index)
    date_str = date.strftime("%Y-%m-%d")
    transit = create_transit_subject(date)
    transit_data = ChartDataFactory.create_transit_chart_data(natal, transit)

    for aspect in transit_data.aspects:
        transit_planet = aspect.p1_name
        natal_point = aspect.p2_name
        aspect_type = aspect.aspect
        orb = aspect.orbit

        if transit_planet not in ATTR_MAP:
            continue
        if natal_point not in VALID_NATAL_POINTS:
            continue
        if aspect_type not in ASPECT_TYPES:
            continue
        if orb > 3.0:
            continue

        key = f"{transit_planet}|{natal_point}|{aspect_type}"
        previous = seen.get(key)

        if previous is None or orb < previous["orb"]:
            seen[key] = {
                "date": date_str,
                "tp": transit_planet,
                "np": natal_point,
                "type": ASPECT_TYPES[aspect_type],
                "orb": round(orb, 2),
            }

    if day_index % 30 == 0:
        print(f"Day {day_index}/370: {date_str}")


events = [event for event in seen.values() if event["orb"] <= 3.0]
events.sort(key=lambda event: event["date"])
cache["transit_events"] = events

with OUTPUT_PATH.open("w", encoding="utf-8") as output_file:
    json.dump(cache, output_file, ensure_ascii=False)

size_kb = OUTPUT_PATH.stat().st_size / 1024
print(
    f"Cache: {OUTPUT_PATH} ({size_kb:.1f} KB), "
    f"{len(events)} events, {len(cache['weekly_positions'])} weekly snapshots"
)

first_week = cache["weekly_positions"]["2026-08-04"]
print(f"First week positions: {json.dumps(first_week, ensure_ascii=False)}")
