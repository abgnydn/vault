# CLAUDE.md — vault

3D obsidian-style knowledge visualizer. See `README.md` for the product overview.

## 🎯 Resume here (on "continue")

_Updated: 2026-05-18 — package skeleton is in place (`@abgnydn/vault@0.1.0`, private, no bundler step). All `@/...` path imports resolve inside the tree. Public API is the `src/index.ts` barrel._

**Steps (next, in priority order):**

1. **Wire a bundler** if you want `dist/index.js` + `dist/index.d.ts`. Options: `tsup` (fastest), Vite library mode, or plain `tsc` matching other packages. Without a build, consumers must resolve `.ts` themselves (works in Next.js, Vite, Bun out of the box).
2. **Decide on `brain-experience.tsx` and `use-brain-docs.ts`.** They were brought in as part of the visualizer surface but conceptually belong to a brain-MCP layer. Either keep here as the "live data" overlay or move to a separate package that consumes vault.
3. **Replace the demo seed** in `use-vault.ts` with something more compelling than the 50 random connected docs — a small but realistic public-domain corpus (Plato dialogues? RFCs? Shakespeare folios?) makes the visualization sing.
4. **Pick an embedding strategy default.** Currently lazy-loads `Xenova/all-MiniLM-L6-v2`. For multilingual support consider `Xenova/multilingual-e5-small`.

**Acceptance for this Resume:** `npm install @abgnydn/vault` + a single-page Next.js demo renders `<VaultExperience />` with the demo seed visible and orbiting.

## Layout

```
src/
├── components/        VaultExperience, VaultOrbit, VaultModal, VaultTopbar, embodied/, hooks
├── app/               Next.js routes (solo vault + collab room)
├── lib/               WebRTC + Yjs provider, hub client
├── i18n/              en + tr (62 keys each)
├── index.ts           public barrel — start here when reading
└── __tests__/         vitest unit suites
e2e/                   Playwright (canvas, routes, topbar)
```

## Working agreement

- The 3D orbit + embeddings was load-bearing for the "wow" moment. Don't refactor or simplify without confirming the visual still feels right.
- Don't run tests on WIP code in this repo while a refactor is in flight.
- Peer-deps target React 19 + Three.js 0.180 + Next 16. Keep these aligned with consumers.
