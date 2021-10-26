fetch("https://api.publicapis.org/entries") //local.. // or https://www.thecocktaildb.com/api/json/v1/1/random.php
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);

    })
    .catch((error) => console.error("FETCH ERROR:", error));