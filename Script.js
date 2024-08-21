let i = 0;
const images = ["image_1.jpg", "image_2.jpeg", "image_3.jpeg"];
document.getElementById("image").src = images[i];
function next_image() {
    if (i < images.length-1) {
        i++;
        document.getElementById("image").src = images[i];
        document.getElementById("previous").style.color = "white";
    }
    else {
        document.getElementById("next").style.color = "#0011ff";
    }
}

function previous_image() {
    if (i > 0) {
        i--;
        document.getElementById("image").src = images[i];
        document.getElementById("next").style.color = "white";
    }
    else {
        document.getElementById("previous").style.color = "black";
    }
}