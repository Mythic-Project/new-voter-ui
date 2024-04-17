import { ActiveButton, StandardButton } from "../../buttons"

function VoterPanel() {
    return (
        <div className="w-full bg-primary-background flex justify-between p-4 items-center rounded-lg">
            <div className="">0 UTK</div>
            <div className="flex gap-6 mr-8 items-center">
                <ActiveButton title="Add" />
                <StandardButton title="Withdraw" />
                <StandardButton title="Delegate" />
            </div>
        </div>
    )
}

export default VoterPanel