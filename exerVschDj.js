var square = document.getElementById("square");

function square1() {
    square.style.backgroundColor = "blue"
};

function square2() {
    square.style.backgroundColor = "red"
};

function square3() {
    square.style.backgroundColor = "yellow"
};

function square4() {
    square.style.backgroundColor = "green"
};

function square5() {
    square.style.backgroundColor = "orange"
};

function square6() {
    square.style.backgroundColor = "purple"
};

square.addEventListener("mouseover", square1)
square.addEventListener("mousedown", square2)
square.addEventListener("mouseup", square3)
square.addEventListener("dblclick", square4)
document.addEventListener("mousewheel", square5)
square.addEventListener("mouseout", square6)

document.addEventListener("keydown", (event) => {
    if (event.key == "b") {
        square.style.backgroundColor = "blue";
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key == "r") {
        square.style.backgroundColor = "red";
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key == "y") {
        square.style.backgroundColor = "yellow";
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key == "g") {
        square.style.backgroundColor = "green";
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key == "o") {
        square.style.backgroundColor = "orange";
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key == "p") {
        square.style.backgroundColor = "purple";
    }
});