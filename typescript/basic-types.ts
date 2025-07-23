const numbers: Array<number> = [2, 3, 4]
const strings: string[] = ['a', 'ddd', 'uu']
let myRegex: RegExp = /foo/

console.log(numbers)
console.log(strings)
console.log(myRegex)

myRegex = /boo/

type PersonType = {
  firstName: string
  lastName: string
}

const person: PersonType = {
  firstName: 'Imi',
  lastName: 'jimmi'
}

console.log(person)

/** Map of ids */
/** Objects as Maps in JavaScript Record Type: Define both key and value type */
const ids: Record<number, string> = {
  10: 'a',
  20: 'b'
}

ids[30] = '30'

const arr = [1, 2, 3].map(v => `${v * 10}`)
console.log(arr)
