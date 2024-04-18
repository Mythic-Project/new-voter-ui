import { ProposalOptionType } from ".";

function ProposalOptions(
    {options}:
    {options: ProposalOptionType[]}
) {
    return (
        <ol className="w-full" type="A">
            {
                options.map((option, index) => (
                    <li className="w-full bg-options-background p-4 border-[1px] border-[#434557]
                     my-4 rounded-md text-primary-text text-sm cursor-pointer" key={index}
                    >
                        <span className="bg-primary-background py-[6px] px-[10px] mr-3
                            border-[1px] border-[#434557]"
                        >
                            {String.fromCharCode(65+index)}
                        </span>
                        {option.label}
                    </li>
                ))
            }
        </ol>
    )
}

export default ProposalOptions