// Function Overloading: Function with same name but having different parameter types and return type (With different signature)

/** 1) 🎯 Use case: A function that returns a user by ID (number) or by username (string), So the function actually returns string type */

// Step 1: Define overload signatures
function getUser(userID: number): string
function getUser(username: string): string

// Step 2: Actual function implementation
function getUser(param: number | string): string {
  if (param === 'number') {
    return `User with ID ${param}`
  } else {
    return `User with username ${param}`
  }
}

// Step 3: Use it
getUser(2345) // // User with ID: 101
getUser('immiwhite')

type Coordinate = {
  x: number
  y: number
}
function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
  return {
    x,
    y
  }
}

parseCoordinateFromNumbers(3, 5)

// parse Coordinates from object

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj
  }
}

parseCoordinateFromObject({ x: 34, y: 22 })
