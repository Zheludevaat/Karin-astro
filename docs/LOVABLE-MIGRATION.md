# Lovable migration plan

## Why this is a migration rather than an import

The current repository is an existing GitHub project. Lovable's current GitHub workflow does not take an arbitrary existing repository and convert it into a Lovable project. The clean path is to create a fresh Lovable project, give it this repository's source-of-truth material, then connect the new Lovable project to GitHub.

This repository is therefore prepared as a migration package and reference implementation.

## Migration inputs

Use these files when creating the Lovable project:

### Required

- `lovable/MASTER_PROMPT.md`
- `lovable/PROJECT_KNOWLEDGE.md`
- `data/karin-profile.json`
- `karin-chart.svg`

### Reference

- `index.html`
- `docs/ARCHITECTURE.md`
- `docs/ASTROLOGY-SOURCE-OF-TRUTH.md`
- `transit-cache.json`

### Calculation/verification tools

- `compute_karin_chart.py`
- `verify_chart.py`
- `generate_transit_cache.py`
- `requirements.txt`

## Recommended migration sequence

### Phase 1: create the Lovable project

Create a new Lovable project with no backend requirement at first.

Paste the full contents of `lovable/MASTER_PROMPT.md` as the initial build instruction.

Add `lovable/PROJECT_KNOWLEDGE.md` to Lovable's persistent project knowledge/context so future prompts preserve the same constraints.

Provide `data/karin-profile.json` and `karin-chart.svg` as reference assets.

If Lovable allows additional reference files in the project context, also provide `index.html` so it can compare behavior and visual details.

### Phase 2: first implementation

The first implementation should reproduce only the currently working product experience:

1. full-screen mobile layout
2. starfield background
3. chart display
4. tappable/clickable planet hotspots
5. tappable/clickable aspect discoveries
6. interpretation bottom sheet/dialog
7. discovery progress
8. summary unlock after three discoveries
9. share action
10. reset progress

Do not add accounts, dashboards, payments, databases, AI interpretation, or unrelated features during the migration pass.

### Phase 3: compare against legacy

Compare the Lovable build with `index.html` and verify:

- title and German wording match
- all ten planet interpretations are present
- all five current aspect interpretations are present
- discovery count cannot double-count an item
- summary unlocks after three unique discoveries
- reset removes stored progress
- chart remains usable on narrow mobile screens
- chart SVG is not distorted
- popup content scrolls when necessary
- the existing color palette and mood remain recognizable

### Phase 4: validate astrology integrity

Check that Lovable has not changed:

- birth metadata
- displayed signs
- displayed degrees
- displayed houses
- surfaced aspect pairs
- editorial interpretation copy

The app must treat `data/karin-profile.json` as migration data and `docs/ASTROLOGY-SOURCE-OF-TRUTH.md` as the rulebook.

### Phase 5: architecture pass

Once visual and behavioral parity is achieved, review the code against `docs/ARCHITECTURE.md`.

The UI should be split into components. Data should not live inside the main page component. Chart geometry should not be mixed with popup copy. Browser storage should have a small isolated API.

### Phase 6: connect the Lovable project to GitHub

After the Lovable version is stable, connect it to GitHub from Lovable. Let Lovable create/sync the repository it expects.

Do not try to make Lovable take ownership of this legacy repository through undocumented workarounds.

## What not to migrate literally

Do not copy these legacy implementation choices just because they exist:

- one large `index.html` containing CSS, data, and application logic
- hand-maintained duplicated zodiac maps
- hard-coded SVG hotspot assumptions scattered through UI code
- service-worker cache entries for files that do not exist
- browser-side reliance on generated development artifacts
- absolute Windows filesystem paths

## What must be preserved

Preserve:

- the Karin-specific product concept
- the German language experience
- the dark celestial visual identity
- the gold accent and warm typography
- the discovery mechanic
- the existing interpretation copy unless intentionally edited later
- the verified natal data
- the current chart SVG as the initial visual source
- the idea that astrology calculations and authored interpretations are separate concerns

## PWA handling

Do not make PWA functionality a blocker for the first Lovable build.

After the core app works, add PWA behavior using Lovable's current framework conventions and only assets that actually exist.

The legacy `sw.js` and `manifest.webmanifest` are reference material, not files that must be preserved verbatim.

## Transit handling

The first Lovable rebuild can ship without live transit calculation if the current user journey does not expose it.

If transit features are enabled, prefer consuming `transit-cache.json` as static generated data for the first version.

If the project later supports arbitrary dates or arbitrary users, move calculation to a server-side function or service.

## Completion definition

The migration is complete when:

- the fresh Lovable app reproduces the current experience
- the code is component-based and typed
- all source-of-truth data is outside presentation components
- the chart data matches the verified source
- no missing asset references remain in the Lovable app
- no secrets exist in client code
- accessibility basics work
- the app builds successfully in Lovable
- Lovable is connected to its own GitHub repository
- the legacy repo can remain as an archive/reference or be retired intentionally
