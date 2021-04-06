//fetching the data
fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
    .then(response => response.json())
    .then(paintings => {
        const tableElement = document.getElementById("paintings");
        paintings.forEach(painting => {
            
            const trElement = document.createElement("tr");
            //first row
            const tdElement1 = document.createElement("td");
            tdElement1.textContent = painting.name;
            //second row
            const tdElement2 = document.createElement("td");
            tdElement2.textContent = painting.year;
            //third row
            const tdElement3 = document.createElement("td");
            tdElement3.textContent = painting.artist;
            //append the tdElement into tr
            trElement.appendChild(tdElement1);
            trElement.appendChild(tdElement2);
            trElement.appendChild(tdElement3);
            //append trElement into table
            tableElement.appendChild(trElement);
          });
    }
    )
    .catch(err =>{
        console.error(err.message);
    });