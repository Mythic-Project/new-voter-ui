import { PublicKey } from "@solana/web3.js";
import { Heading } from "../headings";
import { Proposal, ProposalType } from "./Proposal";
import { SearchBar } from "./search-bar";

const mockProposals: ProposalType[] = [
    {
        creator: "DaSiWEEj3bWiqf8KVLPQ3ant1RCZgd93dtQfMc9ReovH",
        pubkey: new PublicKey("DaSiWEEj3bWiqf8KVLPQ3ant1RCZgd93dtQfMc9ReovH"),
        endTime: 1713433439000,
        startTime: 1713133439000,
        status: "Voting",
        title: "Fast-listing tokens: add asset weight and allow borrowing",
        description: "With the upcoming v0.20.0 program release, we have an opportunity to change the parameters used for new tokens listed through the fast-listing process.",
        options: [{weight: 56000}],
        denyWeight: 67000
    }
]
export function Proposals() {
    return (
        <div className="flex flex-col gap-4 w-full max-w-[722px] mt-8">
            <div className="flex justify-between items-center">
                <Heading title="Proposals" />
                <SearchBar />
            </div>
            <div className="">
                {mockProposals.map(proposal => (
                    <Proposal proposal={proposal} key={proposal.pubkey.toBase58()}/>
                ))}
            </div>
        </div>
    )
}