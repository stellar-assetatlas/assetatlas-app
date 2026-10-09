# Configuration

All variable names below come directly from the repositories' `.env.example` files.

## assetatlas-app

Copy `.env.example` → `.env.local`:

| Variable | Example | Description |
| --- | --- | --- |
| `STELLAR_NETWORK` | `testnet` | Target Stellar network. |
| `STELLAR_RPC_URL` | `https://soroban-testnet.stellar.org` | Soroban RPC endpoint. |
| `CONTRACT_ID` | *(empty)* | Deployed AssetAtlas contract ID; leave empty until deployed. |
| `BACKEND_URL` | `http://localhost:8787` | URL of the assetatlas-backend service. |

## assetatlas-backend

Copy `.env.example` → `.env`:

| Variable | Example | Description |
| --- | --- | --- |
| `PORT` | `8787` | HTTP port (code default: `8787` when unset). |
| `STELLAR_RPC_URL` | `https://soroban-testnet.stellar.org` | Soroban RPC endpoint. |
| `DATABASE_URL` | *(empty)* | Persistence connection string; unused in the current baseline. |
| `CONTRACT_ID` | *(empty)* | Deployed AssetAtlas contract ID the backend reads from. |

## assetatlas-contracts

No environment variables. Deployment-time values (source account, network, WASM path) are passed as CLI arguments — see [Smart Contract Guide → Deployment](contract.md#deployment).

## Network settings

The whole system currently targets **Stellar testnet**. The app reports the network via the SDK constant `Networks.TESTNET`; the backend exposes it at `GET /network`.

!!! warning
    Mainnet configuration is not supported or audited. Keep `STELLAR_NETWORK=testnet`.

## Example: full local setup

```bash
# assetatlas-app/.env.local
STELLAR_NETWORK=testnet
STELLAR_RPC_URL=https://soroban-testnet.stellar.org
CONTRACT_ID=
BACKEND_URL=http://localhost:8787

# assetatlas-backend/.env
PORT=8787
STELLAR_RPC_URL=https://soroban-testnet.stellar.org
DATABASE_URL=
CONTRACT_ID=
```

Never commit real `.env` files — both repos' `.gitignore` exclude `.env` / `.env.local`.
