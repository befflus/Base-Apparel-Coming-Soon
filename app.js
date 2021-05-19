const email_input = document.getElementById('email');
const submit_button = document.getElementById('submit_button');
const input_msg = document.getElementById('input-message');
const error_img = document.getElementById('error');
const reggex = /^([\w+-_.])+@(\w)+\.(\w)*\.*(\w)*$/gi


submit_button.addEventListener('click', validate);

function validate () {
    let email = email_input.value;

    if (reggex.test(email)) {
        error_img.style.display = "none";
        input_msg.style.display = "none";
        email_input.style.border = "initial";
    } else {
        error_img.style.display = "block";
        input_msg.style.display = "block";
        email_input.style.border = "solid red 2px"
    }
}