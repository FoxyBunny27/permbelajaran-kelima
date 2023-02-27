//variabel
number1 = 1; //rekursif, bisa diinisialisasi sebelum di deklarasi
let number2 = 20; //bisa diubah nilai
const number3 = 20; //tidak bisa diubah nilai

var number1
console.log(number1)

number1 = 20
number2 = 30
//number3 = 30

console.log(number1)
//console.log(number2)

//tipe data
let x = true; //undefined
console.log(typeof x);
let number = 10; //number
console.log(typeof number);
let consoletext = "hello"; //
console.log(typeof text);
let y = true; //boolean
console.log(typeof y);
let data = null; //object
console.log(typeof data)
const car = {
    color: "red",
    price: 10000000
};

const arr = [1, 4, 3, 4, 5];
console.log(arr);
console.log(arr[0])

for(let i = 0; i < arr.length; i++)
    {console.log(arr[i])
    }

const text1 = "hello";
const text2 = "hello";    
console.log(number2 == number3);
console.log(number2 == number3);
console.log(number2 > number3);
console.log(number2 >= number3);
console.log(number2 < number3);
console.log(number2 <= number3);
console.log(text1 === text2);

const aString = "10"
const aNumber = 10;
console.log(aString === aNumber);

console.log(number2 > 25 && number3 < 25);
console.log(number2 > 25 || number3 < 25);

let language = "English"

if (language === "English"){
    console.log("English");
} else if (language === "Bahasa Indonesia"){
    console.log("Bahasa Indonesia");
} else{
    console.log("Deutsch");
}

function greetings(name) {
    console.log('hello ${name}');
}

greetings("Axel");