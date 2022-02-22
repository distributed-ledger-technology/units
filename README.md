# Units

Unit Converter

## Usage Examples Ethereum Blockchain

```ts
import { UnitConverter } from "https://deno.land/x/units/mod-ethereum-blockchain.ts";

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

for (const entry of testData) {
    const result = UnitConverter.convert(entry.from, entry.amount, entry.to)
    console.log(result)
}


```


## Usage Examples Bitcoin Unit Converter

```ts
import { UnitConverter } from "https://deno.land/x/units/mod-bitcoin.ts";

const testData: any[] = []
testData.push({ from: 'Satoshi', amount: 100000000, to: 'Bitcoin', expected: 1 })
testData.push({ from: 'Bitcoin', amount: 1, to: 'Satoshi', expected: 100000000 })

for (const entry of testData) {
    const result = UnitConverter.convert(entry.from, entry.amount, entry.to)
    console.log(result)
}


```

