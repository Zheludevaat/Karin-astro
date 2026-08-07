"""Validate the Karin Astro Lovable migration package.

This intentionally avoids astrology recalculation. Use verify_chart.py for that.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent
PROFILE_PATH = ROOT / "data" / "karin-profile.json"

REQUIRED_FILES = [
    "README.md",
    "index.html",
    "karin-chart.svg",
    "data/karin-profile.json",
    "docs/ARCHITECTURE.md",
    "docs/ASTROLOGY-SOURCE-OF-TRUTH.md",
    "docs/LOVABLE-MIGRATION.md",
    "docs/PRIVACY.md",
    "lovable/MASTER_PROMPT.md",
    "lovable/PROJECT_KNOWLEDGE.md",
    "lovable/MIGRATION_CHECKLIST.md",
    "requirements.txt",
    "compute_karin_chart.py",
    "verify_chart.py",
    "generate_transit_cache.py",
]

EXPECTED_SUBJECT = {
    "name": "Karin Mall",
    "birthDate": "1990-08-04",
    "birthTime": "04:09",
    "timezone": "Europe/Rome",
    "location": "Schlanders/Silandro, South Tyrol, Italy",
    "houseSystem": "Placidus",
}

EXPECTED_PLANETS = {
    "Sun",
    "Moon",
    "Mercury",
    "Venus",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto",
}

FORBIDDEN_PORTABILITY_PATTERNS = [
    re.compile(r"[A-Za-z]:[\\/]Users[\\/]"),
    re.compile(r"/Users/[^/]+/"),
    re.compile(r"/home/[^/]+/"),
]

SCAN_FILES = [
    "generate_transit_cache.py",
    "lovable/MASTER_PROMPT.md",
    "lovable/PROJECT_KNOWLEDGE.md",
    "docs/ARCHITECTURE.md",
]


def fail(message: str, errors: list[str]) -> None:
    errors.append(message)
    print(f"FAIL: {message}")


def check_required_files(errors: list[str]) -> None:
    for relative_path in REQUIRED_FILES:
        if not (ROOT / relative_path).exists():
            fail(f"Missing required migration file: {relative_path}", errors)


def check_profile(errors: list[str]) -> None:
    if not PROFILE_PATH.exists():
        return

    try:
        profile = json.loads(PROFILE_PATH.read_text(encoding="utf-8"))
    except Exception as exc:
        fail(f"Could not parse {PROFILE_PATH.relative_to(ROOT)}: {exc}", errors)
        return

    subject = profile.get("subject", {})
    for key, expected in EXPECTED_SUBJECT.items():
        actual = subject.get(key)
        if actual != expected:
            fail(f"subject.{key} is {actual!r}, expected {expected!r}", errors)

    coordinates = subject.get("coordinates", {})
    if coordinates.get("lat") != 46.6283:
        fail("subject.coordinates.lat drifted from 46.6283", errors)
    if coordinates.get("lng") != 10.7739:
        fail("subject.coordinates.lng drifted from 10.7739", errors)

    planets = profile.get("planets", {})
    planet_keys = set(planets)
    if planet_keys != EXPECTED_PLANETS:
        missing = sorted(EXPECTED_PLANETS - planet_keys)
        extra = sorted(planet_keys - EXPECTED_PLANETS)
        fail(f"Planet set mismatch. Missing={missing}, extra={extra}", errors)

    aspects = profile.get("aspects", [])
    if len(aspects) != 5:
        fail(f"Expected 5 surfaced aspects, found {len(aspects)}", errors)

    aspect_ids = []
    for aspect in aspects:
        p1 = aspect.get("p1")
        p2 = aspect.get("p2")
        if p1 not in EXPECTED_PLANETS or p2 not in EXPECTED_PLANETS:
            fail(f"Aspect references unknown planet: {p1}-{p2}", errors)
        aspect_ids.append(f"{p1}-{p2}")

    if len(aspect_ids) != len(set(aspect_ids)):
        fail("Duplicate surfaced aspect IDs found", errors)

    display = profile.get("display", {})
    if display.get("minimumDiscoveriesForSummary") != 3:
        fail("Summary unlock threshold must remain 3", errors)

    migration_notes = profile.get("migrationNotes", {})
    if migration_notes.get("doNotSilentlyRewriteCopy") is not True:
        fail("Migration profile must protect interpretation copy", errors)
    if migration_notes.get("doNotSilentlyRecalculatePositions") is not True:
        fail("Migration profile must protect displayed placements", errors)


def check_portability(errors: list[str]) -> None:
    for relative_path in SCAN_FILES:
        path = ROOT / relative_path
        if not path.exists():
            continue
        text = path.read_text(encoding="utf-8", errors="replace")
        for pattern in FORBIDDEN_PORTABILITY_PATTERNS:
            match = pattern.search(text)
            if match:
                fail(
                    f"Machine-specific absolute path found in {relative_path}: {match.group(0)}",
                    errors,
                )


def check_service_worker(errors: list[str]) -> None:
    path = ROOT / "sw.js"
    if not path.exists():
        return

    text = path.read_text(encoding="utf-8", errors="replace")
    match = re.search(r"const CORE_ASSETS = \[(.*?)\];", text, flags=re.S)
    if not match:
        fail("Could not find CORE_ASSETS in sw.js", errors)
        return

    assets = re.findall(r"['\"]([^'\"]+)['\"]", match.group(1))
    for asset in assets:
        if asset == "/":
            continue
        if not (ROOT / asset).exists():
            fail(f"Service worker references missing asset: {asset}", errors)


def main() -> int:
    errors: list[str] = []

    check_required_files(errors)
    check_profile(errors)
    check_portability(errors)
    check_service_worker(errors)

    if errors:
        print(f"\nMigration validation failed with {len(errors)} issue(s).")
        return 1

    print("Migration package validation passed.")
    print("Next: run verify_chart.py separately to validate astrology calculations.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
