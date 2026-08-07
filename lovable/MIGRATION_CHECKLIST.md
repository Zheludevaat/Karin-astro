# Lovable migration checklist

Use this checklist when moving the prepared project into Lovable.

## Before creating the Lovable project

- [ ] Review `docs/PRIVACY.md` and decide whether the legacy GitHub repository should remain public.
- [ ] Keep `main` unchanged until the migration-prep branch is reviewed and merged.
- [ ] Confirm `data/karin-profile.json` contains the intended current copy.
- [ ] Confirm `karin-chart.svg` is the chart asset you want the first Lovable version to use.

## Create the fresh Lovable project

- [ ] Create a new Lovable project.
- [ ] Paste the full contents of `lovable/MASTER_PROMPT.md` as the initial build request.
- [ ] Add `lovable/PROJECT_KNOWLEDGE.md` to persistent project knowledge/context.
- [ ] Provide `data/karin-profile.json` to Lovable.
- [ ] Provide `karin-chart.svg` to Lovable.
- [ ] Provide `index.html` as a visual/behavioral reference if Lovable supports the additional reference file.
- [ ] Provide `docs/ASTROLOGY-SOURCE-OF-TRUTH.md` if the project context can include it directly.

## First parity review

- [ ] The page says `Das bist du, Karin`.
- [ ] The chart is the main focal point.
- [ ] The visual palette resembles the legacy app.
- [ ] All ten planet interpretations exist.
- [ ] All five current aspect interpretations exist.
- [ ] German interpretation copy has not been rewritten.
- [ ] Planet signs, degrees, and houses have not drifted.
- [ ] Discovery IDs are unique and stable.
- [ ] Duplicate discovery does not increase progress.
- [ ] Summary unlocks after exactly three unique discoveries.
- [ ] Reloading the app preserves discovery progress.
- [ ] Reset clears discovery progress after confirmation.
- [ ] Share works or has a graceful fallback.

## Architecture review

- [ ] Data does not live in the main page component.
- [ ] Chart geometry does not contain interpretation copy.
- [ ] Browser storage logic is isolated.
- [ ] The chart is its own component.
- [ ] The popup/dialog is its own component.
- [ ] The summary is its own component.
- [ ] The starfield is decorative and isolated.
- [ ] TypeScript types cover the profile and discovery IDs.
- [ ] Pisces/Fische uses zero-based zodiac index 11.
- [ ] No absolute local filesystem paths exist.
- [ ] No missing font/icon/data references exist.
- [ ] `caelus-bundle.js` has not been copied into the new app without a real need.

## Accessibility review

- [ ] Planet/aspect hotspots are keyboard accessible.
- [ ] Hotspots have readable accessible labels.
- [ ] Dialog focus is managed correctly.
- [ ] Escape closes the dialog.
- [ ] Focus returns to the original trigger.
- [ ] Reduced-motion preferences are respected.
- [ ] Focus states are visible.
- [ ] Progress is understandable without color alone.

## GitHub handoff

- [ ] The Lovable build is stable before connecting GitHub.
- [ ] Connect the Lovable project to GitHub from Lovable.
- [ ] Let Lovable create/sync the repository it expects.
- [ ] Confirm Lovable edits and GitHub edits sync correctly.
- [ ] Keep this legacy repository as reference until the new project is fully verified.

## Optional second pass

- [ ] Add valid PWA manifest/icons.
- [ ] Add production service-worker behavior using the current framework conventions.
- [ ] Decide whether `transit-cache.json` should be exposed in the product.
- [ ] Add server-side calculation only if dynamic charts/transits are actually needed.
