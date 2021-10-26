import fetch from "node-fetch";
var a = [];
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


    })
    .catch((error) => console.error("FETCH ERROR:", error));
console.log(a)
export default a;