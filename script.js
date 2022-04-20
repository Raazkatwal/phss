//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20rem from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    document.querySelector('.nav').classList.add("scrollshade");
  } else {
    mybutton.style.display = "none";
    document.querySelector('.nav').classList.remove("scrollshade");
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
           document.getElementById("text-change").innerHTML = "Light"; //dark theme activate xa vane icon change hunxa
        }else{
          document.getElementById("text-change").innerHTML = "Dark";
        }
    }
    const toggleButton = document.getElementsByClassName('fa-bars')[0]
    const navbarLinks = document.getElementsByClassName('nav-links')[0]
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('navactive')
    })

loginbtn = document.querySelector('.log_btn');
closebtn = document.querySelector('.login-close-btn');
popup = document.querySelector('.modal');
loginbtn.addEventListener("click", ()=>{
popup.showModal();
})
closebtn.addEventListener('click', ()=>{
  popup.close();
})