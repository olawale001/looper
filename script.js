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


let numb = document.getElementById('display')
let num = "";
let number = 12;
for(let i = 1; i < 13; i++) {
    let result = number * i
    num  +=`${number} * ${i} = ${result}  <br>`;
}
numb.innerHTML = num

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




















