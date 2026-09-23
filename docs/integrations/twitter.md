---
title: Twitter/X (legacy, unverified)
---

:::warning Legacy integration — current API access unverified
The current adapter still calls the v1.1 `statuses/user_timeline` and `favorites/list` endpoints using `twitter-lite`. We have not verified its current access requirements or a safe credential-free smoke path. Do not rely on this adapter for a new setup without independently checking your developer access and the provider's terms.
:::

Historically this adapter wrote tweets to `data/twitter-tweets/` and likes to `data/twitter-likes/`. Existing files remain readable and this documentation change does not alter the adapter or disable older configurations. If configured, check the latest [run manifest](/docs/understanding-data) rather than treating a green scheduled workflow as evidence that the calls worked.

The original OAuth 1.0a credential names and configuration are available in the [historical documentation in Git](https://github.com/stethoscope-js/stethoscope.js.org/blob/0b06584c4f2c1a0cd1acdd347678c8f099de67f2/docs/integrations/twitter.md); that page's examples mistakenly used `spotify` as the integration slug. The [adapter source](https://github.com/stethoscope-js/integrations/blob/master/src/api/twitter.ts) is the reference for interpreting older data, not a verified new onboarding guide.
