// Task 1

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColorById(elementId) {
    let element = document.getElementById(elementId);
    element.style.backgroundColor = getRandomColor();
    element.style.color = getRandomColor();
}

const hobbyElement = document.querySelector("p#hobby");

hobbyElement.addEventListener('click', (event) => {
    hobbyElement.style.backgroundColor = getRandomColor();
    hobbyElement.style.color = getRandomColor();
});

// Task 2

const block = document.getElementById('photos');

function createImage() {
    let photoElem = document.createElement("img");
    photoElem.src="lviv.jpg";
    photoElem.alt="Фото Львову";
    photoElem.width="800";
    photoElem.height="450";
    return photoElem;
}

function addImage() {
    block.appendChild(createImage());
    block.appendChild(document.createElement("br"));
}

function removeImage() {
    if(block.childNodes.length === 0){
        alert('Немає фото для видалення!');
    } else {
        block.removeChild(block.lastChild);
        block.removeChild(block.lastChild);
    }
}

const allImage = block.getElementsByTagName("img");

function zoomInImage() {
    if(block.childNodes.length === 0){
        alert('Немає фото для збільшення!');
    } else {
        let image = allImage[allImage.length-1];
        let originalWidth = image.width;
        let originalHeight = image.height;
        let scale = 1.25;
        image.style.width = originalWidth * scale + 'px';
        image.style.height = originalHeight * scale + 'px';
    }

}

function zoomOutImage() {
    if(block.childNodes.length === 0){
        alert('Немає фото для зменшення!');
    } else {
        let image = allImage[allImage.length-1];
        let newWidth = image.width / 1.25;
        let newHeight = image.height / 1.25;

        image.style.width = newWidth + 'px';
        image.style.height = newHeight + 'px';
    }
}
