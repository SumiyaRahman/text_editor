const textArea = document.getElementById("text-field");

// font style type
document.getElementById("bold").addEventListener("click",function () {
    if(textArea.style.fontWeight !== "bold"){
        textArea.style.fontWeight = "bold";
    }
    else{
        textArea.style.fontWeight = "normal";
    }
});
document.getElementById("italic").addEventListener("click",function () {
    if(textArea.style.fontStyle !== "italic"){
        textArea.style.fontStyle = "italic";
    }
    else{
        textArea.style.fontStyle = "normal";
    }
});
document.getElementById("underline").addEventListener("click",function () {
    if(textArea.style.textDecoration !== "underline"){
        textArea.style.textDecoration = "underline";
    }
    else{
        textArea.style.textDecoration = "none";
    }
});

// text align type
document.getElementById("left").addEventListener("click",function () {
    textArea.style.textAlign = "left";
});
document.getElementById("center").addEventListener("click",function () {
    textArea.style.textAlign = "center";
});
document.getElementById("right").addEventListener("click",function () {
    textArea.style.textAlign = "right";
});
document.getElementById("justify").addEventListener("click",function () {
    textArea.style.textAlign = "justify";
});

// font size
const fontSize = document.getElementById("font-size");
fontSize.addEventListener("click",function(){
    textArea.style.fontSize = fontSize.value;
});

// color change
const changeColor = document.getElementById("color-board");
changeColor.addEventListener("change", function(){
    textArea.style.color = changeColor.value;
})