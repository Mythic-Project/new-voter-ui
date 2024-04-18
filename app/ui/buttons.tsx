import clsx from "clsx"

export function StandardButton(
    {title}:
    {title:string}
) {
    return (
        <div className="text-secondary-text text-sm cursor-pointer">
            {title}
        </div>
    )
}

export function ActiveButton(
    {title, disabled}:
    {title:string, disabled: boolean}
) {
    return (
        <button className={clsx(
            {
                "bg-[#3E425B]" : disabled,
                "bg-[#4361EE]" : !disabled,
            }, "text-primary-text  text-sm px-4 py-[6px] rounded-lg cursor-pointer" 
            )}
            disabled={disabled}
        >
            {title}
        </button>
    )
}