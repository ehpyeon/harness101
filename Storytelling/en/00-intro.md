# Intro — Before This Story Begins

> *"The Model IS the Agent. The Code IS the Harness."*

---

## Jimin's First Day

Park Jimin installed Claude Code for the first time today.

A second-year full-stack developer. A ten-person startup. Building a SaaS product. The launch deadline is four weeks away.

"They said AI coding tools make you faster." She hit the install button.

```bash
$ claude
```

A prompt appeared in the terminal. Jimin typed her first question.

```
Jimin: Give me an overview of this project's structure
Claude: Sure, let me start by checking the file structure...
```

Claude began running `ls`, `cat`, and `find` on its own.
It read files, analyzed them, read more files, and reported back.

"This... this isn't just a chatbot."

Jimin's four-week journey had begun. This course is the record of that journey.

---

## Why This Course Exists

A conversation like this was common among developers.

```
"Have you tried Claude Code?"
"Yeah, but isn't it just another AI coding tool?"
"No, it's way more than that... but it's kind of hard to explain."
```

Claude Code is hard to explain.
It's not a simple autocomplete tool, not a chatbot, not an IDE plugin.

**Claude Code is an environment where an agent works.**

Understand that one sentence, and everything falls into place.
Fail to understand it, and every feature of Claude Code feels disconnected from the others.

This course exists **to make you understand that one sentence.**

---

## The Most Common Misconception: "Claude Code Makes Claude Smarter"

Wrong.

**Claude is already smart.**

It's a model that has learned to think, plan, and act through billions of training iterations.
It knows how to read code. It knows how to find bugs. It knows how to design architecture.

But there was one thing Claude lacked.

**Hands.**

The Claude of 2022 was a function that took text as input and returned text as output.
When you asked "find the bug in this file," it answered "there's no null check on line 3."
That was helpful. But **it couldn't read the file itself, and it couldn't fix it either.**

Developers had to look at Claude's answer, manually edit the code, copy the result, and paste it back.

**The developer themselves was Claude's hands.**

Claude Code gave Claude **a pair of hands.**
Hands that read files, hands that run code, hands that type in the terminal.
It didn't make Claude smarter — it created **an environment where the already-smart Claude could actually work.**

This environment is called the **Harness**.

---

## Harness: Designing the Agent's Work Environment

A horse knows how to run. A jockey doesn't teach a horse to run.
What the jockey does is **create an environment where the horse runs in the right direction.**
Reins (harness), saddle, course guidance.

Claude is the same.
Claude is already an agent. It knows how to think, plan, and act.
What we need to do is **design an environment where Claude can work correctly on our project.**

This environment is built from four layers:

```
Harness = Tools + Knowledge + Context + Permissions
```

### Tools — Claude's Hands

The things Claude can actually **do**.

```
Read files            → Read
Write files           → Write, Edit
Run the terminal      → Bash
Search files          → Glob, Grep
Use external services → MCPs (GitHub, Jira, Slack, DB...)
```

Without Tools, Claude can only think — it cannot act.
Tools are Claude's arms and legs.

### Knowledge — Claude's Memory

The things Claude **knows**.

```
What this project is          → CLAUDE.md (always active)
How to work here              → Rules (selected based on context)
Procedures for specific flows → Skills (only when explicitly called)
What the agent has learned    → MEMORY.md (auto-accumulated)
```

Without Knowledge, Claude is like a new hire who shows up every morning and asks
"What does this project do?" from scratch.

### Context — Claude's Short-Term Memory

The things Claude has **experienced in this conversation**.

```
Conversation history         → messages array
Files read, execution results → tool_results
Memory compression           → /compact
Isolated workspaces          → Subagents (clean context)
Task plans                   → TodoWrite, Task System
```

When Context fills up, Claude's focus scatters.
Old information interferes with new judgments.
A good Harness engineer actively manages Context.

### Permissions — Claude's Boundaries

The things Claude **can and cannot do**.

```
Block before acting          → Hooks (PreToolUse)
React after acting           → Hooks (PostToolUse)
Adjust the overall permission level → Permission Modes (Normal/Plan/Auto-Accept)
Minimal permissions per agent → Tool restrictions
```

