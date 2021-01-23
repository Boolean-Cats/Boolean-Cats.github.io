let schemes = [
    ["Dark", "#121212", "#BDBDBD", "#616161"],
    ["Light", "#EEEEEE", "#000000", "#757575"],
    ["Orange", "#4C7394", "#BB9ED1", "#FAB29E"], 
    ["Ocean", "#E3F2FD", "#01579B", "#03A9F4"],
    ["Nature", "#E8F5E9", "#2E7D32", "#4CAF50"],
    ["Pony", "#FCE4EC", "#AD1457", "#E91E63"],    
    ];

    /* first is the background color
       second is the text color
       third is the link color*/
    
let current = (localStorage.getItem("scheme") || 0) - 1;
changePalette();

// Palette Icon Creation
window.onload = function () {
    let paletteButton = document.createElement("i");
    paletteButton.classList.add("fas");
    paletteButton.classList.add("fa-palette");
    paletteButton.onclick = () => changePalette();
    document.getElementsByTagName("main")[0].appendChild(paletteButton);
}

// Palette Change Color Function
function changePalette() {
    current = (current + 1) % schemes.length;
    localStorage.setItem("scheme", current);

    let scheme = schemes[current];

    let style = document.documentElement.style;
    style.setProperty("--background", scheme[1]);
    style.setProperty("--text", scheme[2]);
    style.setProperty("--link", scheme[3]);
}
