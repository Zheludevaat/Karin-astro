"""Generate compact transit cache for Karin Mall — FIXED."""
import json
from datetime import datetime, timedelta
from pathlib import Path
from kerykeion import AstrologicalSubjectFactory
from kerykeion.chart_data_factory import ChartDataFactory

natal = AstrologicalSubjectFactory.from_birth_data(
    "Karin Mall", 1990, 8, 4, 4, 9,
    lng=10.7739, lat=46.6283, tz_str="Europe/Rome", online=False
)

cache = {"generated": "2026-08-05", "weekly_positions": {}, "transit_events": []}

start = datetime(2026, 8, 4)
ATTR_MAP = {"Sun":"sun","Moon":"moon","Mercury":"mercury","Venus":"venus","Mars":"mars","Jupiter":"jupiter","Saturn":"saturn","Uranus":"uranus","Neptune":"neptune","Pluto":"pluto"}
ASPECT_TYPES = {"conjunction":"Konjunktion","opposition":"Opposition","square":"Quadrat","trine":"Trigon","sextile":"Sextil"}

# Weekly positions (every 7 days)
for week in range(53):
    d = start + timedelta(days=week * 7)
    if d > start + timedelta(days=370): break
    date_str = d.strftime("%Y-%m-%d")
    transit = AstrologicalSubjectFactory.from_birth_data(
        "T", d.year, d.month, d.day, 12, 0,
        lng=10.7739, lat=46.6283, tz_str="Europe/Rome", online=False
    )
    positions = {}
    for pname, attr in ATTR_MAP.items():
        try:
            p = getattr(transit, attr)
            positions[pname] = [round(p.position, 2), int(p.retrograde), p.sign]
        except Exception as e:
            pass
    cache["weekly_positions"][date_str] = positions

# Daily transit events (only close aspects, closest approach)
seen = {}
def date_only(s):
    return s[:10]

for i in range(370):
    d = start + timedelta(days=i)
    date_str = date_only(d.isoformat())
    transit = AstrologicalSubjectFactory.from_birth_data(
        "T", d.year, d.month, d.day, 12, 0,
        lng=10.7739, lat=46.6283, tz_str="Europe/Rome", online=False
    )
    td = ChartDataFactory.create_transit_chart_data(natal, transit)
    
    for a in td.aspects:
        tp, np, atype, orb = a.p1_name, a.p2_name, a.aspect, a.orbit
        if tp not in ATTR_MAP: continue
        valid = list(ATTR_MAP.keys()) + ["Medium_Coeli","Ascendant","Descendant","Chiron"]
        if np not in valid: continue
        if atype not in ASPECT_TYPES: continue
        if orb > 3.0: continue
        
        key = f"{tp}|{np}|{atype}"
        prev = seen.get(key)
        if prev is None or orb < prev["orb"]:
            seen[key] = {"date": date_str, "tp": tp, "np": np, "type": ASPECT_TYPES[atype], "orb": round(orb, 2)}
    
    if i % 30 == 0:
        print(f"  Day {i}/370: {date_str}")

# Filter: only keep events with orb < 3.0
events = [v for v in seen.values() if v["orb"] <= 3.0]
events.sort(key=lambda x: x["date"])
cache["transit_events"] = events

out = Path("C:/Users/zhelu/Workspace/Astrology/your-stars-karin/transit-cache.json")
with open(out, "w", encoding="utf-8") as f:
    json.dump(cache, f, ensure_ascii=False)
size_kb = out.stat().st_size / 1024
print(f"\nCache: {out.stat().st_size:,} bytes ({size_kb:.1f} KB), {len(events)} events, {len(cache['weekly_positions'])} weekly snapshots")
# Show first weekly position
wk = cache["weekly_positions"]["2026-08-04"]
print(f"First week positions: {json.dumps(wk, ensure_ascii=False)}")
