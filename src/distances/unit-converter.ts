

export class UnitConverter {

    public static convert(from: string, amount: number, to: string): number {

        let valueInCentimeters = 0

        switch (from) {
            case "centimeter": valueInCentimeters = amount
                break
            case "meter": valueInCentimeters = amount * Math.pow(10, 2)
                break
            default: throw new Error(`can't convert ${amount} ${from} to ${to}`)

        }

        // console.log(valueInCentimeters)

        switch (to) {
            case "meter": return valueInCentimeters / Math.pow(10, 2)
            case "centimeter": return valueInCentimeters
            default: throw new Error(`can't convert ${amount} ${from} to ${to}`)
        }



    }
}