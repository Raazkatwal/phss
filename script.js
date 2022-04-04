//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20rem from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}

var toggle = document.getElementById("change"); //theme change garne icon lai liyo
    toggle.onclick = function(){ //click garda function call hunxa
        document.body.classList.toggle("dark-theme"); //dark theme ma change hunxa
        if (document.body.classList.contains("dark-theme")) {
           document.getElementById("change").innerHTML = "<i class='fa-solid fa-sun theme-logo'></i>"; //dark theme activate xa vane icon change hunxa
        }else{
          document.getElementById("change").innerHTML = "<i class='fa-solid fa-moon theme-logo'></i>";
        }
    }

var navmenu = document.getElementsByClassName('menu-btn')[0];
var navbar = document.getElementsByClassName('res-navbar')[0];
navmenu.addEventListener('click', ()=>{
navbar.classList.toggle('active')
})