---
title: "I built an app"
date: 2026-09-10
tags: [projects]
---

When I was working for [Coefficient](https://coefficient.io) about 5 years ago, we were building a Google Sheets add-on using Google Apps Script. My development cycle took a very long time because I had to push the app to Google's servers to test it. It could only be tested as a Google Sheets add-on inside Google Sheets. A small change could take 5-10 minutes to test because it took that long to upload the changes. We could only upload the entire package, not just the diff.

Sometimes, I would make a change and push it to deploy, then forget that I had pushed a change and start working on something else. I needed a reminder that it had been pushed. So I did a small hack. Whenever I pushed from my terminal, I chained a command to play a WAV chime. As soon as the deployment finished, I'd hear the chime, which acted as a reminder for me to test it.

Recently, my development has brought back that same need. I give a prompt to Claude in VS Code, then totally forget that I gave it a prompt and start doing something else. I needed a reminder when it was finished.

So, I built [Pushie](https://pushie.net) to send me a push notification when Claude Code has finished _combabulating_. Now, I’ve added a stop webhook to the AI agent workflow, and I get notified every time it finishes. It is not just for AI agents; this webhook can be used with CI/CD pipelines to notify you, and the use cases are endless.

You can also try it out - it’s free for everyone.
