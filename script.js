// let age = document.getElementById('result')
// let dis = document.getElementById('display')
// function check() {


//    switch (true) {
//        case (age.value < 18):
//             document.getElementById('display').innerHTML = "You are not eligible to vote";
//             break;
//        case (age.value > 18):
//             document.getElementById('display').innerHTML = "You are eligible to vote";
//             break; 
//        default:
//             document.getElementById('display').innerHTML = "Please try agian";
//             break;
//     }        
// }


// let color = document.getElementById('result')
// let display = document.getElementById('display')
// function check() {

    
//    switch (color) {
//        case (color.value == 'green'):
//             document.getElementById('display').innerHTML = "Not correct";
//             break;
//        case (color.value == 'orangered'):
//             document.getElementById('display').innerHTML = "Correct";
//             break; 
//        default:
//             document.getElementById('display').innerHTML = "Please try agian";
//             break;
//     }        
// }


// let display = document.getElementById('display')
// let carshop = ["Toyota", "Camry", "Audi", "Benz", "Golf","Vibe"]
// let cars = "";
// for(let i = 0; i < carshop.length; i++){
//     cars += carshop[i] + " <br>"
// }
// display.innerHTML = cars;


// let num = "";
// for(let m = 1; m < 100; m++) {
//     if(m % 2 == 0) {
//         num += "Even Number " + m + "<br>"
//     }else{
//         num += "Odd Number " + m + "<br>"
//     }
// }
// document.getElementById('display').innerHTML = num;

//table 1
let numb = document.getElementById('display')
let num = "";
let number = 1;
for(let i = 1; i < 13; i++) {
    let result = number * i
    num  +=`${number} * ${i} = ${result}  <br>`;
}
numb.innerHTML = num

//Table 2
let numb1 = document.getElementById('display1')
let nump = "";
let numbers = 2;
for(let i = 1; i < 13; i++) {
    let result = numbers * i
    nump  +=`${numbers} * ${i} = ${result}  <br>`;
}
numb1.innerHTML = nump

//Table3

let numb2 = document.getElementById('display2')
let numi = "";
let numbery = 3;
for(let i = 1; i < 13; i++) {
    let result = numbery * i
    numi  +=`${numbery} * ${i} = ${result}  <br>`;
}
numb2.innerHTML = numi


//Table4

let numb3 = document.getElementById('display3')
let nume = "";
let numberl = 4;
for(let i = 1; i < 13; i++) {
    let result = numberl * i
    nume  +=`${numberl} * ${i} = ${result}  <br>`;
}
numb3.innerHTML = nume

//Table5

let numb4 = document.getElementById('display4')
let numo = "";
let numberi = 5;
for(let i = 1; i < 13; i++) {
    let result = numberi * i
    numo  +=`${numberi} * ${i} = ${result}  <br>`;
}
numb4.innerHTML = numo


// for(let b= 0; b< 200; b++) {
//     if(b% 2 == 0)
//     continue
// num += b + "<br>"
// }
// document.getElementById('display').innerHTML = num;












// let display = document.getElementById('display') 
// let num = "";
// for(let i = 0; i < 20; i++) {
//     num += "This is number " + i + "<br>"
// }
// display.innerHTML = num;




















