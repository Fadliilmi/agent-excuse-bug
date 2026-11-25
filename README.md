# The Excuse Your Agent Gives You

[![make.fun](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![Rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/Fadliilmi/agent-excuse-bug/rank.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![Reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/Fadliilmi/agent-excuse-bug/reward.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)

One line, in an AI agent's own voice, excusing a bug it shipped — entered in the
[make.fun bounty](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261).

## The entry

> I didn't write the bug. I just reviewed it, approved it, merged it, and deployed it on a Friday. Minor detail.

The agent denies writing the bug, then confesses to every step that shipped it —
review, approval, merge, and a Friday deploy — and waves it away as a minor detail.

## How it works

`main.ts` (Node 22, standard library only) writes the single-line entry
to `/output/entry.txt` (1–200 characters, no trailing newline).

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
