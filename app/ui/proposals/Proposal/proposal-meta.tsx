import { IoMdStopwatch } from "react-icons/io"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { ProposalType } from "."

dayjs.extend(relativeTime)

export function ProposalMeta(
    {proposal} : {proposal: ProposalType}
) {
    return (
        <div className="flex justify-between">
            <div className="flex gap-3 items-center ">
                <div className="w-10 h-10 rounded-full bg-secondary-background"></div>
                <div className="">
                    <div className="text-sm text-primary-text">
                        Created by {proposal.creator.substring(0,4)}..
                    </div>
                    <div className="text-xs text-secondary-text">
                        {dayjs(proposal.startTime).fromNow()}
                    </div>
                </div>
            </div>
            <div className="flex sm:flex-row flex-col items-center gap-3">
                <div className="bg-secondary-background flex items-center gap-1 text-xs py-2 px-4 rounded-2xl">
                    <IoMdStopwatch className="text-[14px]"/>
                    {dayjs(proposal.endTime).fromNow()}
                </div>
                <div className="bg-secondary-background flex items-center gap-2 text-xs py-2 px-4 rounded-2xl">
                    <div className="w-[6px] h-[6px] bg-[#00DD58] rounded-full"></div>
                    {proposal.status}
                </div>
            </div>
        </div>
    )
}