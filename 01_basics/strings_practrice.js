const name = "sarthak"
const myrepo = 50

//console.log(name + myrepo + "pika") bad practice

console.log(`my name is ${name} and i have ${myrepo} repos`);

const gameName = new String("Sarthak-sj-com")

console.log(gameName[0]);

console.log(gameName.slice(0,4));

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);


const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));