// Your code goes here
// creating variables
const container = document.querySelector(".home");
const letsGo = document.querySelector(".text-content > h2");
const adventurePara2 = document.querySelectorAll(
  ".inverse-content > .text-content > p"
)[1];
const adventureAwaits = document.querySelector(
  ".inverse-content > .text-content > h2"
);

// creating variables, calling event listeners
// mouseover
const welcomeToFunBus = document.querySelector(".intro > h2");
// console.log(welcometoFunBus);
welcomeToFunBus.addEventListener("mouseover", event => {
  event.target.style.color = "red";
  event.stopPropagation();
});

// using keydown on form element
// creating var to form

const form = document.querySelector("form");

form.addEventListener("keydown", event => {
  console.log(event);
  //   console.log("hi");
  event.target.style.color = "blue";
  event.stopPropagation();
});

// wheel
const letsGoPara = document.querySelector(".text-content > p");
letsGoPara.addEventListener("wheel", event => {
  event.target.style.border = "1px solid red";
  event.stopPropagation();
});

// drag
const letsGoImg = document.querySelector(".img-content > img");
letsGoImg.addEventListener("drag", event => {
  event.target.src =
    "https://images.unsplash.com/photo-1557842458-0d037073e911?ixlib=rb-1.2.1&auto=format&fit=crop&w=1646&q=80";
  event.stopPropagation();
});

// using load on window object
const letsGoPara2 = document.querySelectorAll(".text-content > p")[1];
window.addEventListener("load", event => {
  console.log(event);
  alert(`Page has loaded!`);
  //   event.target.style.fontFamily = "Indie Flower";
  //   event.stopPropagation;
});

// window.document.onload = function() {
//     console.log(`hi`);
// }

// focus on form
// form.addEventListener("focus", event => {
//   event.target.style.background = "pink";
//   event.stopPropagation;
// });

const formInput = document.querySelectorAll("input")

formInput.forEach(input => input.addEventListener('focus', event => event.target.style.background = 'pink'))

// resize 
// const adventureImg = document.querySelector(
//   ".inverse-content > .img-content > img"
// );
// adventureImg.addEventListener("resize", event => {
//   event.target.src =
//     "https://images.unsplash.com/photo-1557798136-429866f61726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80";
//   event.stopPropagation;
// });

window.addEventListener("resize",e => alert("We have resized!"));

// scroll. make sure to put it on window, or use overflow y axis and max-height
const adventurePara = document.querySelector(
  ".inverse-content > .text-content > p"
);
// const container = document.querySelector(".container");
window.addEventListener("scroll", event => {
  console.log(event);
  adventurePara.style.backgroundColor = "purple";
  // container.stopPropagation;
});

// select on form element
form.addEventListener("select", event => {
  console.log(event);
  event.target.value = "Text has been selected!";
  event.stopPropagation;
});


// dbl click
const bottomImg = document.querySelector(".content-destination > img");
bottomImg.addEventListener("dblclick", event => {
  console.log(event);
  event.target.style.borderRadius = "50px";
  event.stopPropagation;
});

// using stop propagation with click

const pickYourDestination = document.querySelector(".content-destination > h2");
pickYourDestination.addEventListener("click", event => {
  event.stopPropagation();
  event.currentTarget.style.border = "1px solid yellow";
});

const contentDestinationDiv = document.querySelector(".content-destination");
contentDestinationDiv.addEventListener("click", event => {
  event.stopPropagation();
  event.currentTarget.style.border = "1px solid pink";
});

// creating form and appending it to end of container

// const form = document.createElement('form');
// container.appendChild(form);
// form.label =

// creating variable for nav links, use a foreach on all of them to apply stopDefault

const navLinks = document.querySelectorAll("a");
navLinks.forEach(function(a) {
  a.addEventListener("click", event => {
    event.preventDefault();
  });
});
