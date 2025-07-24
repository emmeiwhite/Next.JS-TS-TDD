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
  return arr.map(mulBy10)
}

const modifiedArray = arrayMutate([2, 4, 6], mulBy10)
console.log(modifiedArray)
