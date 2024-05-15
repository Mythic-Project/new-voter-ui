import { removeZeros } from "@/app/utils/ui-utils"
import BN from "bn.js"

type FormatBalanceProps = {
    decimals: number | undefined,
    weight: BN
}

function FormatBalance({
    decimals,
    weight
}: FormatBalanceProps
) {
    const pow = decimals ? new BN(10).pow(new BN(decimals)) : new BN(1)
    const base = weight.div(pow)
    const decis = weight.mod(pow)
    const decisString = decimals ? decis.toString().padStart(decimals, "0") : decis.toString()

    return (
        <span>
            {base.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {decis.toNumber() !== 0 && "."}
            {removeZeros(decisString)}
        </span>
    )
}

export default FormatBalance