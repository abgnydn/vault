# vault

A 3D obsidian-style visualizer for any knowledge base. Drag-drop markdown, PDFs, `.docx`, `.xlsx`, `.csv`, or `.udf` files — they orbit each other in 3D based on wikilinks, on-device embeddings, and TF-IDF semantic similarity. Built for spatial second-brain UIs, research workspaces, and "show me the shape of my notes" interfaces.

## Highlights

- **`<VaultExperience />`** — full 3D orbit, embodied first-person rig, drag-drop ingest, share-by-URL
- **7 ingest formats**: md, txt, docx, pdf, xlsx, csv, .udf (Turkish UYAP)
- **Three semantic engines**:
  - wikilinks (`[[doc-name]]`) + frontmatter resolution
  - TF-IDF similarity edges (no model download)
  - on-device transformer embeddings (`@huggingface/transformers`)
- **Graph queries**: k-hop neighbors, shortest path, ego graphs, vault hubs, communities
- **Collaborative rooms** over WebRTC via Yjs — peers see each other's cursors in the orbit
- **Read-only share** — full vault state encoded into a URL hash, no server required

## Quick look

```tsx
import { VaultExperience } from '@abgnydn/vault';

export default function MyVault() {
  return <VaultExperience roomId={null} />;
}
```

## Layout

```
src/
├── components/        VaultExperience, VaultOrbit, VaultModal, VaultTopbar, embodied/
├── app/               Next.js routes (solo + collab room)
├── lib/               WebRTC + Yjs provider, hub client
├── i18n/              en + tr translations
└── __tests__/         vitest unit suites
e2e/                   Playwright specs
```

## Status

Early — public API is a single barrel export at `src/index.ts`, no bundler step yet, consumers' bundlers resolve TypeScript directly. Peer-deps target React 19 + Three.js 0.180.

## License

Apache-2.0.
