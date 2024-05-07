
export function removeZeros(numString: string) {
    const numArray = numString.split("").reverse()
    let run = true

    while (run) {
        if (numArray[0] === "0") {
            numArray.shift()
        } else {
            run = false
        }
    }

    return numArray.reverse().join("")
}
