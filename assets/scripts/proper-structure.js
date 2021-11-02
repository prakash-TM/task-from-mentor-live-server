// import fetch from "node-fetch";

// var a = [];
// const ret = async(a) => {
//     fetch("https://api.publicapis.org/entries") //local.. // or https://www.thecocktaildb.com/api/json/v1/1/random.php
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error("NETWORK RESPONSE ERROR");
//             }
//         })
//         .then(data => {
//             a.push(data);

//         })

//     .catch((error) => console.error("FETCH ERROR:", error));

//     return a;
// }

// export const result = async() => {
//     return await ret(a);

// }
// result()


// import fetch from "node-fetch";
// var a = [];
// fetch("https://api.publicapis.org/entries") //local.. // or https://www.thecocktaildb.com/api/json/v1/1/random.php
//     .then((response) => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("NETWORK RESPONSE ERROR");
//         }
//     })
//     .then(data => {
//         a.push(data);
//         console.log(a)
//     })
//     .catch((error) => console.error("FETCH ERROR:", error));

// export default a;

import a from "./async-await.js"
a([]).then((response) => {
    console.log(a);
})



// // api url
// const api_url =
// 	"https://employeedetails.free.beeceptor.com/my/api/path";

// // Defining async function
// async function getapi(url) {

// 	// Storing response
// 	const response = await fetch(url);

// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	console.log(data);
// 	if (response) {
// 		hideloader();
// 	}
// 	show(data);
// }
// // Calling that async function
// getapi(api_url);

// // Function to hide the loader
// function hideloader() {
// 	document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function show(data) {
// 	let tab =
// 		`<tr>
// 		<th>Name</th>
// 		<th>Office</th>
// 		<th>Position</th>
// 		<th>Salary</th>
// 		</tr>`;

// 	// Loop to access all rows
// 	for (let r of data.list) {
// 		tab += `<tr>
// 	<td>${r.name} </td>
// 	<td>${r.office}</td>
// 	<td>${r.position}</td>
// 	<td>${r.salary}</td>		
// </tr>`;
// 	}
// 	// Setting innerHTML as tab variable
// 	document.getElementById("employees").innerHTML = tab;
// }