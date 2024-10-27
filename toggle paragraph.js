let button = document.getElementById("toggleButton");
 let paragraph = document.getElementById("textPara");

 button.addEventListener("click", function() {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
        button.innerText = "Hide Text";
    } else {
        paragraph.style.display = "none";
        button.innerText = "Show Text";
    }
});