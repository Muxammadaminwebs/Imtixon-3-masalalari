"use strict"
// misol-1====================
// const array = ['a', 'a', 'a', 'a', 'a', 1, 1, 1, 1, 3, 3, 5, 5, 5, 5, 7, 7, ]
// let arr = []

// // for (let i = 0; i < array.length; i++){
   
// // }
//  array.filter((item) => {
//      if (item == item) {
//          console.log(item);
//      }
//  })
//  misol-2 ======================
// let ason=+prompt("asonni kiriting")
// let bson=+prompt("bson");
// let arr=[];
// for(let i=ason; i<=bson; i++){
// arr.push(i)
// }
// console.log(arr);

// misol3 ===================
// let a = +prompt("son1");
// let b = +prompt("son2");
// let arr = [];
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
// for (let i = 0; i < array.length; i++) {
//   if (a === i) { continue;
//   } else if (b === i) { continue;
//   } else {
    
//   }
//   console.log(array[i]);
// }


// misol -4========================
// let array = [{
//         isname: "Muxammad",
//         age: 21,
//     job: "Biznesman",
//         hobby: "swiming"
//     },
//     {
//         isname: "Sharapat",
//         age: 18,
//         job: "Raqqosa",
//         hobby: "Playing ping-ping"
//     },
//     {
//         isname: "Toxtasin",
//         age: "25",
//         job: "taksist",
//         hobby:"Playing footbal"
//     },
// ];
// let arr = [ ]
// array.forEach((e) => {
//     for (let key in e) { arr.push(e[key]) }});
// console.log(arr);

// misol-5===========
let arr = ['name', 'John', 'age', 27, 'isMArried', false, 'hobby', ['sleep', 'dancing']];
let bb={};
for(let i=0; i<arr.length; i+=2){
    console.log(i);
    bb[`${arr[i]}`] = arr[i + 1];
}
console.log(bb);