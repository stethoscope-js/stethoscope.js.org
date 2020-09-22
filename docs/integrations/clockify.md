---
title: Clockify
---

## Intro

The Clockify API is used to track your time sessions.

## Data points

The following data points are available for this integration:

| Data point | Description           |
| ---------- | --------------------- |
| `entries`  | Time tracking entries |

```yaml title=".stethoscoperc.yml"
integrations:
  clockify:
    entries: true
```

If you want to enable all data points, you can simply use `all` instead:

```yaml title=".stethoscoperc.yml"
integrations:
  clockify:
    all: true
```

Sensitive information such as project ID, workspace ID, item ID, user ID, and entry description are automatically removed.

## Authentication

You can generate your Clockify API on the User page: https://clockify.me/user/settings. Scroll to "API" and click on the "Generate" button. Then, copy your API key.

You also need your user ID and workspace ID. You can find your workspace ID by clicking on the "Settings" button in the navigation sidebar, and copying the ID from the address bar. For example, the URL https://clockify.me/workspaces/518ad43641f9dg74egfbbgaf/settings includes the workspace ID `518ad43641f9dg74egfbbgaf`.

To find your user ID, you can either go to the [User settings](https://clockify.me/user/settings) page and inspect the outgoing HTTP requests, or run the following command:

```bash
node -e 'require("./lib/api/clockify").getUserId()'
```

## Environment variables

| Environment variable    | Description  |
| ----------------------- | ------------ |
| `CLOCKIFY_API_KEY`      | API key      |
| `CLOCKIFY_WORKSPACE_ID` | Workspace ID |
| `CLOCKIFY_USER_ID`      | User ID      |

<a href="/docs/integrations/clockify"><img class="logos" alt="Clockify" src="https://stethoscope.js.org/branding/integrations/clockify.png" /></a>
