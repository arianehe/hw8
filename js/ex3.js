// Create an object
const countries =
{
    name: "Lalitha",
    countries: [
        {
            name: "India",
            year: 2020
        },
        {
            name: "UK",
            year: 2020
        },
        {
            name: "USA",
            year: 2020
        }
    ]
};
// Send this array as JSON data to the server
fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(countries)
})
    .then(response => response.text())
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err.message);
    });