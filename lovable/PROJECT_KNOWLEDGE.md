# Karin Astro project knowledge

Use this as persistent project knowledge in Lovable.

## Product

Karin Astro is a personal, mobile-first astrology experience for Karin. The current product is deliberately intimate and focused. It is not a generic astrology dashboard.

The core interaction is discovery:

1. Karin sees her natal chart on a dark celestial background.
2. She taps or clicks planets and selected chart relationships.
3. Each discovery opens a short German interpretation.
4. Unique discoveries are remembered locally.
5. After three discoveries, a summary becomes available.
6. The summary can be shared.

## Product language

The current interface language is German.

Preserve the existing German copy from `data/karin-profile.json` during migration. Do not paraphrase or rewrite it simply because code is being refactored.

## Visual identity

The visual identity is:

- intimate
- celestial
- elegant
- warm rather than cold or technical
- dark violet-black background
- muted stars
- warm gold highlights
- cream/off-white primary text
- soft violet secondary text
- serif display type with clean sans-serif body type
- rounded bottom-sheet style interpretation dialogs

Avoid generic SaaS visuals, bright gradients, dashboard cards, excessive glassmorphism, and unnecessary navigation.

## Source of truth

For birth data and calculation rules, follow `docs/ASTROLOGY-SOURCE-OF-TRUTH.md`.

For current frontend content, use `data/karin-profile.json`.

For the chart visual, use `karin-chart.svg` as the initial asset.

Calculated astrology data and editorial interpretation copy are separate domains. Never silently change one because the other changed.

## Fixed birth profile

Name: Karin Mall
Birth date: 1990-08-04
Birth time: 04:09
Timezone: Europe/Rome
Birthplace: Schlanders/Silandro, South Tyrol, Italy
Coordinates: 46.6283, 10.7739
House system: Placidus

Do not modify these values unless explicitly instructed.

## Current feature set

The migration target includes:

- full-screen mobile layout
- celestial starfield
- natal chart SVG
- ten planet discoveries
- five surfaced aspect discoveries
- popup/dialog interpretation
- unique discovery tracking
- persistent local progress
- summary unlocked after three discoveries
- share action
- reset action

Do not add a backend, authentication, payments, profiles, social feeds, AI-generated readings, or generic astrology tools unless explicitly requested after parity is complete.

## Architecture rules

- Use Lovable's current default framework and conventions.
- Use TypeScript.
- Keep data outside UI components.
- Keep storage logic outside UI components.
- Keep chart geometry isolated.
- Use stable IDs for discoveries.
- Use accessible semantic dialogs and buttons.
- Respect reduced-motion preferences.
- Do not put secrets in frontend code.
- Do not put Python astrology calculation libraries into the browser bundle.
- Do not copy the legacy single-file architecture.

## Important migration constraints

The existing `index.html` is a behavior and visual reference only.

Do not reproduce known legacy problems:

- missing font/icon/data asset references
- duplicated sign maps
- Pisces/Fische indexed as 12 instead of zero-based 11
- one file mixing style, data, state, and behavior
- absolute local filesystem paths
- hand-maintained service-worker asset lists containing missing files

## Interaction details

Planet/aspect discoveries should feel tactile and rewarding but restrained.

The chart remains the focal point. Avoid placing a large amount of explanatory UI around it.

The discovery dialog should:

- open from the bottom on mobile
- be scrollable if necessary
- clearly identify the planet or aspect
- show the existing interpretation and tip
- have an obvious close/dismiss action
- mark an item discovered only once

The summary CTA is disabled until three unique discoveries are complete.

Reset should require a deliberate confirmation before deleting progress.

## Persistence

Persist only stable discovery identifiers locally. Recommended key:

`karin-astro:discovery:v1`

Do not store the entire interpretation objects in local storage.

## Accessibility

Interactive chart hotspots must be keyboard accessible and labeled. The dialog must manage focus. Escape should close it. Focus should return to the trigger. Do not rely only on color for progress. Reduced motion should substantially reduce or disable decorative animation.

## PWA

PWA support is desirable but not part of the first parity milestone. Implement it only after the core app builds and works correctly.

## Definition of done for migration

Do not call the migration complete until:

- the current experience is visually recognizable
- all current interpretations are present
- all current interaction rules work
- data is structured and typed
- no known missing references exist
- the app builds in Lovable
- the source-of-truth data has not drifted
- accessibility basics are implemented
