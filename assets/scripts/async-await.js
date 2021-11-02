// import fetch from "node-fetch";
// var a = [];
// const ret = async(a) => {

//         return (fetch("https://api.publicapis.org/entries") //local.. // or https://www.thecocktaildb.com/api/json/v1/1/random.php
//             .then((response) => {
//                 if (response.ok) {
//                     return response.json();
//                 } else {
//                     throw new Error("NETWORK RESPONSE ERROR");
//                 }
//             })
//             .then(data => {
//                 a.push(data);
//             })
//             .catch((error) => console.error("FETCH ERROR:", error)));

//     }
//     // const out = async() => {
//     //     const response = await ret(a);


// // }
// // out();

// export default ret;


import { table1Function } from "./table.js";
table1Function();