'use client'

import { ChatMessage, ProposalV2 } from "test-governance-sdk";
import { StandardButton } from "@/app/ui/buttons";
import { useState } from "react";
import { Comment } from "./comment";
import { useDaoMeta } from "@/app/providers/dao-provider";
import { RealmMetaType } from "@/app/hooks/useRealm";
import { useGetDelegateRecords, useGetTokenOwnerRecord } from "@/app/hooks/useVoterRecord";
import { usePostMessage } from "@/app/hooks/usePostComment";

export function CommentsDisplay(
    {comments, proposal}: {comments: ChatMessage[], proposal: ProposalV2}
) {
    const [newMsg, setNewMsg] = useState("")
    const messages = comments.filter(comment => comment.body.text !== undefined)
    const topLevelMessages = messages.filter(msg => msg.replyTo === null)

    const realmMeta = useDaoMeta() as RealmMetaType
    const tokenOwnerRecord = useGetTokenOwnerRecord(realmMeta.name).data
    const delegateRecords = useGetDelegateRecords(realmMeta.name).data
    
    const {
        mutateAsync: postMessageAsync,
        isError: postMessageFailed,
        error: postMessageError,
        isPending: postMessagePending
    } = usePostMessage(realmMeta.name)

    async function handleSubmit() {
        await postMessageAsync({
            proposal,
            replyTo: undefined,
            message: newMsg,
            messageType: "text",
            tokenOwnerRecord,
            delegateRecords
        })

        setNewMsg("")
    }

    return (
        <div className="w-full flex flex-col">
            <hr className="border-[1px] w-full my-4" style={{borderColor: realmMeta.secondaryBackground}} />
            {
                topLevelMessages.map(msg => (
                    <div key={msg.publicKey.toBase58()} className="mb-2">
                        <Comment 
                            subComments={comments.filter(comment => comment.replyTo?.equals(msg.publicKey))}
                            comment={msg} 
                            proposal={proposal}

                        />
                    </div> 
                ))
            }
            <hr className="border-[1px] w-full mt-2" style={{borderColor: realmMeta.secondaryBackground}} />
            <div className="w-full flex gap-3 my-4">
                <input 
                    type="text"
                    placeholder="Write your reply..."
                    className="
                        placeholder:text-secondary-text placeholder:pl-4 p-4 rounded-lg text-sm z-20 
                        placeholder:font-light w-10/12"
                    style={{backgroundColor: realmMeta.secondaryBackground}}
                    onChange={(e) => setNewMsg(e.target.value)}
                    value={newMsg}
                />
                <StandardButton
                    title={postMessagePending ? "Posting..." : "Post"}
                    addStyles={`w-2/12`}
                    style={{backgroundColor: !newMsg || postMessagePending ? realmMeta.secondaryBackground : realmMeta.mainColor}}
                    disabled={!newMsg || postMessagePending}
                    vibrant={true}
                    onClick={handleSubmit}
                />
            </div>
            {postMessageFailed && <div className="text-red-400 text-sm mt-4">
                {postMessageError.message}
            </div>}
        </div>
    )
}