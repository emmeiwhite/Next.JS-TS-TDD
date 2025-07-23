function addNumbers(a: number, b: number): number {
  return a + b
}

addNumbers(2, 4)

function addStrings(str1: string, str2: string): string {
  return str1 + str2
}

addStrings('hello', 'world')

const subtractNumbers = (a: number, b: number): number => a - b
subtractNumbers(34, 5)

// default parameters
const greeting = (name: string, greet: string = 'Welcome') => ` ${greet}: ${name}`
greeting('roufi')

// union type for parameter
const playAround = (name: string, play: string | boolean) => ` ${name} is playing: ${play}`
playAround('Mr. Rouf', true)
playAround('Mr. Rouf', 'cricket')

// void type
const doTask = (name: string): void => {
  console.log(`${name} do your task`)
}

doTask('imran')

// Returning Promise from a function
function fetchData(url: string): Promise<string> {
  return Promise.resolve(`Data from ${url}`)
}

fetchData('https://test.com')

// rest operator ...names

function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(' ')}`
}

introduce('Move Forward', 'imi', 'roufi', 'rafs')
