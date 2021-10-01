
import { UnitConverter } from "./unit-converter.ts";
import { assertStrictEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts";

const testData: any[] = []
testData.push({ from: 'Wei', amount: 1000000000000000000, to: 'Ether', expected: 1 })
testData.push({ from: 'Kwei', amount: 1000000000000000, to: 'Ether', expected: 1 })
testData.push({ from: 'Mwei', amount: 1000000000000, to: 'Ether', expected: 1 })
testData.push({ from: 'Gwei', amount: 1000000000, to: 'Ether', expected: 1 })
testData.push({ from: 'Szabo', amount: 1000000, to: 'Ether', expected: 1 })
testData.push({ from: 'Finney', amount: 1000, to: 'Ether', expected: 1 })
testData.push({ from: 'Ether', amount: 1, to: 'Ether', expected: 1 })
testData.push({ from: 'Kether', amount: 1, to: 'Ether', expected: 1000 })
testData.push({ from: 'Mether', amount: 1, to: 'Ether', expected: 1000000 })
testData.push({ from: 'Gether', amount: 1, to: 'Ether', expected: 1000000000 })
testData.push({ from: 'Tether', amount: 1, to: 'Ether', expected: 1000000000000 })
testData.push({ from: 'Ether', amount: 1, to: 'Wei', expected: 1000000000000000000 })
testData.push({ from: 'Wei', amount: 1000000000000000000, to: 'Wei', expected: 1000000000000000000 })
testData.push({ from: 'Wei', amount: 1000000000000000000, to: 'Kwei', expected: 1000000000000000 })

Deno.test("should convert Ethereum Blockchain Units", () => {

    for (const entry of testData) {
        const result = UnitConverter.convert(entry.from, entry.amount, entry.to)
        console.log(result)
        assertStrictEquals(result, entry.expected, `error while converting ${entry.amount} ${entry.from} to ${entry.to}`)

    }

})
