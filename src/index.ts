// vault — public API
//
// All public components, hooks, and pure-function modules. Anything not
// re-exported here is internal.

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
