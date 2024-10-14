//variables
const toggleBtn = document.getElementById("toggle-btn");
const body = document.querySelector("body");
const mainImg = document.getElementById("mainImg");
const text = document.getElementById("text");

let darkmode = localStorage.getItem("dark-mode");

const enableDarkMode=() =>{
    body.classList.add("dark-mode-theme");
    toggleBtn.classList.add("dark-mode-toggle");
    mainImg.classList.add("dark-mode-main-img");
    text.innerHTML="sombre";
    localStorage.setItem("dark-mode" , "enabled")
}

const disableDarkMode= () =>{
    body.classList.remove("dark-mode-theme");
    toggleBtn.classList.remove("dark-mode-toggle");
    mainImg.classList.remove("dark-mode-main-img");
    text.innerHTML="claire";
    localStorage.setItem("dark-mode" , "disabled")
}

if(darkmode === "enabled"){
    enableDarkMode()
}

toggleBtn.onclick = function(){
    darkmode = localStorage.getItem("dark-mode");
    if(darkmode === "disabled"){
        enableDarkMode()
    } else {
        disableDarkMode()
    }
}