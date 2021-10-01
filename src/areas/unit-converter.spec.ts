
import { UnitConverter } from "./unit-converter.ts";
import { assertStrictEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts";

const testData: any[] = []
testData.push({ from: 'squareMeter', amount: 1, to: 'squareCentimeter', expected: 10000 })
testData.push({ from: 'squareMeter', amount: 100, to: 'are', expected: 1 })
testData.push({ from: 'are', amount: 1, to: 'squareMeter', expected: 100 })
testData.push({ from: 'hectare', amount: 1, to: 'are', expected: 100 })
testData.push({ from: 'hectare', amount: 1, to: 'squareMeter', expected: 10000 })

Deno.test("should convert distance units", () => {

    for (const entry of testData) {
        const result = UnitConverter.convert(entry.from, entry.amount, entry.to)
        console.log(result)
        assertStrictEquals(result, entry.expected, `error while converting ${entry.amount} ${entry.from} to ${entry.to}`)

    }

})
