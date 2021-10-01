

export class UnitConverter {

    public static convert(from: string, amount: number, to: string): number {

        let valueInMillimeters = 0

        switch (from) {
            case "millimeter": valueInMillimeters = amount * (Math.pow(10, 2))
                break
            case "centimeter": valueInMillimeters = amount * (Math.pow(10, 1))
                break
            case "decimeter": valueInMillimeters = amount * (Math.pow(10, 2))
                break
            case "meter": valueInMillimeters = amount * Math.pow(10, 3)
                break
            case "kilometer": valueInMillimeters = amount * Math.pow(10, 7)
                break
            default: throw new Error(`can't convert ${amount} ${from} to ${to}`)

        }

        // console.log(`valueInMillimeters: ${valueInMillimeters}`)

        switch (to) {
            case "meter": return valueInMillimeters / Math.pow(10, 2)
            case "centimeter": return valueInMillimeters / Math.pow(10, 1)
            case "decimeter": return valueInMillimeters / Math.pow(10, 2)
            case "millimeter": return valueInMillimeters
            case "kilometer": return valueInMillimeters / Math.pow(10, 6)
            default: throw new Error(`can't convert ${amount} ${from} to ${to}`)
        }



    }
}