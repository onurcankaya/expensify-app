const add = (a, b) => a + b

const generateGreeting = name => `hey ${name}!`

test('should add two numbers', () => {
  const result = add(3, 4)
  expect(result).toBe(7)

  // if (result !== 7) {
  //   throw new Error(`You added 3 and 4, the result was ${result}, expected 7.`)
  // }
})

test('should print greeting', () => {
  const greeting = generateGreeting('Onur')
  expect(greeting).toBe(`hey Onur!`)
})
