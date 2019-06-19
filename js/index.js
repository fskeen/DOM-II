


/*



NOTE: It's best to view the site in a small window due to very painful background color changes!



*/


// 1 -------------- Change font color of Fun Bus

const funBusTitle = document.querySelector("h1");

funBusTitle.addEventListener("mousedown", changeFontColor);

function changeFontColor() {
    funBusTitle.style.color = "red";
}

// 2 ---------------- add white box shadow to all p elements on load (to preserve the eyes)

const containerBR = document.querySelectorAll("p")
window.addEventListener('load', (event) => {
    containerBR.forEach(a => a.style.backgroundColor = "white");
    containerBR.forEach(a => a.style.boxShadow = "0 0 100px 120px white");

});

// 3 ---------------- scroll change body color (BE WARNED IT HURTS)

let bg = document

bg.addEventListener('scroll', function () {document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`})

console.log(bg)

// 4 & 5  ----------------- add class to nav links (for style & transition), then remove it to reset the nav

const navClick = document.querySelectorAll("nav a"); // selects all nav links
console.log(navClick)

function navPress() { // a function that adds a class to a link (styled w transition, scale, opacity, cursor change)
    navClick.forEach(a => a.classList.add('mouseDownA'));
}

function removeTransition(e) { // a function that REMOVES a class from a link
        if (e.propertyName !== "transform") return;
        this.classList.remove('mouseDownA');
}

navClick.forEach(a => a.addEventListener('mousedown', navPress)); // sends all links through the function to add a class
navClick.forEach(a => a.addEventListener('transitionend', removeTransition)); // sends all links through function to REMOVE a class. Comment this out if you want the nav links to explode and never return

// 6 ----------------- move image down on mouseover

const firstImg = document.querySelector(".img-content")
console.log(firstImg)

firstImg.addEventListener('mouseenter', function(){
    firstImg.style.transform = "translateY(200px)" // is there a way to get the translateY value to be the cursor's Y position plus like 100px? I couldn't quite get the syntax right for using the .clientY property of a mouse event. I wanted the mouse to start chasing the image off the page.
})

// 7 ----------------- Move the image back once you move mouse off the image

firstImg.addEventListener('mouseleave', function(){
    firstImg.style.transform = "translateY(0px)"
})

// 8 ----------------- alert when double-clicking on the second image

const secondImg = document.querySelector(".img-content:first-child")


secondImg.addEventListener('dblclick', function () {alert("No touchie!")});

// 9 ----------------- prevent right click menu on last image

const thirdImg = document.querySelector(".content-destination img")

thirdImg.addEventListener('contextmenu', function (event) {event.preventDefault()})


// 10 ----------------- stop nav refresh
const nav = document.querySelector("nav")

nav.addEventListener('click', function (a) { a.preventDefault()})


// Propagation: Prevents a duplicate console entry when you click on the "Sign Me Up!" buttons at the bottom.

const buttonDiv = document.querySelector(".btm-content"); // contains all destination content
buttonDiv.addEventListener("click", a => {
    console.log("Welcome to the Fun Bus!")
})



const buttons = document.querySelectorAll(".btn"); // the buttons themselves
buttons.forEach(a => a.addEventListener("click", event => {
    console.log("Welcome to the No Fun Bus.")
    event.stopPropagation(); //prevents "Welcome to the Fun Bus"" from logging to console.
}))
