//function to get the user details
const lookUpUser = ()=>{
    //get the name from the input
    const inputElement = document.getElementById("user_name");
    const inValue = inputElement.value;
    //concatenate the invalue with the url 
    const url = "https://api.github.com/users/" + inValue;
    console.log(url);
    //call the url
    fetch(url)
        .then(response => response.json())
        //get the user information from API
        .then(userInfo => {
            console.log(userInfo);
            //display profile picture
            const userImage = document.createElement("img");
            userImage.width = 200;
            userImage.src = userInfo.avatar_url;
            document.getElementById("image_paragraph").innerHTML = "";
            document.getElementById("image_paragraph").appendChild(userImage);
            //display user info
            //first row
            const trElement1 = document.createElement("tr");
            const tdElement1 = document.createElement("td");
            tdElement1.textContent = "Name";
            const tdElement2 = document.createElement("td");
            tdElement2.textContent = userInfo.name;
            trElement1.appendChild(tdElement1);
            trElement1.appendChild(tdElement2);
            //second row
            const trElement2 = document.createElement("tr");
            const tdElement3 = document.createElement("td");
            tdElement3.textContent = "Blog";
            const tdElement4 = document.createElement("td");
            tdElement4.textContent = userInfo.blog;
            trElement2.appendChild(tdElement3);
            trElement2.appendChild(tdElement4);
            //third row
            const trElement3 = document.createElement("tr");
            const tdElement5 = document.createElement("td");
            tdElement5.textContent = "Created";
            const tdElement6 = document.createElement("td");
            tdElement6.textContent = userInfo.created_at;
            trElement3.appendChild(tdElement5);
            trElement3.appendChild(tdElement6);
            //table Element
            const tableElement = document.createElement("table");
            tableElement.id = "userInfoTable"
            tableElement.appendChild(trElement1);
            tableElement.appendChild(trElement2);
            tableElement.appendChild(trElement3);
            //div element
            document.getElementById("userinfo").innerHTML = "";
            document.getElementById("userinfo").appendChild(tableElement);
        })
        .catch(err =>{
            console.error(err.message);
        });
}

//use event listener to get data from the input on press of button "lookup"
document.getElementById("lookup_user").addEventListener("click",lookUpUser);
        
