import fetch from "node-fetch";


//const fetch = require("node-fetch");
//import fetch from "c:/Users/PrakashMuthusamy/OneDrive - CES Limited/Desktop/VS programs/live-server/node_modules/node-fetch/@types/index";
var a = [];
// var api = [];
// var https = [];
// var auth = [];
// var cors = [];
// var cate = [];
fetch("https://api.publicapis.org/entries") //local.. // or https://www.thecocktaildb.com/api/json/v1/1/random.php
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        a.push(data);
        // var b = a[0];
        // var c = b.entries;
        // for (let i = 0; i <= 30; i++) {
        //     api.push(c[i].API);
        //     https.push(c[i].HTTPS);
        //     auth.push(c[i].Auth);
        //     cors.push(c[i].Cors);
        //     cate.push(c[i].Category);
        // }


    })

.catch((error) => console.error("FETCH ERROR:", error));










// console.log("Second Method")

// const sum1 = async(a1, b1) => {
//     return (a1 + b1);
// }

// const result1 = async() => {
//     console.log(await sum1(10, 20))
//     console.log("end of second method")

// }
// result1()