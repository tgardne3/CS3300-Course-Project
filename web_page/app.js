/*
names: Azam, Brandon, David, Trey
class: CS3300
*/


//defining inputs from sign-up page
const first_name_input = document.getElementByID('first_name');
const last_name_input = document.getElementByID('last_name');
const username_input = document.getElementByID('username');
const email_input = document.getElementByID('email');
const password_input = document.getElementByID('password');
const submit_button = document.getElementByID('sign-up-button');


//collect and store data when submit button is clicked
function collect_data() {
    const first_name = first_name_input.value;
    const last_name = last_name_input.value;
    const username = username_input.value;
    const email = email_input.value;
    const password = password_input.value;

    //displaying finished sign-up page
    window.location.replace("http://127.0.0.1:5500/web_page/successful-sign-up.html");
    setTimeout(() => {
        console.log("displaying success page");
    }, 5000);

    //reverting to homepage
    window.location.replace("https:127.0.0.1:5500/web_page/index.html");

}//collect_data