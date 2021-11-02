/**
 * this file is given the example of fetching a from links. this is not used for the other purpose. only contains the example
 */

// fetch("https://api.publicapis.org/entries") //local.. // or https://www.thecocktaildb.com/api/json/v1/1/random.php
//     .then((response) => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("NETWORK RESPONSE ERROR");
//         }
//     })
//     .then(a => {
//         console.log(a);

//     })
//     .catch((error) => console.error("FETCH ERROR:", error));

/**
 * converting json objet(a) to table
 */

import a from "./json.js";

document.getElementById("test").innerHTML = a;