sum (3,4); //This code can be hoisted

function sum(n1, n2){
    console.log(n1 + n2);
}


//add(5,5) //This code cannot be hoisted

let add = function(num1,num2) {
    console.log(num1 + num2);
}

add(5,5)

//addIt(7,8); //Cannot hoist this code

let addIt = (no1, no2) => console.log(no1 + no2);

addIt(7,8)