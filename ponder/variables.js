
const PI = 3.14;
let radius = 3;
                 
let area = radius *radius * PI;
console.log(area);

const one = 1;
const two = '2';

let result = one * two;
console.log(result);

//Scope

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
//console.log(student); //does not work, can't access a block variable outside the block
                                          

//random number 0-9
//let randomNum = <ath.floor(Math.random()* 10);
//console.log(randumNum)

//die
//diceRoll1 = Math.ceil(Math.random() * 5);
//diceRoll2 = Math.floor(Math.random() * 6 + 1);