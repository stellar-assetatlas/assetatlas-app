import { networkSummary } from "../lib/stellar";
export default function Home(){return <main><p className="tag">STELLAR / SOROBAN</p><h1>AssetAtlas</h1><p>Structured Stellar asset metadata and verification.</p><section className="card"><h2>Network</h2><p>{networkSummary()}</p></section></main>}
