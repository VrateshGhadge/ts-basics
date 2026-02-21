// let x: number = 1;

// console.log(x);


// function greet(firstName: string) {
//     console.log("Hello" + firstName)
// }

// greet("AJ");


//type infrernce
// function sum(a: number, b: number){
//     return a + b;
// }

// const value = sum(2,5);
// console.log(value)



// interface User {
//     firstName: string,
//     lastName: string,
//     age: number,
//     email?: string
// }
// function isLegal(user: User){
//     if(user.age > 18){
//         return true
//     } else{
//         return false
//     }
// }

// function greet(user: User){
//     console.log("hi there" + user.firstName)
// }

// isLegal({
//     firstName: "Ana",
//     lastName: "nan",
//     age: 20
// })

// -----------------------------------------

// ENUMS

// Let’s say you have a game where you have to perform an action based on weather the user 
// has pressed the up arrow key, down arrow key, left arrow key or right arrow key.


//// function doSomething(keyPressed) {
//// 	// do something.
//// }


// What should the type of keyPressed be?
// Should it be a string? (UP , DOWN , LEFT, RIGHT) ?
// Should it be numbers? (1, 2, 3, 4) ?

// The best thing to use in such a case is an enum.


enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Up)
doSomething(Direction.Right)