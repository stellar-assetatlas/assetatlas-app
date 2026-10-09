# Getting Started

This guide covers all three AssetAtlas repositories. Commands are verified against the current `main` branches.

## Prerequisites

| Tool | Version | Needed for |
| --- | --- | --- |
| Node.js | ≥ 20 | assetatlas-app, assetatlas-backend |
| npm | ≥ 10 | assetatlas-app, assetatlas-backend |
| Rust (stable) | recent stable | assetatlas-contracts |
| `wasm32v1-none` target | — | building the contract to `.wasm` |
| Stellar CLI | latest | `stellar contract build` (contract repo `make build`) |

Install the WASM target for contract work:

```bash
rustup target add wasm32v1-none
```

## Clone the repositories

```bash
git clone https://github.com/stellar-assetatlas/assetatlas-app.git
git clone https://github.com/stellar-assetatlas/assetatlas-backend.git
git clone https://github.com/stellar-assetatlas/assetatlas-contracts.git
```

## Install and run each component

=== "assetatlas-app"

    ```bash
    cd assetatlas-app
    npm install
    npm run dev
    ```

    The app runs at <http://localhost:3000>.

=== "assetatlas-backend"

    ```bash
    cd assetatlas-backend
    npm install
    npm run dev
    ```

    The service runs on port `8787`. Verify with:

    ```bash
    curl http://localhost:8787/health
    # {"ok":true,"service":"assetatlas-backend"}
    ```

=== "assetatlas-contracts"

    ```bash
    cd assetatlas-contracts
    make test    # cargo test
    make build   # stellar contract build (produces .wasm)
    ```

## Configuration

Each repo ships a `.env.example`. Copy it before running:

- **assetatlas-app** → `.env.local` (see [Configuration](configuration.md))
- **assetatlas-backend** → `.env` (see [Configuration](configuration.md))

The contract crate needs no environment variables.

## Run the tests

| Repo | Command |
| --- | --- |
| assetatlas-app | `npm test` |
| assetatlas-backend | `npm test` |
| assetatlas-contracts | `cargo test` |

## First-run sanity checks

1. `assetatlas-app` loads at `http://localhost:3000` and shows the testnet network summary.
2. `curl http://localhost:8787/health` returns `{"ok":true,...}`.
3. `cargo test` in the contracts repo prints `test result: ok`.
