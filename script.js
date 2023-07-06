const linkNormal = document.getElementById("linkNormal");
const linkHex = document.getElementById("linkHex");
const btnColorFlipper = document.getElementById("btn");
const h2SpanColor = document.getElementById("colorname");
const colors = {
    1: "red",
    2: "green",
    3: "yellow",
    4: "#000000",
    5: "#C23111",
    6: "#4287f5",
    7: "#341294",
    8: "#14d9c2",
    9: "brown",
    10: "grey",
    11: "aquamarine",
    12: "tomato",
    13: "burlywood",
    14: "blue",
    15: "pink",
};

btnColorFlipper.addEventListener("click", flipColor);
linkNormal.addEventListener("click", setNormal);
linkHex.addEventListener("click", setHex);

flipColorHex();

function setNormal() {
    linkNormal.classList.add("selected");
    linkHex.classList.remove("selected");
}

function setHex() {
    linkHex.classList.add("selected");
    linkNormal.classList.remove("selected");
}

function flipColor() {
    if (linkNormal.classList.contains("selected")) {
        flipColorNormal();
    }
    if (linkHex.classList.contains("selected")) {
        flipColorHex();
    }
}

function flipColorNormal() {
    let option = Math.floor(Math.random() * (Object.keys(colors).length + 1 - 1) + 1);
    document.body.style.backgroundColor = colors[option];
    h2SpanColor.innerHTML = colors[option];
}

function flipColorHex() {
    let hexElements = "0123456789abcdef";
    let option = "";
    for (let index = 0; index <= 5; index++) {
        option += hexElements[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = "#" + option;
    h2SpanColor.innerHTML = "#" + option;
}
