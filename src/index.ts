// vault — public API
//
// Re-exports the components, hooks, and core modules that the consuming app's
// viewer/brain pages (and any future consumer) import. Anything
// not exported here is internal.
//
// NOTE: This file resolves cleanly TypeScript-wise, but the components still
// import `@/lib/collab/y-provider`, `@/lib/brain-hub-client`, and `@/i18n`
// from vault. Until those 3 deps are resolved (see CLAUDE.md "Known
// coupling"), vault won't build standalone — it can only be consumed by a
// host that provides those modules under the same paths.

// Top-level UI
export { VaultExperience } from './components/vault-experience';
export { VaultOrbit, type LayoutMode } from './components/vault-orbit';
export { VaultModal } from './components/vault-modal';
export { VaultTopbar, type VaultBrand } from './components/vault-topbar';
export { BrainExperience } from './components/brain-experience';

// Store + types
export {
  loadVault,
  saveVault,
  createDoc,
  type VaultDoc,
  type VaultDocBrainExtras,
  type VaultState,
  type VaultTint,
  type ImportInput,
} from './components/vault-store';

// Ingest
export {
  parseFile,
  parseFiles,
  isIngestable,
  extOf,
  rtfToText,
  INGEST_ACCEPT,
  type IngestKind,
  type IngestResult,
} from './components/vault-ingest';

// Links + graph
export { extractLinkedIds, buildEdges } from './components/vault-links';
export {
  buildVaultAdjacency,
  kHopNeighbors,
  shortestPath,
  egoGraph,
  type Adjacency,
  type BuildAdjacencyOptions,
  type NeighborHit,
  type EgoGraphResult,
} from './components/vault-graph-queries';

// Semantic surfaces
export {
  buildEmbeddingEdges,
  preloadEmbedder,
  type EmbeddingOptions,
} from './components/vault-embeddings';
export {
  buildSemanticEdges,
  type SemanticEdge,
  type SemanticOptions,
} from './components/vault-tfidf';

// Sharing
export { encodeVaultUrl, decodeVaultUrl } from './components/vault-share';

// Hooks
export { useVault, type UseVaultResult, type IngestReport, type PeerPresence } from './components/use-vault';
export {
  useBrainDocs,
  type UseBrainDocsResult,
  type PulseMap,
} from './components/use-brain-docs';
export {
  useSemanticEdges,
  type SemanticSource,
  type UseSemanticEdgesResult,
} from './components/use-semantic-edges';
