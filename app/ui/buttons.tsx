import clsx from "clsx"
import { ReactNode } from "react"

export function StandardButton(
    {title, vibrant, onClick, addStyles, disabled}:
    {
        title: ReactNode,
        vibrant?: boolean
        onClick?: () => void,
        disabled?: boolean, 
        addStyles?: string
    }
) {
    return (
        <button className={clsx(
            {
                "text-primary-text": vibrant,
                "text-secondary-text": !vibrant
            }, `text-sm cursor-pointer px-4 py-[6px] rounded-lg ${addStyles}`
        )} 
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </button>
    )
}

export function ActiveButton(
    {title, disabled, onClick, addStyles}:
    {
        title:string, 
        onClick?: () => void,
        disabled?: boolean, 
        addStyles?: string
    }
) {
    return (
        <button className={clsx(
            {
                "bg-[#3E425B]" : disabled,
                "bg-alternate-blue" : !disabled,
            }, ` ${addStyles} text-primary-text text-sm px-4 py-[6px] rounded-lg cursor-pointer`
            )}
            disabled={disabled}
            onClick={onClick}
        >
            {title}
        </button>
    )
}