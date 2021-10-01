

export class UnitConverter {

    public static convert(from: string, amount: number, to: string): number {

        let valueIn = 0

        switch (from) {
            case "": valueIn = amount * Math.pow(10, 4)
                break
            default: throw new Error(`can't convert ${amount} ${from} to ${to}`)

        }

        // console.log(`valueIn: ${valueIn}`)

        switch (to) {
            case "": return valueIn
            default: throw new Error(`can't convert ${amount} ${from} to ${to}`)
        }



    }
}