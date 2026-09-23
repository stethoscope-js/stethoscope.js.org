---
title: Pocket Casts (legacy)
---

:::warning Legacy integration — not recommended for new setups
[Pocket Casts says it has no API available](https://support.pocketcasts.com/knowledge-base/pocket-casts-api). The existing Stethoscope adapter uses an unofficial password-backed login library. Do not add your Pocket Casts password to a new integration based on these old instructions.
:::

The historical integration tracked listening history and the podcast library under `data/pocket-casts-podcasts/`. Existing data stays readable; this documentation change does not turn off existing configurations, remove the adapter, or delete files. A green scheduled workflow does not prove that an unofficial login succeeded: check the latest [run manifest](/docs/understanding-data) for the adapter's outcome.

The original keys and setup instructions are retained in the [historical documentation in Git](https://github.com/stethoscope-js/stethoscope.js.org/blob/0b06584c4f2c1a0cd1acdd347678c8f099de67f2/docs/integrations/pocket-casts.md) for interpreting older repositories, **not** for new onboarding.
