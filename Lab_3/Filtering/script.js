const img = document.getElementById("img");
document.getElementById("saturate").onclick = function() {
    saturate();
}
document.getElementById("opacity").onclick = function() {
    opacity();
}
document.getElementById("invert").onclick = function() {
    invert();
}
document.getElementById("sepia").onclick = function() {
    sepia();
}
document.getElementById("grayscale").onclick = function() {
    grayscale();
}



function saturate() {
    img.style.filter = "saturate(7)"
}
function opacity() {
    img.style.filter = "opacity(0.5)"
}
function invert() {
    img.style.filter = "invert()"
}
function sepia() {
    img.style.filter = "sepia()"
}
function grayscale() {
    img.style.filter = "grayscale()"
}