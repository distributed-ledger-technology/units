
import { UnitConverter } from "./unit-converter.ts";
import { assertStrictEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts";

const testData: any[] = []
testData.push({ from: 'meter', amount: 1, to: 'millimeter', expected: 1000 })
testData.push({ from: 'meter', amount: 1, to: 'centimeter', expected: 100 })
testData.push({ from: 'meter', amount: 1, to: 'decimeter', expected: 10 })
testData.push({ from: 'meter', amount: 1, to: 'kilometer', expected: 0.001 })

Deno.test("should convert distance units", () => {

    for (const entry of testData) {
        const result = UnitConverter.convert(entry.from, entry.amount, entry.to)
        console.log(result)
        assertStrictEquals(result, entry.expected, `error while converting ${entry.amount} ${entry.from} to ${entry.to}`)

    }

})
