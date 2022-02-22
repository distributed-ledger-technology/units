

export class UnitConverter {

    public static convert(from: string, amount: number, to: string): number {

        switch (from) {
            case "Satoshi": return amount / Math.pow(10, 8)
            case "Bitcoin": return amount * Math.pow(10, 8)
        }

        throw new Error(`can't convert ${amount} ${from} to ${to}`)
    }
}