

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
    {title}:
    {title:string}
) {
    return (
        <div className="text-primary-text bg-[#4361EE] text-sm px-2 py-1 rounded-lg cursor-pointer">
            {title}
        </div>
    )
}