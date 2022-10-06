// function main(start, end, x) {
//     let counter = 0;
//     let startChar = start.charCodeAt() //97
//     let endChar = end.charCodeAt() // 99
//     x = x.charCodeAt() //98
//     for (let l1 = startChar; l1 <= endChar; l1++) {

//         for (let l2 = startChar; l2 <= endChar; l2++) {

//             for (let l3 = startChar; l3 <= endChar; l3++) {
//                 if( l1 !==x && l2 !== x && l3 !==x) {

//                     let output = String.fromCharCode(l1) + String.fromCharCode(l2) + String.fromCharCode(l3)
//                     console.log(output)
//                     counter++
//                 }
//             }
//         }
//     }
//     console.log(counter)
// }
// main('a', 'c', 'b')
let word = "Hello world";
console.log(word.charCodeAt(6))
// word.charCodeAt(6)++
// console.log(word.charCodeAt(6))

// str = String("ABC");
// for(let i=0; i<str.length(); i++)
// {
//   System.out.println(str.charAt(i));
// }
// //OUTPUT
// //A
// //B
// //C

// let text = "Hello World!";
// let length = text.length;