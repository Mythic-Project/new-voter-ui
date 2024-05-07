import { useConnection } from "@solana/wallet-adapter-react"
import { useGetRealmMeta } from "./useRealm"
import { useQuery } from "@tanstack/react-query"
import { PublicKey } from "@solana/web3.js"
import { ProposalV2, Rpc } from "test-governance-sdk"
import { useGetGovernanceAccounts } from "./useGovernance"

export function useGetProposals(name: string) {
    const {connection} = useConnection()
    const selectedRealm = useGetRealmMeta(name)
    const governances = useGetGovernanceAccounts(name).data

    return useQuery({
        enabled: governances !== undefined,
        queryKey: ['get-proposals', {name}],
        queryFn: async() => {
            if (!selectedRealm || !governances) {
                return null
            }
            
            const {programId} = selectedRealm

            const daoProgramId = new PublicKey(programId)
            const govRpc = new Rpc(connection, daoProgramId)
            
            try {
                const proposals: ProposalV2[] = []

                for (const governance of governances) {
                    const currentProposals = await govRpc.getProposalsforGovernance(governance.publicKey)
                    proposals.push(...currentProposals)
                }

                return proposals
            } catch {
                return null
            }
        },
        refetchOnWindowFocus: false,
        staleTime: Infinity
    })
}