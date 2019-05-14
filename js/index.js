// Your code goes here

// creating variables, calling event listeners
// mouseover
const welcomeToFunBus = document.querySelector(".intro > h2");
// console.log(welcometoFunBus);
welcomeToFunBus.addEventListener("mouseover", event => {
  event.target.style.color = "red";
  event.stopPropagation();
});

// keydown NOT WORKING
const letsGo = document.querySelector(".text-content > h2");
letsGo.addEventListener("keydown", event => {
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

// load NOT WORKING
// const letsGoPara2 = document.querySelectorAll(".text-content > p")[1];
// letsGoPara2.addEventListener("load", event => {
//   event.target.style.fontFamily = "Indie Flower";
//   event.stopPropagation;
// });

// focus NOT WORKING
// const adventureAwaits = document.querySelector(
//   ".inverse-content > .text-content > h2"
// );
// adventureAwaits.addEventListener("focus", event => {
//   event.target.style.color = "pink";
//   event.stopPropagation;
// });

// resize NOT WORKING
// const adventureImg = document.querySelector(
//   ".inverse-content > .img-content > img"
// );
// adventureImg.addEventListener("resize", event => {
//   event.target.src =
//     "https://images.unsplash.com/photo-1557798136-429866f61726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80";
//   event.stopPropagation;
// });

// scroll NOT WORKING
// const adventurePara = document.querySelector(".inverse-content > .text-content > p");
// adventurePara.addEventListener("scroll",event => {
//     console.log(event);
//     event.target.style.fontColor = "purple";
//     event.stopPropagation;
// });

// select NOT WORKING
// const adventurePara2 = document.querySelectorAll(".inverse-content > .text-content > p")[1];
// adventurePara2.addEventListener("select",event => {
//     event.target.textContent = "Paragraph text has changed";
//     event.stopPropagation;
// })

const bottomImg = document.querySelector(".content-destination > img")
bottomImg.addEventListener("dblclick",event => {
    // console.log(event);
    event.target.style.borderRadius = "50px";
    event.stopPropagation;
});
