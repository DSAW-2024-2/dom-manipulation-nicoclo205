let i = 0;
const images = ["image_1.jpg", "image_2.jpeg", "image_3.jpeg"];
const imageElement = document.getElementById("image");
imageElement.src = images[i];

function changeImage(newIndex) {
    if (newIndex >= 0 && newIndex < images.length && newIndex !== i) {
        imageElement.classList.add('fade-out');
        
        setTimeout(() => {
            i = newIndex;
            imageElement.src = images[i];
            imageElement.classList.remove('fade-out');
            imageElement.classList.add('fade-in');
            
            setTimeout(() => {
                imageElement.classList.remove('fade-in');
            }, 500);
        }, 500);

        updateButtonColors();
    }
}

function next_image() {
    changeImage(i + 1);
}

function previous_image() {
    changeImage(i - 1);
}

function updateButtonColors() {
    document.getElementById("previous").style.color = i > 0 ? "white" : "black";
    document.getElementById("next").style.color = i < images.length - 1 ? "white" : "#0011ff";
}

// Inicializar colores de botones
updateButtonColors();