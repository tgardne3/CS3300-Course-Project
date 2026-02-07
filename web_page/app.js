/*
names: Azam, Brandon, David, Trey
class: CS3300
*/


//collect and store data when submit button is clicked
function collect_data() {
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //store + process data here
    console.log("User data collected: ", {first_name, last_name, username, email, password});//print debugging

    //redirecting to success page
    window.location.href = "successful-sign-up.html";
}//collect_data

//signing in verification
function sign_in() {
    //pull values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //verify with db
    console.log("Verify Info: ", {username, password});//print debugging

    redirect_to_home();
}



//redirecting to home page () second delay
function redirect_to_home() {
    setTimeout(() => {
        window.location.href = "index.html"
    }, 2000);

}//successful redirect