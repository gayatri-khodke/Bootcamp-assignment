// 1. Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
let a=10;
let b=5;
let sum=a+b;
let dif=a-b;
let product=a*b;
let quotient=a/b;
let modulus=a%b;
console.log(`sum=${sum},different=${dif},product=${product},quotient=${quotient},modulus=${modulus}`);


// 2. Take two numbers and only print the integer part when a is divided by b.
let c=7;
let d=3;
let intpart=parseInt(c/d);
console.log(intpart);


 // 3. Take two numbers a,b and print the exponential power of the first number raised by the second.
let e=5;
let f=2;
let exponential=e**f;
console.log(exponential);


// second approach
console.log(Math.pow(e,f));


// 4. Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.
let g=10;
let h=3;
let decimal=g/h;
console.log(`${decimal}`);


// 5. Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.
let A=80;
let B=60;
let C=76;
let D=87;
let E=91;
let sum1=A+B+C+D+E;
let average=parseInt(sum1/5);
console.log(`Average is ${average}`);


// 6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.
let cost_price=60;
let selling_price=80;
if(cost_price>selling_price){
    let loss=cost_price-selling_price;
    console.log(`loss is ${loss}`);
}
else if (selling_price>cost_price){
    let profit=selling_price-cost_price;
    console.log(`profit is ${profit}`);
}
else if(cost_price===selling_price){
    console.log("No profit No loss");
}


// 7. Take a number and print out the last digit of the number.
let j=567;
let last_digit=j%10;
console.log(`last digit is ${last_digit}`);


// 8. Take a 2 digit number and return the first and last digits.

let k=56;
let last_digit1=k%10;
let first_digit=parseInt(k/10);
console.log(`first digit is ${first_digit} and last digit is ${last_digit1}`);


// 9. Write a JavaScript program to find the largest of three numbers.
let L=6;
let M=4;
let N=9;
let max=0;
if (L>M){
    if(L>N){
        console.log(`max is ${L}`);
    }
    else{
        console.log(`max is ${N}`);
    }
}
else if(M>L){
    if(M>N){
        console.log(`max is ${M}`);
    }
    else{
        console.log(`max is ${N}`)
    }
}

// using inbuilt function
console.log(Math.max(L,M,N));



// 10. Write a JavaScript program to check whether a number is even or odd.
let num=3;
if(num%2===0){
    console.log(`number is ${num}`);
}
else{
    console.log(`number is odd ${num}`);
}



// 11. Write a JavaScript program to check whether a given number is prime or not.
let num1=13;
let p=1;
let count=0;
while(p<=num1){
    if(num1%p===0){
        count++;
    }
    p++;
}
if(count==2 || num1===1){
    console.log(`${num1} is prime`);
}
else{
    console.log(`${num1} is not prime`);
}


// 12. Write a JavaScript program to convert temperature from celsius to fahrenheit and vice versa.
// convert temperature from celsius to fahrenheit

let celsius=20;
let fahr=celsius*9/5;
let fahrenheit=fahr+32;
console.log(fahrenheit);


// convert temperature from  fahrenheit to Celsius //

let fahrenheit1=56;
let cels=fahrenheit1-32;
let celsies=cels*5/9;
console.log(celsies);