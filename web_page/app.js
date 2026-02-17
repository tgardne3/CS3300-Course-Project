/*
names: Azam, Brandon, David, Trey
class: CS3300
*/

//Will probably replace with REACT implementation
function game_search() {
    const search = document.getElementById("game_search");

    //captures "Enter" key for searching
    search.addEventListener('keydown', (event) => {
        //if Enter is pressed
        if (event.key === 'Enter') {

            //capture search key value
            const search_value = search.value.toLowerCase();
            //debugging print line
            console.log("enter key pressed: ", search_value);
            //clearing input
            search.value = '';

            //search games and display results...
            switch (search_value) {
                case 'hangman':
                    window.location.href = "./games/hangman/hangman.html";
                    break;
                case 'snake':
                    window.location.href = "./games/snake/snake.html";
                    break;
                case 'typing test':
                    window.location.href = "./games/typing_test/typing_test.html";
                    break;
            }

        }
    });
}

//collect and store data when submit button is clicked
function sign_up() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const password_check = document.getElementById('confirm_password').value;

    //AZAM: STORE DATA IF PASSWORDS MATCH
    //store + process data here

    if (password == password_check) {
        //redirecting to success page
        console.log("User data collected: ", {username, password});//print debugging
        window.location.href = "successful-sign-up.html";
    }
    else {
        console.log("passwords don't match");
    }
}//sign_in

//signing in verification
function sign_in() {
    //pull values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    //AZAM: VERIFY USERNAME + PASSWORD WITH DB
    console.log("Verify Info: ", {username, password});//print debugging

    redirect_to_home();
}


//redirecting to home page () second delay
function redirect_to_home() {
    setTimeout(() => {
        window.location.href = "index.html"
    }, 2000);

}//successful redirect
