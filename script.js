//html element and selector variables
let p = document.createElement("p");
let h1 = document.querySelector(".header");
let input = document.querySelector(".input");
let userInput;

//declare variable for ghost image
let ghostImage = document.querySelector(".ghost-image")

//declare variables for all of the buttons

let buttons = document.querySelector(".button")

//create an onclick event for the Hide Me button

let hideButton = document.querySelector(".hide-button")
  
hideButton.onclick = (function (){  
  ghostImage.style.display = "none";
});

//create an onclick event for the Show Me button

let showButton = document.querySelector(".show-button")
showButton.onclick = (function(){
  ghostImage.style.display = "inline";
})

//create an onclick event for the Update Img button

let updateImg = document.querySelector(".update-img-button")
updateImg.onclick = (function(){
  ghostImage.src = "https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg";
})

//create an onclick event for the Send Message button
//update the userInput variable by saving the value of the input
//use the insertAdjacentHTML method to append the userInput in a <p> tag
let message = document.querySelector(".message")
let messageButton = document.querySelector(".message-button")
messageButton.onclick = (function(){
  userInput = input.value;
  message.insertAdjacentHTML('beforeEnd', userInput);
})


//create an onclick event for the Name Me button
//update the userInput variable by saving the value of the input
//use the innerHTML method to update the h1 tag

let nameButton = document.querySelector(".name-button")
nameButton.onclick = (function(){
  userInput = input.value;
  h1.insertAdjacentHTML('beforeEnd', userInput);
})