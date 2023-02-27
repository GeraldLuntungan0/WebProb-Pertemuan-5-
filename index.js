//variabel
//rekursif, yang berarti variabel bisa diinisialisasi

//nilai bisa diubah
let number2 = 20;

//tidak bisa diubah nilainya
const number3 = 20;

var number1;
number2 = 30;
// number3 = 30;

console.log(number1);
console.log(number2);
console.log(number3);

//tipe data
//tipe data undefined, yang memungkinkan munculnya bug
let x
console.log(typeof x);

let number = 10;
console.log(typeof number);

//strings
let text = "hello";
console.log(typeof text);

let y = true;
console.log(typeof y);

//null
let data = null;
console.log(typeof data);

const car = {
    color : "red",
    price : 1000000,
};

//array
const arr = [1, 2, 3, 4, 5]
console.log(arr);
console.log(arr [0]);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const text1 = "Hello";
const text2 = "Hello";
console.log(number2 == number3);
console.log(number2 == number3);
console.log(number2 > number3);
console.log(number2 >= number3);
console.log(number2 < number3);
console.log(number2 <= number3);
console.log(text1 == text2);


const aString = "10";
const aNumber = 10;
console.log(aString === aNumber);


console.log(number2 > 25 && number3 < 25);
console.log(number2 > 25 || number3 < 25);


let language = "Bahasa Indonesia";

if(language === "English"){
    console.log("English");
} else if(language === "Bahasa Indonesia"){
    console.log("Bahasa Indonesia");
} else {
    console.log("Devtsch");
}


function greetings(name){
    console.log('Hello $[name]');
}


greetings("Gerald");