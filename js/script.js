let focusText = document.getElementById("focusText");
let focusDiv = document.getElementById("invisibleContainer");

focusText.addEventListener("mousedown", function() {
    focusDiv.style.display = "block";
});

focusText.addEventListener("mouseup", function() {
    focusDiv.style.display = "none";
});