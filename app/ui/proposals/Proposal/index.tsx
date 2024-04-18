import { PublicKey } from "@solana/web3.js"
import { FaArrowRightLong } from "react-icons/fa6"
import ProposalOptions from "./proposal-options"
import { ProposalMeta } from "./proposal-meta"
import { ActiveButton } from "../../buttons"
import { GoComment } from "react-icons/go"


export interface ProposalOptionType {
    weight: number,
    label: string
}

export interface ProposalType {
    creator: string,
    title: string,
    description: string,
    status: string,
    options: ProposalOptionType[],
    denyWeight: number | undefined,
    endTime: number,
    startTime: number,
    pubkey: PublicKey
}

export function Proposal({proposal} : {proposal: ProposalType}) {
    const options = proposal.options

    if (options.length === 1) {
        options[0].label = "Yes"
    }

    if (proposal.denyWeight && options[options.length-1].label !== "No") {
        options.push({
            weight: proposal.denyWeight,
            label: "No"
        })
    }

    return (
        <div className="w-full p-6 bg-primary-background rounded-lg flex flex-col gap-2">
            <ProposalMeta proposal={proposal} />
            <h1 className="text-lg font-semibold flex items-center gap-2 text-primary-text mt-4 mb-2">
                {proposal.title}
                <FaArrowRightLong />
            </h1>
            <div className="text-sm text-secondary-text mb-4">
                {proposal.description}
            </div>
            <hr className="border-secondary-background border-1"/>
            <ProposalOptions options={options}/>
            <hr className="border-secondary-background border-1"/>
            <div className="mt-2 flex justify-between">
                <ActiveButton title="Vote" disabled={true} />
                <div className="text-tertiary-text flex items-center gap-2 text-sm">
                    <GoComment className="text-xl"/>
                    7 Comments
                </div>
            </div>
        </div>
    )
}