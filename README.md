# Karin Astro

A personal, mobile-first astrology experience built around Karin's verified natal chart.

This repository contains the original static prototype, the chart-generation and verification tooling, and a complete migration package for rebuilding the product cleanly in Lovable.

## Important Lovable note

Lovable does not currently import an arbitrary existing GitHub repository as a Lovable project. The intended workflow is:

1. Create a fresh Lovable project.
2. Give Lovable the files and instructions in `lovable/`.
3. Rebuild the app using the source-of-truth material in this repository.
4. Connect that Lovable project to GitHub so Lovable creates and syncs its own repository.

See `lovable/MASTER_PROMPT.md` and `docs/LOVABLE-MIGRATION.md`.

## What is authoritative

For astrology calculations, use the Python scripts and the birth data documented in `docs/ASTROLOGY-SOURCE-OF-TRUTH.md`.

For the current editorial interpretation copy, use `data/karin-profile.json` and the legacy `index.html`.

For the current visual chart, use `karin-chart.svg`.

Do not silently recalculate, reinterpret, rewrite, or replace these sources during migration.

## Current repository layout

```text
.
├── index.html                    # Original static prototype
├── karin-chart.svg               # Current natal-chart presentation asset
├── transit-cache.json            # Generated transit snapshot/cache
├── caelus-bundle.js              # Legacy/generated astrology bundle, not app architecture
├── compute_karin_chart.py        # Natal chart generation
├── verify_chart.py               # Independent chart verification
├── generate_transit_cache.py     # Transit cache generator
├── requirements.txt              # Reproducible Python dependency pin
├── data/
│   └── karin-profile.json        # Frontend-safe structured content/source snapshot
├── docs/
│   ├── ARCHITECTURE.md
│   ├── ASTROLOGY-SOURCE-OF-TRUTH.md
│   ├── LOVABLE-MIGRATION.md
│   └── PRIVACY.md
└── lovable/
    ├── MASTER_PROMPT.md
    ├── PROJECT_KNOWLEDGE.md
    └── MIGRATION_CHECKLIST.md
```

## Run the legacy prototype

The current app is static. Serve the repository through a local HTTP server rather than opening `index.html` with a `file://` URL because the page fetches local assets and registers a service worker.

For example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Reproduce the astrology calculations

Use Python 3.11 or newer.

```bash
python -m venv .venv
source .venv/bin/activate       # macOS/Linux
# .venv\Scripts\activate        # Windows
pip install -r requirements.txt
python verify_chart.py
python compute_karin_chart.py
python generate_transit_cache.py
```

The project pins Kerykeion to the latest stable 5.x release used for this migration. Do not move to the 6.x alpha line without re-running and reviewing all verification output.

## Migration target

The Lovable rebuild should be a clean component-based TypeScript application with:

- a mobile-first chart exploration screen
- structured natal data separate from presentation copy
- reusable chart, popup, progress, summary, and starfield components
- local discovery progress persistence
- no secrets in frontend code
- accessible buttons and dialogs
- clear separation between calculated astrology data and editorial interpretation
- the existing German experience preserved unless a deliberate product change is requested

See `docs/ARCHITECTURE.md` for the desired structure.

## Privacy

This repository contains a named person's exact birth date, birth time, birthplace, and coordinates. If Karin is a private person, the repository should be private unless she has explicitly agreed to public publication. See `docs/PRIVACY.md`.
