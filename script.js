// console.log("script is working")
let humburger = document.querySelector(".nav-humburger")

let hbLinks = document.querySelector(".hb-links")

let hbUpperLine = document.querySelector(".upper-line")
let hbMiddleLine = document.querySelector(".middle-line")
let hbLowerLine = document.querySelector(".lower-line")

// let hbNavList = document.getElementsByClassName("nav-hb-list")
// console.log(hbNavList);
// console.log(humburger)

// Hemburger Click Handler
const hbClickHandler = () => {
    // console.log("humburger clicked")
    hbLinks.classList.toggle("hb-links-transition")
    hbUpperLine.classList.toggle("upper-line-transition")
    hbMiddleLine.classList.toggle("middle-line-transition")
    hbLowerLine.classList.toggle("lower-line-transition")
}
// Hemburger Event Listener
humburger.addEventListener("click", hbClickHandler)
