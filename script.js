const hideBtn=document.querySelector(".times");
const bar = document.querySelector(".bars");
const navLinks = document.getElementById("nav-links");
const postBtn = document.querySelector(".post-btn");
const userInput = document.querySelector(".inputUser");


// JavaScript for Toggle Menu

hideBtn.addEventListener("click",()=>{
  hideMenu();
})

bar.addEventListener("click",()=>{
  showMenu();
})

function showMenu(){
  navLinks.style.right ="0";
}
function hideMenu(){
  navLinks.style.right ="-200px";
}

postBtn.addEventListener("click",(event)=>{
  event.preventDefault();
  submitted();
})

function submitted(){
  
  if(userInput.value===''){
    alert("Please Enter Some Value !!");
  }
  else{
    alert("Your Comment is Submitted");
  }
}

