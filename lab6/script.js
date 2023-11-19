let url = new URL("https://randomuser.me/api");
url.searchParams.append("results", 5);

const button = document.getElementById("info");
button.addEventListener("click", getInfo, false);

async function getInfo() {
    const response = await fetch(url);
    if(!response.ok) {
        alert(
            'Network request for "' +
              product.name +
              '" failed with response ' +
              response.status +
              ": " +
              response.statusText,
          );     
    } else {
        let data = await response.json();
        console.log(data);
        displayUsers(data.results);
    }
}


function displayUsers(persons) {
    let parent = document.getElementById("persons");
    parent.innerHTML = "";

    for(let i = 0; i < persons.length; i++){
        let person = document.createElement("div");
        person.className = "person";
    
        let photo = document.createElement("img");
        photo.src = persons[i].picture.large;
        person.appendChild(photo);

        let country = document.createElement("p");
        country.innerHTML = "<strong>Country: </strong>" + persons[i].location.country;
        person.appendChild(country);

        let city = document.createElement("p");
        city.innerHTML = "<strong>City: </strong>" + persons[i].location.city;
        person.appendChild(city);

        let postcode = document.createElement("p");
        postcode.innerHTML = "<strong>Postal code: </strong>" + persons[i].location.postcode;
        person.appendChild(postcode);

        let email = document.createElement("p");
        email.innerHTML = "<strong>Email: </strong>" + persons[i].email;
        person.appendChild(email);

        parent.appendChild(person);
    }
    document.getElementsByTagName("body")[0].appendChild(parent);
}