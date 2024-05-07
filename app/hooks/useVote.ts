import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useGetRealmMeta } from "./useRealm"
import { useQuery } from "@tanstack/react-query"
import { PublicKey } from "@solana/web3.js"
import { Rpc, VoteRecord } from "test-governance-sdk"
import { useGetProposals } from "./useProposal"

export interface VoteRecordWithGov extends VoteRecord {
    governance: PublicKey
}

export function useGetVoteRecords(name: string) {
    const {connection} = useConnection()
    const {publicKey} = useWallet()
    const selectedRealm = useGetRealmMeta(name)
    const proposals = useGetProposals(name).data

    return useQuery({
        enabled: proposals !== undefined,
        queryKey: ['get-vote-records', {
            name,
            voter: publicKey
        }],
        queryFn: async(): Promise<VoteRecordWithGov[] | null> => {
            if (!publicKey || !selectedRealm || !proposals) {
                return null
            }
            
            const {programId, tokenMint} = selectedRealm

            const daoProgramId = new PublicKey(programId)
            const token = new PublicKey(tokenMint)
            const govRpc = new Rpc(connection, daoProgramId)

            try {
                const unrelquishVoteRecords = await govRpc.getVoteRecordsForUser(publicKey, true)
                console.log("fetched vote records")
                
                const voteRecordsWithGov = unrelquishVoteRecords.flatMap((voteRecord) => {
                    const proposal = proposals.find(
                        proposal => 
                            proposal.publicKey.equals(voteRecord.proposal) &&
                            proposal.governingTokenMint.equals(token)
                    )
                    return proposal ?
                        [{...voteRecord, governance: proposal.governance}] :
                        []
                })

                return voteRecordsWithGov
            } catch {
                return null
            }
        },
        refetchOnWindowFocus: false,
        staleTime: Infinity
    })
}