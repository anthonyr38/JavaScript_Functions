console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for(let i = 1; i <= count; i++) {
        if(i % 2 !=0) {
            console.log(i);
        }
    }
}

printOdds(16);
printOdds(42);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${name}, you are old enough to drive!`;
    let belowSixteen = `Sorry ${name} you must wait until you are 16 years old.`;
    if(age < 16) {
        console.log(belowSixteen);
    }else {
        console.log(aboveSixteen);
    }

}

checkAge("Anthony", 42)
checkAge("Daylene", 40)
checkAge("Joey", 14)
checkAge("Samara", 1)


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y) {
    if(x > 0 && y > 0) {
        return 1;
    }else if ( x < 0 && y > 0) {
        return 2;
    }else if (x < 0 && y < 0) {
        return 3;
    }else if (x > 0 && y < 0) {
        return 4;
    }else if ( x === 0 && y === 0) {
        return "Origin";
    }
}

console.log(whichQuadrant (0, 0))
console.log(whichQuadrant (16, 42))
console.log(whichQuadrant (40, -82))
console.log(whichQuadrant (-14, -9))
console.log(whichQuadrant (-1, 23))


