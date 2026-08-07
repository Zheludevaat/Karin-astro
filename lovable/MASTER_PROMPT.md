# Master build prompt for Lovable

Build a clean production-quality migration of an existing personal astrology prototype called **Karin Astro**.

This is a migration and architecture cleanup, not a redesign and not a generic new astrology product.

## Goal

Recreate the existing mobile-first experience for Karin with visual and behavioral fidelity, while rebuilding it as a clean typed component-based application using Lovable's current default framework and conventions.

The original prototype mixed CSS, data, state, chart interaction, and UI logic in one `index.html`. Do not copy that architecture.

## Files and sources I am providing

Treat the following as authoritative migration inputs:

1. `data/karin-profile.json`
   - structured subject metadata
   - current displayed planetary placements
   - current German interpretation copy
   - current selected aspect interpretations

2. `karin-chart.svg`
   - current natal chart presentation asset
   - use this as the initial chart visual

3. `lovable/PROJECT_KNOWLEDGE.md`
   - persistent product and architecture rules

4. `docs/ASTROLOGY-SOURCE-OF-TRUTH.md`
   - calculation authority and integrity constraints

5. `index.html`, if supplied
   - behavior and visual reference only
   - do not copy its single-file implementation structure

If any source conflicts, do not guess. Prefer the explicit source-of-truth documentation and structured profile over inferred values from DOM geometry.

## Non-negotiable data integrity

Do not modify these birth values:

- Name: Karin Mall
- Birth date: 1990-08-04
- Birth time: 04:09
- Timezone: Europe/Rome
- Birthplace: Schlanders/Silandro, South Tyrol, Italy
- Latitude: 46.6283
- Longitude: 10.7739
- House system: Placidus

Do not silently recalculate or rewrite the existing displayed placements.

Do not silently rewrite the German interpretation copy.

Calculated astrology values and authored interpretation copy are separate concerns.

## Product experience to reproduce

The product is a single focused experience, not a dashboard.

On load:

- show a full-screen dark celestial scene
- place Karin's natal chart prominently in the center
- show the title `Das bist du, Karin`
- show the initial hint `Tippe auf einen Planeten oder eine Linie`
- provide a small unobtrusive reset control
- show discovery progress near the lower portion of the chart
- show the main summary CTA at the bottom

The chart is the focal point.

### Discovery behavior

The user can discover:

- all ten planets in the structured profile
- the five currently surfaced aspect interpretations

Clicking or tapping a discoverable item opens a bottom-sheet style dialog.

For a planet, show:

- glyph/icon
- title
- element/type badge
- subtitle
- degree
- house
- interpretation body
- tip

For an aspect, show:

- aspect icon
- the two related planet names
- aspect label/type
- interpretation body
- tip

A discovery is counted only once.

Closing a dialog without explicitly dismissing it may still close the dialog, but the implementation should have one clear and predictable rule for when the discovery becomes recorded. Prefer recording on deliberate acknowledgement/dismissal to match the existing interaction.

### Progress

Use unique stable IDs such as:

- `planet:Sun`
- `planet:Moon`
- `aspect:Moon-Neptune`

Persist only the IDs in browser storage.

Recommended storage key:

`karin-astro:discovery:v1`

The summary CTA remains unavailable until three unique discoveries have been recorded.

Before three discoveries, the button may communicate how many more are needed.

After three discoveries, use the label:

`Zeig mir, wer ich bin ✨`

### Summary

The summary dialog should assemble concise entries for the items the user has actually discovered.

Preserve the current concept:

- title `Das bist du, Karin`
- one summary line per discovered item
- share button

Use the Web Share API when available.

Provide a graceful fallback if native sharing is unavailable. Do not use an intrusive `alert()` if a better accessible fallback is easy to implement.

### Reset

Reset deletes saved discovery progress and returns the product to its initial state.

Require deliberate confirmation before deleting progress.

## Visual direction

Preserve the existing mood closely.

### Core palette

Use these as baseline tokens:

- background: `#0f0a1a`
- primary text: `#e8ddd0`
- secondary violet text: approximately `#8a7ab0`
- gold accent: approximately `#D4A853`
- warm popup surface: approximately `#1a1030`
- secondary warm text: approximately `#c8bdb0`

Create proper design tokens rather than scattering raw values through components.

### Style

The visual character should feel:

- intimate
- celestial
- elegant
- warm
- slightly mysterious
- personal rather than commercial

Use a restrained animated starfield behind the chart.

Use a subtle radial glow behind the chart.

Use rounded bottom-sheet dialogs on mobile.

Use a serif display face for prominent headings and a clean sans-serif for body text.

If the exact legacy fonts are not supplied, choose close high-quality alternatives available through the Lovable project without creating broken local asset references.

Do not create:

- a generic SaaS dashboard
- a sidebar
- tab navigation
- bright neon gradients
- excessive glass panels
- unnecessary cards
- marketing sections
- pricing
- account controls

## Responsive behavior

Design mobile-first because the existing experience is portrait-oriented.

The chart must remain usable on narrow screens.

The page should also work on tablet and desktop by centering the experience in a sensible maximum-width area without turning it into a multi-column dashboard.

Avoid clipping the chart, CTA, or progress on short mobile viewports.

Use safe-area insets where useful.

## Chart interaction architecture

Create an `AstrologyChart` component responsible only for chart presentation and interaction.

Do not place interpretation copy inside chart geometry code.

Prefer a centralized sign mapping if any geometry calculations are required.

