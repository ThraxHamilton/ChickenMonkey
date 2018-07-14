console.log('hello');

// Only show even numbers
const numbers = [100]


for (let i = 0; i < 100; i++) {
    const currentNumber = [i]
    console.log(currentNumber) // Only 2, 4, 6 will appear
    

    // Take the current number, divide by 2, and check if the remainder is 0
    if (currentNumber % 5 === 0) {
        console.log('chicken')
    }

}