Without Permissions, Claude might run `git push` whenever it wants,
execute `rm -rf` at any time, and modify the production DB freely.
Freedom requires boundaries.

---

## How This Course Is Structured: One Story

This course is **not a manual.** It is **a story.**

```
The manual approach:
  "CLAUDE.md is this feature, and here's how to use it."
  "Hooks are this feature, and here's how to configure them."
  "Skills are this feature, and..."
  → Features listed. No idea why they exist.

The story approach:
  "I was exhausted explaining the project every single time."
  → That's why CLAUDE.md was born.
  "I wanted lint to run automatically when Claude edited files."
  → That's why Hooks were born.
  "I typed the same workflow ten times a day."
  → That's why Skills were born.
  → You come to understand on your own why each feature exists.
```

**Every feature was born from a problem.**
And every solution created a new problem.
This course follows that chain.

```
Problem → Solution → New Problem → New Solution → ...

The Agent Loop emerged
    ↓ "I have to explain the project every session"
CLAUDE.md emerged
    ↓ "I want to react to Claude's actions"
Hooks emerged
    ↓ "I keep repeating the same workflows"
Skills emerged
    ↓ "I lose track in complex tasks"
The Task System emerged
    ↓ "Context keeps getting polluted"
Agents emerged
    ↓ ...continues through chapter 13
```

### Structure of Each Chapter: The Campfire Pattern

Every chapter follows three stages:

```
🔥 Campfire (Story)
  "Why was this necessary?"
  Feel the problem, and follow the discovery of the solution.

🔧 Workshop (Hands-On)
  "Let's try it ourselves."
  Work with real configuration, code, and execution results.

💡 Reflection (Summary)
  "What changed, and what breaks next?"
  Consolidate what was learned, then move on to the next story.
```

---

## How to Read This Course

### If You're Reading for the First Time

Read from the beginning, in order. You need to follow the cause-and-effect of the story to see the full picture.

```
00 Harness Engineering (here)
→ 01 Agent Loop → 02 CLAUDE.md → 03 Hooks → 04 Skills
→ 05 Task System → 06 Agents → 07 Background Tasks
→ 08 Rules → 09 MCPs → 10 Context Compact
→ 11 Agent Teams → 12 Worktree → 13 Agent Memory
```

### If You're Trying to Solve a Specific Problem

| I'm curious about... | Read this chapter |
|----------------------|------------------|
| Why Claude Code works the way it does | 00 + 01 |
| Explaining the project every time is tedious | 02 CLAUDE.md |
| I want something to happen automatically after file edits | 03 Hooks |
| I want to package a repeated workflow | 04 Skills |
| I lose my way in complex tasks | 05 Task System |
| Context is full of noise | 06 Agents |
| Slow builds are blocking Claude | 07 Background Tasks |
| CLAUDE.md has gotten too long | 08 Rules |
| I want to connect external services (GitHub, DB) | 09 MCPs |
| Context keeps filling up | 10 Context Compact |
| I want to use multiple agents simultaneously | 11, 12 Agent Teams |
| I want the agent to remember what it learned | 13 Memory |

---

## You Are a Harness Engineer

When you finish this course, you won't be a "user" of Claude Code — you'll be a **Harness Engineer.**

```
User:            Takes what Claude Code gives.
Harness Engineer: Actively designs the environment where Claude works.
```

The difference is significant.

```
User:            "Claude can't do this."
Harness Engineer: "The Tool for this task is missing. Let's add an MCP."

User:            "Claude keeps making the same mistake."
Harness Engineer: "Knowledge is lacking. Let's add a Rule."

User:            "Claude got slow."
Harness Engineer: "Context is full. Time to /compact and use a Subagent."
```

**Before blaming Claude's capabilities, check the Harness.**
Most problems are solved through Harness design.

---

## Let the Story Begin

Everything started from a single loop.
Thirty lines of Python code. `while True`.
That was all. And that was enough.

→ **[Ch01. The Agent Loop — The End of Copy-Paste](./00-the-agent-loop.md)**
