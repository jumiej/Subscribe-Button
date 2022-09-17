const head = document.querySelector(".head");
const subBtnClose = document.querySelector(".sub-btn-close");
const card = document.querySelector(".card");
const sub = document.getElementById("subcon")
const display = document.getElementById("subscribeContainer")

let count = 0
// head.addEventListener("click", modalOpen);
// subBtnClose.addEventListener("click", modalClose);
sub.addEventListener('click',openClose)

function modalOpen() {
    head.classList.add("active");
    subBtnClose.classList.add("active")
}

function openClose(){
    count++
    if(count % 2 !== 0 ){
        display.style.display="none"
    }else{display.style.display="block";}
    return count
}

function modalClose() {
    head.classList.remove("active");
    subBtnClose.classList.remove("active")
}
