# Astrology source of truth

This document defines which data Lovable and future contributors must trust when rebuilding or extending Karin Astro.

## Subject

- Name: Karin Mall
- Birth date: 4 August 1990
- Local birth time: 04:09
- Timezone: Europe/Rome
- Birthplace: Schlanders/Silandro, South Tyrol, Italy
- Latitude: 46.6283
- Longitude: 10.7739
- House system: Placidus

The timezone is important. August 1990 in Italy used summer time, so the local time corresponds to UTC+2. Do not replace this with a guessed UTC value in product code.

## Calculation authority

The calculation and verification scripts are the authoritative computational source:

- `compute_karin_chart.py`
- `verify_chart.py`
- `generate_transit_cache.py`

The migration baseline pins `kerykeion==5.12.9` in `requirements.txt`.

Before changing the astrology library, version, house system, coordinates, timezone behavior, or calculation method:

1. run `verify_chart.py`
2. compare all planetary positions and house cusps
3. compare the documented key aspects
4. review any changed frontend interpretation that depends on those placements
5. update this file only after verification passes

Do not adopt the Kerykeion 6.x alpha series without an explicit migration and re-verification.

## Frontend snapshot

`data/karin-profile.json` is the structured frontend snapshot used during migration. It contains:

- the birth-data metadata
- the current display positions used by the prototype
- the current German interpretation copy
- the currently surfaced aspect interpretations

It is designed to prevent Lovable from scraping business-critical data out of `index.html`.

The JSON is not a replacement for the calculation scripts. If a calculated value conflicts with the JSON, investigate the discrepancy and verify it before changing either source.

## Current display positions

The legacy experience currently presents:

| Body | Sign | Degree | House |
| --- | --- | ---: | ---: |
| Sun | Leo / Löwe | 11°28' | 2 |
| Moon | Capricorn / Steinbock | 12°14' | 6 |
| Mercury | Virgo / Jungfrau | 7°38' | 3 |
| Venus | Cancer / Krebs | 18°02' | 12 |
| Mars | Taurus / Stier | 14°34' | 11 |
| Jupiter | Cancer / Krebs | 26°55' | 1 |
| Saturn | Capricorn / Steinbock | 20°34' | 7 |
| Uranus | Capricorn / Steinbock | 6°17' | 6 |
| Neptune | Capricorn / Steinbock | 12°26' | 6 |
| Pluto | Scorpio / Skorpion | 15°00' | 5 |

## Verified chart concepts used in the project

The verification tooling specifically checks major claims including:

- Moon conjunct Neptune
- Mars opposite Pluto
- Venus conjunct Ascendant
- Venus opposite Saturn
- Saturn conjunct Descendant
- Jupiter trine Midheaven
- Sun square Mars
- Sun square Pluto
- Mercury trine Uranus
- Pluto trine Ascendant
- Venus trine Pluto
- Moon trine Mars
- Moon sextile Pluto
- Mars trine Saturn
- Mars trine Neptune
- Chiron conjunct Ascendant
- Neptune sextile Pluto

The frontend currently surfaces only a subset of these. A future UI may expose more, but it should not invent aspects without calculation data.

## Separation of calculation and interpretation

Keep these concepts separate in the Lovable rebuild:

### Calculated data

Examples:

- signs
- degrees
- houses
- aspects
- orbs
- transits
- retrograde state

Calculated data must come from an astrology engine or a verified generated artifact.

### Editorial interpretation

Examples:

- `Du fühlst tief, aber zeigst es selten.`
- the popup titles
- explanatory tips
- summary copy

Editorial interpretation is authored product content. Lovable must not rewrite it simply because it is refactoring code.

## Transit handling

`transit-cache.json` is generated data, not hand-authored source material. The generator should write to a repository-relative path so it works on any machine.

A future Lovable version can either:

1. continue consuming a generated static transit cache, or
2. move transit calculation to a secure server-side function

Do not attempt to run a heavy Python ephemeris calculation directly in the browser.

## Chart SVG

`karin-chart.svg` is the current presentation asset. It can be used as the initial chart visual in the Lovable rebuild.

Treat the SVG as a generated/presentation artifact, not the primary place to store natal values.

## Known legacy issue to fix during migration

The old inline JavaScript includes a German zodiac index map where `Fische` is mapped to `12`. The intended zero-based zodiac index is `11`. The Lovable rebuild should not copy that map verbatim. Prefer a typed, centralized sign mapping with automated tests.