Important legacy correction:

- Pisces/Fische is zero-based zodiac index `11`, not `12`

Do not duplicate English and German sign maps in multiple places.

If possible, avoid deriving hit areas from translated sign strings. Use canonical planet IDs and verified absolute/chart positions or carefully defined hotspot metadata.

If using the supplied SVG directly, preserve its aspect ratio and do not distort it.

Hotspots should be visually subtle but have comfortable touch targets.

## Component architecture

Create clear responsibilities. A reasonable shape is:

- `AstrologyChart`
- `DiscoveryDialog`
- `DiscoveryProgress`
- `SummaryCard`
- `Starfield`
- `useDiscoveryProgress`
- typed profile/data module
- isolated storage utilities
- isolated chart geometry utilities
- isolated sharing helper

You may adapt exact filenames to the current Lovable framework, but preserve the separation of concerns.

Do not put the full app into one component.

## Data architecture

Convert the provided JSON into typed application data.

Define stable types for:

- `PlanetKey`
- planet interpretation data
- aspect interpretation data
- subject metadata
- discovery IDs

Do not store mutable copies of the same natal value in multiple places.

Prefer one canonical data module derived from the supplied JSON.

## Accessibility

Improve the legacy prototype while preserving its appearance.

Required:

- all interactive chart discoveries keyboard accessible
- readable accessible labels for planet/aspect hotspots
- semantic buttons
- semantic dialog behavior
- focus moves into the dialog when opened
- focus returns to the trigger when closed
- Escape closes dialogs
- visible focus states
- progress meaning is not communicated only by color
- reasonable contrast
- decorative canvas ignored by assistive technology

### Reduced motion

Respect `prefers-reduced-motion`.

When reduced motion is requested:

- stop or substantially simplify the starfield animation
- remove unnecessary popup movement
- do not rely on animation to communicate state

## Error handling

If the chart SVG fails to load, show a calm inline fallback message and keep the rest of the interface functional.

Do not silently swallow all errors.

Avoid console noise in normal production use.

## Performance

The app is small. Keep it small.

Avoid large unnecessary dependencies.

Do not bundle the legacy `caelus-bundle.js` unless a real feature needs it.

Do not bundle Python or an ephemeris library into the browser.

The natal chart is fixed for this migration, so static verified data is preferred.

## Transit data

Do not make transit functionality a requirement for the first parity build unless the provided current experience visibly uses it.

If transit data is later enabled, use the supplied static `transit-cache.json` first rather than adding a heavy client-side calculation engine.

For future arbitrary user charts or arbitrary dates, use a secure server-side boundary.

## PWA

PWA support is a second-pass enhancement.

First make the application correct, clean, responsive, and accessible.

If adding PWA support afterward:

- generate a valid manifest
- reference only files that actually exist
- create valid app icons
- follow the current framework's recommended service-worker approach
- do not copy the legacy service worker unchanged

## Tests

Add lightweight automated tests where supported by the generated project.

At minimum cover:

1. Pisces/Fische maps to zodiac index 11
2. duplicate discovery IDs do not increase progress
3. the summary unlock threshold is exactly three unique discoveries
4. reset clears persisted progress
5. aspect IDs resolve to the correct interpretation
6. the structured profile passes basic schema/type expectations

## Migration parity checklist

Before considering the first build complete, verify all of the following:

- title is correct
- current German copy is preserved
- ten planet discoveries exist
- five current aspect discoveries exist
- chart SVG renders without distortion
- chart remains central to the screen
- starfield is decorative and subtle
- popup/dialog works by touch, mouse, and keyboard
- progress persists across reloads
- duplicate discoveries are not double-counted
- summary unlocks after exactly three unique discoveries
- share action works or has an accessible fallback
- reset works with confirmation
- no missing local font/icon/data references exist
- no absolute machine-specific paths exist
- no secrets exist in client-side code
- no birth values have drifted
- no interpretation copy has been silently rewritten
- project builds successfully

## Implementation sequence

Work in this order:

### 1. Establish data and types

Import/translate the structured profile into typed application data.

### 2. Build the static visual shell

Reproduce background, title, chart area, progress area, and CTA.

### 3. Add chart discovery interaction

Add accessible planet and aspect hotspots.

### 4. Add dialog system

Render exact provided copy.

### 5. Add persistent progress

Use stable IDs and a versioned storage key.

### 6. Add summary and sharing

Unlock after three unique discoveries.

### 7. Add reset

Clear stored progress with confirmation.

### 8. Accessibility pass

Keyboard, focus, dialog semantics, reduced motion.

### 9. Responsive polish

Test narrow phones, short viewports, tablet, desktop.

### 10. Testing and cleanup

Remove dead code, verify no missing assets, add targeted tests.

### 11. Optional PWA pass

Only after all prior stages are stable.

## Important scope control

Do not expand the product during migration.

Do not add generic features because they seem useful.

Do not create AI-generated astrology readings.

Do not redesign the copy.

Do not replace Karin's personal chart with generic demo data.

Do not introduce a database unless a later requested feature truly requires it.

Do not add authentication.

Do not add analytics unless explicitly requested.

The first success criterion is a faithful, maintainable rebuild of the existing intimate personal experience.

## Final deliverable

Produce a complete functioning Lovable application that matches the supplied reference experience, uses clean typed architecture, preserves Karin's verified data and authored copy, fixes known legacy implementation problems, and is ready for normal future development inside Lovable.
