// Handle form submission
document.querySelector("form").addEventListener("submit", e => {
    // Cancel default behavior of sending a synchronous POST request
    e.preventDefault();
    // Create a FormData object, passing the form as a parameter
    const formData = new FormData(e.target);

    //display data in table
    //create table element
    const table = document.createElement("table");
    table.id = "formDataTable";

    //create row element for header
    const headerRow = document.createElement("tr");
    //create th element and add value
    const keyElement = document.createElement("th");
    keyElement.textContent = "Key";
    keyElement.id = "heading";

    const valueElement = document.createElement("th");
    valueElement.textContent = "Value";
    valueElement.id = "heading";

    headerRow.appendChild(keyElement);
    headerRow.appendChild(valueElement);
    //creating row elements name,email,payment
    //name row
    const nameRow = document.createElement("tr");

    const nameKeyElement = document.createElement("td");
    nameKeyElement.textContent = "name";

    const nameValueElement = document.createElement("td");
    nameValueElement.textContent = formData.get("name");

    nameRow.appendChild(nameKeyElement);
    nameRow.appendChild(nameValueElement);
    //email row
    const emailRow = document.createElement("tr");

    const emailKeyElement = document.createElement("td");
    emailKeyElement.textContent = "email";

    const emailValueElement = document.createElement("td");
    emailValueElement.textContent = formData.get("email");

    emailRow.appendChild(emailKeyElement);
    emailRow.appendChild(emailValueElement);
    //payment row
    const paymentRow = document.createElement("tr");

    const paymentKeyElement = document.createElement("td");
    paymentKeyElement.textContent = "payment";

    const paymentValueElement = document.createElement("td");
    paymentValueElement.textContent = document.querySelector('input[name="payment"]:checked').value;

    paymentRow.appendChild(paymentKeyElement);
    paymentRow.appendChild(paymentValueElement);
    //promotion row
    const promotionRow = document.createElement("tr");

    const promotionKeyElement = document.createElement("td");
    promotionKeyElement.textContent = "promotion";

    const promotionValueElement = document.createElement("td");
    var promotionValue = formData.get("signup");
    if(promotionValue == null) {
        promotionValue = "off";
    }
    promotionValueElement.textContent = promotionValue;
    
    promotionRow.appendChild(promotionKeyElement);
    promotionRow.appendChild(promotionValueElement);
    //location row
    const locationRow = document.createElement("tr");

    const locationKeyElement = document.createElement("td");
    locationKeyElement.textContent = "location";

    const locationValueElement = document.createElement("td");
    locationValueElement.textContent = formData.get("location");
    
    locationRow.appendChild(locationKeyElement);
    locationRow.appendChild(locationValueElement);
 
    table.appendChild(headerRow);
    table.appendChild(nameRow);
    table.appendChild(emailRow);
    table.appendChild(paymentRow);
    table.appendChild(promotionRow);
    table.appendChild(locationRow);

    const divElement = document.getElementById("table_div");
    divElement.innerHTML = "";
    divElement.appendChild(table);
});