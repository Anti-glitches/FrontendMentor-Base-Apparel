const inputEmail = document.querySelector('.hero-input');
const inputButton = document.querySelector('.hero-button');
const inputEmailMessage = document.querySelector('.hero-email-message');
const inputEmailError = document.querySelector('.hero-input-error');

inputButton.addEventListener('click', checkEmail);

function checkEmail(){
    const re = /\S+@\S+\.\S+/;

    if(re.test(inputEmail.value)){
       successEmail()
    } else{
        failedEmail()
    }
}

function successEmail(){
    inputEmail.style.borderColor = "green";
    inputEmailMessage.textContent = "Congratulations. You've joined our mailing list.";
    inputEmailMessage.style.color = "green";
    inputEmailError.style.display = "none";
    inputEmail.style.paddingRight = "75px";
}

function failedEmail(){
    inputEmail.style.borderColor = "red";
    inputEmailMessage.textContent = "Please provide a valid email";
    inputEmailMessage.style.color = "red";
    inputEmailError.style.display = "block";
    inputEmail.style.paddingRight = "120px";

}
