# Harness 101

**Follow Jimin's 4-week journey to master Claude Code and become a Harness Engineer.**

→ **[harness101.vercel.app](https://harness101.vercel.app)**

---

## What is a Harness?

Claude (the model) is already an agent. Claude Code is the **Harness** that shapes how it behaves.

```
Harness = Tools + Knowledge + Context + Permissions
```

This site tells that story across 17 units — in Korean and English.

## Features

- 17 story units with campfire narrative, workshop exercises, and reflection prompts
- Full KO / EN bilingual support
- Dark / light mode
- Reading progress, command palette (⌘K), keyboard navigation (← →)
- Static site — no backend, no database

## Structure

```
harness101/
├── Storytelling/          # Korean markdown source
│   └── en/                # English translations
└── web/                   # Next.js app (deployed to Vercel)
    └── src/
        ├── app/           # Pages (/, /units/[id], /credits)
        ├── components/    # UI components
        ├── context/       # ThemeContext, LangContext
        └── lib/           # i18n, units metadata, content pipeline
```

## Running Locally

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Credits

Built with inspiration from:

- [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)
- [obra/superpowers](https://github.com/obra/superpowers)
- [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code)
- [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice)

## License

MIT
