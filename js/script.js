let focusText = document.getElementById("focusText");
let focusDiv = document.getElementById("invisibleContainer");

focusText.addEventListener("focus", function() {
    focusDiv.style.display = "block";
});

focusText.addEventListener("blur", function() {
    focusDiv.style.display = "none";
});