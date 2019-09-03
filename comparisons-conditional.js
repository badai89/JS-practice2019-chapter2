// JS 
console.warn()
console.log()
console.info()

alert("test alert")

// JS base data
// JS string number
const name1 = 'female' 
const name2 = 'male'
const name3 = 00
const name4 = 01

// JS object
const landrover = {
    name:'landy',
    spek: '4x4',
    id: 2019
}


//still learn why not work it
// console.log(name1)
// console.log(name1.name2)
// console.log(name1 + name3)
// console.log(name2 + name4)

// console.log(landrover)
// console.log('hi need car' landrover)
// console.log('hi test java basic base object'${landrover.name)

// for learn why not work it
// exercise repl.it
// let bodyWeight = 10;
// let bodyHeight = 170;
// write your code below
// if (bodyWeight < 18.5){
//   console.log('Berat badan Anda kurang')
// }

// 
let star = '*';

// write your code below this line

for (let star = '*'; star < 4 ; starr++){
  console.log(star)
}   

let star='*'

do {
    console.log(star)
}while(star)

let start = '*'

for (let start = '*'; start < '*'; start++){
  console.log(start)
}
do {console.log(start)
  start++
}while (start < '*****')

let bodyWeight = 70;
let bodyHeight = 170;
let BMI = 170 / 70;

// write your code below
console.log(BMI)

// 
if (BMI < 18.5){
  console.log('Berat Badan Anda Kurang')
}else if (BMI >= 18.5 && BMI <= 24.9){
  console.log('Berat Badan Anda Ideal')
}else if (BMI >= 25.0 && BMI <= 29.9){
  console.log('Berat Badan Anda Berlebih')
}else if (BMI >= 30.0 && 39.9){
  console.log('Berat Badan Anda Sangat Berlebih')
}else if (BMI > 39.9){
  console.log('Anda Obesitas')
}
  

// 
let star = '';

// write your code below this line


for ( i = 0; i <= 4 ; i++) {
  // shows 0, then 1, then 2
  star = '*' + star

}
console.log(star)  


// 
let start = '*';

// write your code below this line

for (start = 1; start <= 5 ; start++) {
  // shows 0, then 1, then 2
  console.log('*')
}


