// LOG IN/REGISTRATION FORM
let card = document.getElementById ("card");

function openRegister(){
    card.style.transform ="rotateY(-180deg)";

}
function openLogin(){
    card.style.transform ="rotateY(0deg)";
}
// TARGET LOGIN BUTTON & MODAL
let usernameButton = document.getElementById('username');
let loginModal = document.getElementById('loginModal');

usernameButton.onclick = function() {
   loginModal.style.display = 'block';
}


