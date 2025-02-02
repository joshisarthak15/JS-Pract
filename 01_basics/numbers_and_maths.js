const marks = 100

//console.log(marks);

const anotherMarks = new Number(100)

//console.log(anotherMarks);
//console.log(anotherMarks.toString().length);
//console.log(anotherMarks.toFixed(1));

const num = 123.890

//console.log(num.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

// ---------------------------MATHS---------------------------------

// console.log(Math);
// console.log(Math.abs(-4));

// console.log(Math.round(4.6));

// console.log(Math.ceil(4.2));
// console.log((Math.floor(4.9)));

console.log(Math.random());// always gives value between 0 and 1.
console.log((Math.random()*10)+1);// we *10 to shift deciaml and also add 1 to start the range from 1 

// now to specifically get values between specified range

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min + 1)) + min);


