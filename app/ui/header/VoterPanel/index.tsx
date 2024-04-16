
function VoterPanel() {
    return (
        <div className="w-full bg-primary-background flex justify-between p-4">
            <div className="">0 UTK</div>
            <div className="flex gap-4 mr-8">
                <button>Add</button>
                <button>Withdraw</button>
                <button>Delegate</button>
            </div>
        </div>
    )
}

export default VoterPanel