# AssetAtlas

**Structured Stellar asset metadata and verification for Stellar anchors.**

> **Status: v0.1.0 development baseline — not audited, not production-ready.**

AssetAtlas is a three-repository system for Stellar anchors that need deterministic asset metadata and verification with on-chain state as the source of truth. Off-chain services stay out of consensus-critical logic.

## The three repositories

| Repository | Role | Documentation here |
| --- | --- | --- |
| [assetatlas-contracts](https://github.com/stellar-assetatlas/assetatlas-contracts) | On-chain Soroban state and authorization | [Smart Contract](contract.md) |
| **assetatlas-app** (this repo) | User-facing web application | [User Guide](user-guide.md) |
| [assetatlas-backend](https://github.com/stellar-assetatlas/assetatlas-backend) | Off-chain indexing/API and operational services | [Backend API](api.md) |

## Key features (current baseline)

- **Next.js web app** (App Router) with a Stellar testnet network-summary view.
- **Soroban contract** with admin initialization, auth-gated writes, and value storage (`initialize` / `record` / `read`).
- **Minimal backend** HTTP service with `/health` and `/network` endpoints.
- TypeScript across the app and backend; Rust (`no_std`) for the contract.

## Architecture at a glance

```mermaid
flowchart LR
    U[User browser] --> A[assetatlas-app<br/>Next.js]
    A -- reads public chain state --> R[Stellar RPC<br/>Soroban testnet]
    A -- authenticated writes --> W[Wallet / signing layer]
    R --> C[assetatlas-contracts<br/>on-chain state]
    B[assetatlas-backend<br/>metadata / API] --> R
    A -- BACKEND_URL --> B
```

## Where to start

- New contributor? → [Getting Started](getting-started.md)
- Want to run the app? → [User Guide](user-guide.md)
- Calling the backend? → [Backend API](api.md)
- Building the contract? → [Smart Contract Guide](contract.md)

## Important resources

- Source code: [github.com/stellar-assetatlas](https://github.com/stellar-assetatlas)
- Maintainer: **Hikmaholadele** ([@Hikmaholadele](https://github.com/Hikmaholadele))
- License: [Apache-2.0](https://github.com/stellar-assetatlas/assetatlas-app/blob/main/LICENSE)
- Security policy: [SECURITY.md](https://github.com/stellar-assetatlas/assetatlas-app/blob/main/SECURITY.md)
