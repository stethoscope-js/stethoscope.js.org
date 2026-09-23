---
title: Google Fit (legacy)
---

:::warning Legacy integration — not recommended for new setups
Google says the Fit APIs, including REST, [will be deprecated in 2026](https://developers.google.com/fit), and new developer sign-ups closed in May 2024. Stethoscope's adapter reads Fit sessions; it has **not** been migrated to Health Connect or the Google Health API. Do not create a new Fit configuration based on this historical integration.
:::

Previously collected Fit sessions remain in the existing `data/google-fit-<session-slug>/` paths. Keep those files if you want to retain historical data; this documentation change does not remove the adapter or alter the files.

For the original activity names, configuration keys, and OAuth setup, consult the [historical documentation in Git](https://github.com/stethoscope-js/stethoscope.js.org/blob/0b06584c4f2c1a0cd1acdd347678c8f099de67f2/docs/integrations/google-fit.md). Those instructions are **archival**, not a supported onboarding path. Google's [migration guidance](https://developer.android.com/guide/health-and-fitness/health-connect-guidelines/migrate/migration-guide) discusses platform alternatives; none is implemented in this adapter.
