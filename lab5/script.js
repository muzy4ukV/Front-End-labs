function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

(function createTable() {
    let table = document.querySelector("div#table > table");
    let counter = 1;
    for(let i = 0; i < 6; i++){
        row = document.createElement("tr");
        for(let j = 0; j < 6; j++){
            elem = document.createElement("th");
            elem.innerHTML = counter;
            row.appendChild(elem);
            counter++;
        }
        table.appendChild(row);
    }
})();


//Taks 1

const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", function(event) {
    let flag = false;
    event.preventDefault();
    // Validate PІБ (user_name)
    if (!/^[А-ЯІЇЄ][а-яіїє']+ [А-ЯІЇЄ]\. [А-ЯІЇЄ]\.$/.test(form.elements.user_name.value)) {
        alert('ПІБ повинно бути у форматі "Прізвище І. Б."');
        flag = true;
    } 

    // Validate Номер телефону (phone_number)
    if (!/^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(form.elements.phone_number.value)) {
        alert('Номер телефону повинен бути у форматі "(XXX)-XXX-XX-XX"');
        flag = true;
    }

    // Validate ID-card (card_number)
    if (!/^[А-ЯІЇЄ]{2}\s№\d{6}/.test(form.elements.card_number.value)) {
        alert('ID-card повинен задватися у фомраті "ХХ №ХХХХХХ"');
        flag = true;
    }


    if(!/^[А-ЯІЇЄ]{2,4}$/.test(form.elements.faculty.value) && form.elements.faculty.value){
        alert("Назву факультету вводити ЛИШЕ великими укр літерами");
        flag = true;
    }

    const minimum_date = new Date();
    minimum_date.setFullYear(minimum_date.getFullYear() - 18);
    if(new Date(form.elements.user_birthday.value) > minimum_date && form.elements.user_birthday.value) {
        alert("Ви повинні бути повнолітнім");
        flag = true;
    }

    if(!flag) {
        updateData();
    }

});


function updateData() {
    document.getElementById("name").innerHTML = form.elements.user_name.value;
    document.getElementById("phone").innerHTML = form.elements.phone_number.value;
    document.getElementById("card").innerHTML = form.elements.card_number.value;
    document.getElementById("fact").innerHTML = form.elements.user_faculty.value;
    document.getElementById("date").innerHTML = form.elements.user_birthday.value;
}


// Task 2

const myCell = document.querySelector("div#table > table").rows[0].cells[2];

let pickedColor = null;

window.addEventListener("load", colorPicker, false);

function colorPicker() {
    pickedColor = getRandomColor();
    input = document.getElementById("colorPicker"); 
    input.value = pickedColor;
    input.addEventListener("input", updateColor, false);
}

function updateColor(event) {
    pickedColor = event.target.value;
}

myCell.onmouseover = function () {
    myCell.style.backgroundColor = getRandomColor();
};

myCell.addEventListener("click", (event) => {
    event.target.style.backgroundColor = pickedColor;
});

myCell.addEventListener("dblclick", function() {
    let table = document.querySelector("div#table > table");
    for(let i = 0; i < 6; i++) {
        table.rows[i].cells[i].style.backgroundColor = pickedColor;
    }
});


