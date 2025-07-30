// Revisit Generics:

/** ---
 Generic: A generic is like a placeholder for a type -- you don't know yet what the type will be, so you leave it flexible

 - Just like a function parameter lets you pass in values, a generic lets you pass in types

 * --- */

//  1. Without Generics - Fixed Type

function echoString(value: string): string {
  return value
}

echoString('Keep moving forward. I can do it, I can do it, I can do it!')
// echoString(123); // Error : Because echoString only works with string

// 2. With Generic - Pass WhichEver type you wish, it is flexible

function echo<T>(value: T): T {
  //Here T is a type variable (placeholder for a type) and takes flexible values

  return value
}

echo('Keep moving') // inferred as string
echo(123) // inferred as number
echo({ x: 3, y: 8 }) // inferred as  { x: number;  y: number; }
echo<boolean>(true) // Annotated: ourselves passed the boolean type to placeholder T
echo<undefined | null>(undefined) // Think like function echo<T> is passed type of T as well echo<undefined | null>(undefined)
