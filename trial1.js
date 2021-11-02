export default getData = async() => fetch("https://api.publicapis.org/entries")
    .then(response => response.json())