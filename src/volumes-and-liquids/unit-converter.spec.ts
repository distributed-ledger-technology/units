
import { UnitConverter } from "./unit-converter.ts";
import { assertStrictEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts";

const testData: any[] = []
testData.push({ from: '', amount: 1, to: '', expected: 10000 })

Deno.test("should convert volume and liquids units", () => {

    for (const entry of testData) {
        const result = UnitConverter.convert(entry.from, entry.amount, entry.to)
        console.log(result)
        assertStrictEquals(result, entry.expected, `error while converting ${entry.amount} ${entry.from} to ${entry.to}`)

    }

})
