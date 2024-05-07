'use client'

import { RealmMetaType } from "@/app/hooks/useRealm"
import { useGetVoterWeight } from "@/app/hooks/useVoterWeight"
import { useDaoMeta } from "@/app/providers/dao-provider"
import { removeZeros } from "@/app/utils/ui-utils"
import BN from "bn.js"
import { useState } from "react"
import { HiLightningBolt } from "react-icons/hi"
import Modal from "react-modal"
import { customStyles } from "../../style/modal-style"
import { useGetDaoMintData } from "@/app/hooks/useMint"

function VoterWeightDisplay(
    {selfAmount, delegateAmount, mintData} :
    {selfAmount: {votes: BN, tokens: BN},
    delegateAmount: {votes: BN, tokens: BN},
    mintData: {decimals: number, name: string | undefined} | null | undefined}
) {
    const [modalIsOpen, setIsOpen] = useState(false);
      
    const totalVotesWeight = selfAmount.votes.add(delegateAmount.votes)
    const totalTokensWeight = selfAmount.tokens.add(delegateAmount.tokens)
    const pow = mintData ? new BN(10).pow(new BN(mintData.decimals)) : new BN(1)
    const base = totalVotesWeight.div(pow)
    const decis = totalVotesWeight.mod(pow)
    const decisString = mintData ? decis.toString().padStart(mintData!.decimals, "0") : decis.toString()

    const multiplier = totalVotesWeight.toNumber()/totalTokensWeight.toNumber()

    return (
        <div className="ml-2">
            <div className="flex gap-2 items-center cursor-pointer font-medium" onClick={() => setIsOpen(true)}>
                {base.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                {decis.toNumber() !== 0 && "."}
                {removeZeros(decisString)}
                <span className="text-secondary-text font-normal">{mintData?.name ? mintData.name : "Votes"}</span>
                {
                    multiplier > 1 &&
                    <div className="flex gap-2 items-center bg-secondary-background py-2 px-4 ml-2 text-xs rounded-2xl">
                        <HiLightningBolt className="text-[#899DFC]"/>
                        {multiplier.toFixed(2)}x
                    </div>
                }
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel="Voter Weight"
                ariaHideApp={false}
            >
                <div className="flex flex-col gap-6 py-4 px-8 items-center text-primary-text">
                    <h2 className="font-semibold">My Voting Power</h2>
                    <div className="flex flex-col items-center">
                        <h3 className="font-medium mb-2">Self Voting Power</h3>
                        <h4 className="text-secondary-text flex gap-2 text-sm">
                            <span className="">My Tokens:</span>
                           {selfAmount.tokens.div(pow).toString()}.
                           {selfAmount.tokens.mod(pow).toString().padStart(mintData?.decimals ? mintData.decimals : 0, "0")}
                        </h4>
                        <h4 className="text-secondary-text flex gap-2 text-sm">
                            <span className="">My Votes:</span> 
                            {selfAmount.votes.div(pow).toString()}.
                            {selfAmount.votes.mod(pow).toString().padStart(mintData?.decimals ? mintData.decimals : 0, "0")}
                        </h4>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="font-medium mb-2">Delegated Voting Power</h3>
                        <h4 className="text-secondary-text flex gap-2 text-sm">
                            <span className="">Delegated Tokens:</span> 
                            {delegateAmount.tokens.div(pow).toString()}.
                            {delegateAmount.tokens.mod(pow).toString().padStart(mintData?.decimals ? mintData.decimals : 0, "0")}
                        </h4>
                        <h4 className="text-secondary-text flex gap-2 text-sm">
                            <span className="">Delegated Votes:</span>
                            {delegateAmount.votes.div(pow).toString()}.
                            {delegateAmount.votes.mod(pow).toString().padStart(mintData?.decimals ? mintData.decimals : 0, "0")}
                        </h4>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

function VoterWeight() {
    const {name} = useDaoMeta() as RealmMetaType
    const weights = useGetVoterWeight(name)
    const mintData = useGetDaoMintData(name).data

    return (
        weights.data ?
            <VoterWeightDisplay 
                selfAmount={weights.data.selfAmount} 
                delegateAmount={weights.data.delegateAmount}
                 mintData={mintData}
            /> :
        weights.isFetched ?
            <div className="text-secondary-text font-medium">
                No Voting Power
            </div> :
            <div className="text-secondary-text font-medium">
                Fetching Balance..
            </div>
    )
}

export default VoterWeight