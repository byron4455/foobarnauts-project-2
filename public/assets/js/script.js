// LOG IN/REGISTRATION FORM
let card = document.getElementById ("card");
let usernameButton = document.getElementById('signIn');
let loginModal = document.getElementById('loginModal');
let close = document.getElementsByClassName('modal-close')[0];

// ROTATES LOGIN FORM TO REGISTER FORM
function openRegister(){
    card.style.transform ="rotateY(-180deg)";

}
function openLogin(){
    card.style.transform ="rotateY(0deg)";
}
// TARGET LOGIN BUTTON & MODAL
usernameButton.onclick = function() {
    console.log("PUSHED");
   loginModal.style.display = 'block';
}

close.onclick =function(){
    loginModal.style.display ='none';
}
// ALLOWS MODAL TO CLOSE BY CLICIING ANY SPACE OUTSIDE OF FORM
window.onclick = function(event){
if (event.target.className == 'sign-up-form'){
    loginModal.style.display ='none';
}
}
// NAVBAR BURGER
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });











	