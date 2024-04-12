//Basoc If else questions
//1)  Write a program that checks if a given number is even or odd.
let num=5;
if(num%2==0){
    console.log(`num is even :-${num}`);
}
else{
    console.log(`num is odd:- ${num}`);
}
console.log(num%2==0 ? "even":"odd");


// 2. Create a function that takes two numbers as parameters and returns the larger one.
function printmax(num1,num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
let maxnum1=printmax(5,10);
console.log(`larger number is:- ${maxnum1}`);



// 3. Write a function that determines if a given year is a leap year.
// if year is divisible by 4 and not divisible by 100 or  divisible by 400 then it is leap year otherwise not leap year
function checkleapYear(year){
    if(year%400==0){
        return `leap year ${year}`;
    }
    else if(year%100==0){
      return `not leap year ${year}`;
    }
    else if(year%4==0){
        return `leap year ${year}`;
    }
    else{
        return `not leap year`;
    }
}
let myyear1=checkleapYear(1040);
console.log(myyear1);

// using arrow function
let checkYear1=(year) =>{return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? `Leap year :- ${year}`: `Not leap year:- ${year}`};
let myyer1 = checkYear1(1040);
console.log(myyer); 


// 4. Implement a program that checks whether a given character is a vowel or consonant.
function checkcharacter(ch){
    let character;
    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
        character='vowel';
    }
    else{
        character='consonent';
    }
    return character;
}
let charactar1=checkcharacter('p');
console.log(`character is :- ${charactar1}`);


let arr1=['a','e','i','o','u','A','E','I','O','U'];
let checkchar1= char => arr1.includes(char) ? 'vowel':'consonent';
console.log(`character is :- ${checkchar1('i')}`);   



// 5. Create a function that takes three numbers as input and returns the largest among them.
function largernumber(...num){
    maxnum=Math.max(...num);
    return maxnum;
}
let k=largernumber(2,43,5);
console.log(`max between three num is :- ${k}`);



// 6. Write a program that checks if a given number is positive, negative, or zero.
function checknumber(num){
    if(num<0){
        console.log('negative');
    }
    else if(num===0){
        console.log('zero');
    }
    else if(num>0){
        console.log("positive");
    }
}
let printnum1=checknumber(0);
console.log(`${num} is :- ${printnum1}`);


// 7. Implement a function that calculates the grade of a student based on their score.
function calculateGrade(score){
    let grade;
    switch(true) {
        case score >= 90:
            grade='A';
            break;
        case score >= 70:
            grade='B';
            break;
        case score >= 40:
            grade='C';
            break;
        default:
            grade= 'D';
    }
    return grade;
}
console.log(`grade is :- ${calculateGrade(75)}`);


// 8. Create a program that determines if a given string is a palindrome.
function palindromeString(str){
    let final=str.split('').reverse().join('');
    if(str===final){
        return 'palindrome';
    }
    else{
        return 'not palindrome';
    }
}
console.log(`string is :- ${palindromeString('nayan')}`);

// without using inbuild method
function palindromeStr(str){
    let p=str.length;
    for(let i=0;i<p;i++){
        if(str[i]!=str[p-1-i]){
            return 'not palindrome';
        }
    }
    return 'palindrome';
}
console.log(`${str} is :- ${palindromeStr('madakm')}`);


// 9. Write a function that checks whether a person is eligible to vote based on their age.
function checkEligiblity(age){
    return age>=18 ? `you are eligible for vote. age is ${age}`: `you are not eligible for vote. age is ${age}`;
}
console.log(checkEligiblity(24));



// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.
// isosceles  : two side are equal
// equilateral : all side are equal 
// scalene  :  all sides are different
// obtuse  :  one angle is greater than 90 deg  
// acute  :   each angle is less than 90 deg
// right : one side is 90 deg

function chechAngle(side1,side2,side3){
    let total=side1+side2+side3;
    if(total==180){
        if(side1==side2==side3){
            angle='equilateral';
        }
        else if(side1==90 || side2==90 || side3==90){
            angle='right';
        }
        else if(side1!==side2 && side2!==side3){
            angle='scalene';
        }
        else if(side1>90 || side2>90 || side3>90){
            angle='obtuse';
        }
        else if(side1<30 && side2<30 && side3<30){
            angle='acute'
        }
    }
    else{
        return `invalid trangle sides`;
    }
    return angle;
}
console.log(`trangle is :- ${chechAngle(44,70,66)}`);