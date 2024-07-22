import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export function useGetProposalBody(
  proposalAddress: string,
  proposalBody: string
) {
  return useQuery({
    queryKey: ['get-proposal-body', {proposal: proposalAddress}],
    queryFn: async(): Promise<string | null> => {

    const isGist = proposalBody.startsWith("https://gist.github.com/")
    console.log(isGist)
    if (isGist) {
      try {
        const uriInfo = await axios.get(proposalBody)

        return uriInfo.data.to
      } catch {
        return null
      }  
    } else {
      return proposalBody
    }
  },
    refetchOnWindowFocus: false,
    staleTime: Infinity
  })
}