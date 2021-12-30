/*
let js = 'amazing';
// if (js === 'amazing') alert('Javascript is FUN!');
console.log(40 + 8 + 23 - 10);
console.log('Pranav');
let firstName = 'Sakshi';
console.log(firstName);

//In JS usually people use camelCase

console.log(true);
let javascriptIsFun = true;
console.log(typeof javascriptIsFun)
console.log(typeof false);
// console.log(typeof 23.56);
console.log(typeof 35);
console.log(typeof 'Pranav');
console.log(typeof `Pranav`)

javascriptIsFun = 'Yes';
console.log(typeof javascriptIsFun)
let chicken;
console.log(chicken)
console.log(typeof chicken);
chicken = 'Tandoori';
console.log(typeof chicken);
console.log(typeof null);



//TYPES OF VARIABLES -
// 1 - LET
// 2 - CONST
// 3 - VAR
//  By default use CONST. just use let when you know you have to change the value of the variable. this is because its good to have least variable mutations as possible.

// const now = 2021
// const agePranav = now - 1996;

// const ageJac = now - 1995;
// console.log(agePranav, ageJac)

// console.log(agePranav > 69);

// const isAbove18 = agePranav >= 19;


const firstName = `Pranav`;
const birthYear = 1996;
const job = `developer`;
const currentYear = 2021;

const Pranav = `Hi my name is ${firstName}, I am a ${job} born in ${currentYear - birthYear}`

console.log(Pranav);

console.log('This \n\
 is \n\
    new ');

console.log(`String
literally
same`)



const saraAge = 15;
if (saraAge > 17) {
    console.log(`Sarah is old enough to drive 👽`)
} else {
    const yearsLeft = 18 - saraAge;
    console.log(`Sara have to wait for ${yearsLeft} years 🐒`)
}


// const marksWeight = 78;
// const marksHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

const marksWeight = 95;
const marksHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = marksWeight / marksHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

console.log(markBMI, johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI)

if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI.toFixed(2)}) is higher than John's(${johnBMI})!`)
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`)
}



//Type Conversion
const inputYear = "1996"
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18, inputYear + 18)
console.log(Number('Jonas'))

const inputNum = 19
console.log(inputNum, String(inputNum))
console.log(String(inputNum))

//Type Coercion
console.log('I am ' + 23 + ' years old')

console.log('10' + '13' + 10) //No coercion
console.log('23' - '13' - 3) // - operator triggers coercion
console.log('23' * '2') // * operation triggers coercion. u get the idea

//Example
let n = '1' + 1;
n--;
console.log(n)

let x = '9' + 1 + 5 + 6
console.log(x);

//JS has 5 falsy values - 0, '', undefined, null, NaN
//Falsy means all of the above values will be converted to false when we attempt to convert them to boolean. They are not false but will be converted to false when converted to boolean

//Truthy values - any number that is not 0 or any string that is not empty will be converted to true in boolean hence called truthy values.



console.log(Boolean(0));
console.log(Boolean(undefined))
console.log(Boolean(25));
console.log(Boolean('Pranav'));
console.log(Boolean(''));
console.log(Boolean({}))

const lunch = 0;
if (lunch) { //Since lunch = 0 and 0 is converted to false in boolean.
    console.log('EAT IT!!!!!')
} else {
    console.log('Make something!')
}

let height;
if (height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is UNDEFINED')
}



//Equality Operators
// ===, == , !, !=, !==

const age = 18;
if (age === 18) console.log('Congratulations u just became an adult')
console.log('18' === 18, 18 == '18')

///Prompt function
const favorite = prompt("Who's your favorite person?")
console.log(favorite);

const favNum = Number(prompt(`What's your favorite number ? `))
if (favNum === 69) {
    console.log(`Yep, its the best `)
}

const goodVision = true;
const drivingLicense = false;
const isTired = false;

console.log(goodVision || drivingLicense || isTired)
// console.log(goodVision && drivingLicense)
// console.log(goodVision && !drivingLicense)



if (goodVision && drivingLicense && !isTired) {
    console.log('Sara is able to drive')
} else {
    console.log('Someone else should drive')
}



// const t1Dolph = [96, 108, 89];
// const t2Koala = [88, 91, 110];

// const t1Dolph = [97, 112, 101];
// const t2Koala = [109, 95, 123];

const t1Dolph = [97, 112, 101];
const t2Koala = [109, 95, 106];

const avgT1 = (t1Dolph[0] + t1Dolph[1] + t1Dolph[2]) / t1Dolph.length;
const avgT2 = (t2Koala[0] + t2Koala[1] + t2Koala[2]) / t2Koala.length;

console.log(avgT1, avgT2);

if (avgT1 > avgT2 && avgT1 > 99) {
    console.log(`Team dolphin wins with the score of ${avgT1} against ${avgT2} of Koalas`)
}
else if (avgT1 > avgT2 && avgT1 < 100) {
    console.log(`Team dolphin scores ${avgT1} against ${avgT2} of Koalas. No Result`)
}
else if (avgT2 > avgT1 && avgT2 > 99) {
    console.log(`Team Koala wins with the score of ${avgT2} against ${avgT1} of Dolphins`)
}
else if (avgT2 > avgT1 && avgT2 < 100) {
    console.log(`Team Koala scores ${avgT2} against ${avgT1} of Dolphins.No Result`)
} else if (avgT1 === avgT2 && avgT2 > 99) {
    console.log(`Its a tie. Both scored ${avgT2}`)
} else {
    console.log(`NO RESULT. Both scored ${avgT2}`)
}



const day = 'cat';

switch (day) {
    case 'monday':
        console.log('NOOOOOOOOO!!!!! WHYYYYYYY!!!')
        break;
    case 'tuesday':
        console.log('OK 4 more ')
        break;
    case 'wednesday':
        console.log('It is wednesdayyyyyyy!!')
        break;
    case 'thursday':
        console.log('Just two more Yayyyyy!')
        break;
    case 'friday':
        console.log('FRIDAYYYYYY!!!')
        break;
    case 'saturday':
        console.log('This is the best!!!')
        break;
    case 'sunday':
        console.log('Yayyy!!!!! I ll roam today!!!')
        console.log('Why is tomorrow Monday. NOOO 😭')
        break;
    default:
        console.log('Thats not a day!! Is it ? ?  ? ')
}



//TERNARY OPERATOR 
const age = 25;
age > 17 ? age <45 ? console.log('You can drink wine') : console.log('You probably should not') : console.log('You are too young') 

const drink = age>17 ? age<45 ? 'wine' : 'beer' : 'juice'
console.log(drink);

console.log(`I like to drink ${age > 17 ? age < 45 ? 'wine' : 'beer' : 'juice'}`)



const bill = 275;
// const bill = 40;
// const bill = 430;
const tip = bill < 51 || bill > 299 ? bill * 0.2 : bill * 0.15;
const total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value is 
 ${total}`);

const tipsy = bill > 49 && bill < 299 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tipsy} and the total value is 
 ${bill + tipsy}`);
*/
