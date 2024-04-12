// js assignment 1
//* 1) Given length and breadth of a rectangle, return the area of the rectangle. */
function printarea(length,breadth){
    return length*breadth;
}
let area=printarea(20,10);
console.log(` ares is ${area}`);

/* 2) Take a number and print the square of the number. */
function printsquare(num){
    return num*num;
}
let square=printsquare(5);
console.log(`square is ${square}`);


//3)  Take two numbers and only print the integer part when a is divided by b.
let value=24;
let b=5;
let intpart=parseInt(value/b);
console.log(`integer part is:- ${intpart}`);


// 4) Take a number and print out the last digit of the number.
let a=16;
let lastdigit=()=> a%10;
console.log(`last digit is ${lastdigit(a)}`);

//5)  Take a number and find the cube of that number.
let num=4;
let cube=()=> Math.pow(num,3);
console.log(`cube is ${cube(num)}`);


//6)  Take a 3 digit number and print the reverse of that number. Ex - 235 = 532
function printreverse(num){
    let reversenum=0;
    let number=Math.abs(num);
    while(number>1){
     let reminder=number%10;
     reversenum=(reversenum*10)+reminder;
     number=Math.floor(number/10);
    }
    if(num<0){
        return `-${reversenum}`;
    }
    else{
        return reversenum;
    }
}
console.log(`reverse number is ${printreverse(-279)}`);



//7)  Take a number and print out the first digit of the number. Ex - 145 = 1, 789 = 7
function firstdigit(num){
        if(num<10){
            return num;
        }
        else if(num<99){
            first=parseInt(num/10);
            return first;
        }
        else{
            first=parseInt(num/100);
            return first;
        }       
}
console.log(`first digit is ${firstdigit(897)}`);


//8) Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7
function sumofdigit(num){
    let last=num%10;
    while(num>=10){
        num=Math.floor(num/10);
        first=num;
    }
    return last+first;
}
console.log(`sum of first and last digit ${sumofdigit(51)}`);


// 9) Take two numbers and swap them. Ex - a = 10, b=5; =&gt; a=5, b=10;
let A=10;
let B=5;
A=A+B;
B=A-B;
aA=A-B;
console.log(`swap two number A =${A} B= ${B}`);

// using third variable
// let c=A;
// A=B;
// B=c;
// console.log(`A = ${A} B= ${B}`);

