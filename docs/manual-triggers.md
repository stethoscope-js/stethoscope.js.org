---
title: Manual triggers
---

By default, all your data is updated every 24 hours. You can also manually trigger an update, for example after setting up your repository. Manual triggers are powered by workflow triggers on GitHub Actions.

## Using the GitHub UI

To manually trigger an update:

First, click on the "Actions" tab of your GitHub repository. You will reach the URL https://github.com/user/repo/actions, where `user` is your GitHub username and `repo` is the name of the repository.

![](https://stethoscope.js.org/branding/docs/manual-triggers-1.png)

On the left sidebar under "Workflows", click on "Stethoscope CI".

You will see the message "This workflow has a `workflow_dispatch` event trigger.". Click on the "Run workflow" button on the right. Keep the default branch select and click on "Run workflow".

![](https://stethoscope.js.org/branding/docs/manual-triggers-2.png)

## Using the GitHub API

If you want to programmatically trigger updates, you can use the GitHub REST API's repository dispatch events by triggering an event in your repository called `stethoscope`:

```bash
curl \
  -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/user/repo/dispatches \
  -d '{ "event_type": "stethoscope" }'
```

Or, with JavaScript ([@octokit/core.js](https://github.com/octokit/core.js#readme)):

```js
await octokit.request("POST /repos/{owner}/{repo}/dispatches", {
  owner: "user",
  repo: "repo",
  event_type: "stethoscope",
});
```

For more information, read this article on the GitHub website: [Create a repository dispatch event](https://docs.github.com/en/rest/reference/repos#create-a-repository-dispatch-event).
