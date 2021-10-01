

export class UnitConverter {

    public static convert(from: string, amount: number, to: string): number {

        let valueInSquareCentimeters = 0

        switch (from) {
            case "squareMeter": valueInSquareCentimeters = amount * Math.pow(10, 4)
                break
            case "are": valueInSquareCentimeters = amount * Math.pow(10, 6)
                break
            case "hectare": valueInSquareCentimeters = amount * Math.pow(10, 8)
                break
            default: throw new Error(`can't convert ${amount} ${from} to ${to}`)

        }

        // console.log(`valueInSquareCentimeters: ${valueInSquareCentimeters}`)

        switch (to) {
            case "squareCentimeter": return valueInSquareCentimeters
            case "squareMeter": return valueInSquareCentimeters / Math.pow(10, 4)
            case "are": return valueInSquareCentimeters / Math.pow(10, 6)
            case "hectare": return valueInSquareCentimeters / Math.pow(10, 8)
            default: throw new Error(`can't convert ${amount} ${from} to ${to}`)
        }



    }
}