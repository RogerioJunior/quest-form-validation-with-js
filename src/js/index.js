
const inputText = document.querySelectorAll(".input-text");
const btnsend = document.getElementById("input-btn");


btnsend.addEventListener("click", validator);


function validator () {
    inputText.forEach(input => {
        if(input.value) {
            input.classList.remove("no-checked")
            input.classList.add("checked")
        }else {
            input.classList.remove("checked")
            input.classList.add("no-checked")
        }
    })

}