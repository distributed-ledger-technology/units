

export class UnitConverter {

    public static convert(from: string, amount: number, to: string): number {

        let valueInMilligram = 0

        switch (from) {
            case "": valueInMilligram = amount * Math.pow(10, 4)
                break
            default: throw new Error(`can't convert ${amount} ${from} to ${to}`)

        }

        // console.log(`valueInMilligram: ${valueInMilligram}`)

        switch (to) {
            case "": return valueInMilligram
            default: throw new Error(`can't convert ${amount} ${from} to ${to}`)
        }



    }
}