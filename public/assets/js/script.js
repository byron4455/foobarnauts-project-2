// LOG IN/REGISTRATION FORM
let card = document.getElementById ("card");
let usernameButton = document.getElementById('username');
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
