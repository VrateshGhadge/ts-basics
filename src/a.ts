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

function isLegal(age: number){
    if(age > 18){
        return true
    } else{
        return false
    }
}

let x = isLegal(18)
console.log(x)