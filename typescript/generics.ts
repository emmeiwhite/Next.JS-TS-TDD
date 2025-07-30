// Revisit Generics:

/** ---
 Generic: A generic is like a placeholder for a type -- you don't know yet what the type will be, so you leave it flexible

 - Just like a function parameter lets you pass in values, a generic lets you pass in types

 * --- */

// ✅ 1. Without Generics — Fixed Types

function echoString(value: string): string {
  return value
}

echoString('Keep moving forward. I can do it, I can do it, I can do it!')
// echoString(123); // Error : Because echoString only works with string

//✅ 2. With Generics — Any Type! - Pass WhichEver type you wish, it is flexible

function echo<T>(value: T): T {
  //Here T is a type variable (placeholder for a type) and takes flexible values

  return value
}

echo('Keep moving') // inferred as string
echo(123) // inferred as number
echo({ x: 3, y: 8 }) // inferred as  { x: number;  y: number; }
echo<boolean>(true) // Annotated: ourselves passed the boolean type to placeholder T
echo<undefined | null>(undefined) // Think like function echo<T> is passed type of T as well echo<undefined | null>(undefined)

// ✅ 3. Generics in Arrays

function arrayFirst<T>(arr: T[]): T {
  return arr[0]
}

arrayFirst<string>(['a', 'b']) // passed properly string as placeholder
arrayFirst(['c', 'e', 'f']) // inferred
arrayFirst<boolean>([true, true, false])
arrayFirst([true, true, false])
arrayFirst<number>([2, 4, 6])

// Think of passing types as parameters --- Until you get a hold of it, pass type in <> while calling the function. For example: arrayFirst<number>([2,4,6])

// ✅ 4. Generics with Objects

function getObjValue<T>(obj: T, key: keyof T) {
  return obj[key]
}

type User = {
  name: string
  age: number
}
const user: User = { name: 'Imran', age: 30 }

console.log(getObjValue<User>(user, 'age'))
console.log(getObjValue(user, 'name'))

// ✅ 5. Generics in Reusable Functions
function wrapInArray<T>(value: T): T[] {
  return [value]
}

console.log(wrapInArray<number>(34))
console.log(wrapInArray<string>('Keep moving forward Imran!'))

// ✅ 6. Generics in Type Aliases
type ApiResponse<T> = {
  data: T
  error: string | null
}

const userResponse: ApiResponse<{ name: string }> = {
  data: { name: 'Imran' },
  error: null
}

const todosResponse: ApiResponse<{ id: number; todo: string }[]> = {
  data: [{ id: 1, todo: 'learn coding' }],
  error: null
}

console.log(userResponse)
console.log(todosResponse)
