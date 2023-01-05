// ASSESSMENT 3: Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// declare a function named fibFunc that takes in a number and outputs an array of numbers equal in length to the value of the input containg the numbers of the Fibonacci sequence.
// input: number
// output: array of numbers equal in length to the value of the input
// process: use a for loop to initialize the fibonacci sequence and then push the value of the previous two indexes and use .push to combine the values.

// a) Create a test with expect statements for each of the variables provided.



const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibFunc", () => {
  it("returns the numbers of the fibbonacci sequence in an array", () => {
    expect(fibFunc(fibLength1)).toEqual([1,1,2,3,5,8])
    expect(fibFunc(fibLength2)).toEqual([1,1,2,3,5,8,13,21,34,55])
  
  })
})

// // good test 
// //  ReferenceError: fibFunc is not defined

// // b) Create the function that makes the test pass.

const fibFunc = (num) => {
  let fibNumbers = [1,1]
  for (let i = 2; i < num; i++){
    fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2])
  }
  return fibNumbers
}
// test pass

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// declare a function named weeklyMinutes that takes in an object and uses the built in method .values() to turn it into an array, then use .sort to order the array.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]


describe("weeklyMinutes", () => {
  it("returns an array of the values sortered from least to greatest", () => {
  expect(weeklyMinutes(studyMinutesWeek1)).toEqual([15,15,20,30,30,60,90]),
  expect(weeklyMinutes(studyMinutesWeek2)).toEqual[(10,15,20,45,60,65,100)]
  })
})

// ReferenceError: weeklyMinutes is not defined
// good error, function is not defined yet.
// b) Create the function that makes the test pass.

const weeklyMinutes = (obj) => {
  let orderedMinutes = Object.values(obj).sort((a,b) => a - b)
  return orderedMinutes
}

// test pass
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// declare a function named sumAccount that takes in an array and returns an array of the accumulating sum, or an empty array should a empty array be input. 
// input: array
// output: array with the accumulating sum
// process: declare a new variable with a base value of 0, and then use .map to create a new array of the accumulating sum of the array input, or an empty array should an empty array be input. 
const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe("sumAccount", () => {
  it("input in an array and returns an array of the accumulating sum, or an empty array should an empty array be provided", () => {
    expect(sumAccount(accountTransactions1)).toEqual([100,83,60,51])
    expect(sumAccount(accountTransactions2)).toEqual([250,161,261,165])
    expect(sumAccount(accountTransactions3)).toEqual([])
  })
})

// ReferenceError: newAccount is not defined
// good test, function is not yet created.
// 


// b) Create the function that makes the test pass.

const sumAccount = (arr) => {
  let newAccount = 0
  return arr.map((value) => {
    newAccount = newAccount + value
    return newAccount
  })
}


// test passed
// Tests:       3 passed, 3 total
