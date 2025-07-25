// Higher-Order-Functions

/** Function with a callback with no parameter */
function printToFile(text: string, callback: () => void) {
  console.log(text)
  callback()
}

printToFile('hello', () => console.log('hi'))
/** Function with callback which takes a parameter:
 * Let's create an array mutation function, that takes an array of numbers
 * and updates each array item with some value (map function)
 */
// Factory Function:
const mulBy10 = (v: number) => v * 10

type MutationFunction = (v: number) => number

function arrayMutate(arr: number[], mutate: MutationFunction): number[] {
  return arr.map(mutate)
}

const modifiedArray = arrayMutate([2, 4, 6], mulBy10)
console.log(modifiedArray)

/** Functions that return function. A classic JavaScript Closure */
type AdderFunction = (val: number) => number

function createAdder(num: number): AdderFunction {
  return (val: number) => val + num
}

const add10 = createAdder(10)
console.log(add10(5))
