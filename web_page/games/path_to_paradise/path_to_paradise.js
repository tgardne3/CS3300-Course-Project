//name: Azam, Brandon, David, Trey
//class: CS3300

let story;

async function load_story() {
    try {
        const response = await fetch("./story.json");
        story = response.json();
        console.log(story);
    } catch (error) {
        console.error('Failed to load story.json', error);
    }
}



//path to paradise game logic
function display_text() {

}

function update_choice(choice) {
    console.log(choice);
}

/* Document Objects */
const btn_a = document.getElementById("btn-a");
if(btn_a) {
    load_story();
    btn_a.addEventListener("click", update_choice(0.1));
    const btn_b = document.getElementById("btn-b");
    btn_a.addEventListener("click", update_choice(0.2));
    const btn_c = document.getElementById("btn-c");
    btn_a.addEventListener("click", update_choice(0.3));
    const btn_d = document.getElementById("btn-d");
    btn_a.addEventListener("click", update_choice(0.4));
}
