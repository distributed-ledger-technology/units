
import { UnitConverter } from "./unit-converter.ts";
import { assertStrictEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts";

const testData: any[] = []

testData.push({ from: 'Satoshi', amount: 1000000000, to: 'Bitcoin', expected: 1 })
testData.push({ from: 'Bitcoin', amount: 1, to: 'Satoshi', expected: 1000000000 })

Deno.test("should convert Bitcoin Units", () => {

    for (const entry of testData) {
        const result = UnitConverter.convert(entry.from, entry.amount, entry.to)

        assertStrictEquals(result, entry.expected, `error while converting ${entry.amount} ${entry.from} to ${entry.to}`)

    }

})
