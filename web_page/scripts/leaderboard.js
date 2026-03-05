//name: Azam, Brandon, David, Trey
//class: CS3300

leaderboard_data = [
    {game: "HangMan", score: "NA", player: "NA"},
    {game: "Snake Game", score: "NA", player: "NA"},
    {game: "Type Sprint", score: "NA", player: "NA"},
    {game: "Light Racer", score: "NA", player: "NA"},
    {game: "...Online...", score: "NA", player: "NA"},
    {game: "Land Mine", score: "NA", player: "NA"},
];

document.addEventListener("DOMContentLoaded", function () {
    display_leaderboard(leaderboard_data);
});


//display leaderboard info
function display_leaderboard(leaderboard_data) {

    const container = document.getElementById("leaderboard-body");
    container.innerHTML = '';

    //if no leaderboard data
    if(leaderboard_data.length === 0) {
        const high_score = document.createElement('tr');
        high_score.innerHTML =  `
        <tr>
            <td>oooops</td>
            <td>we broke</td>
            <td>something</td>
        </tr>
        `;
        container.appendChild(high_score);
        return;
    }

    leaderboard_data.forEach(data => {
        //create table row
        const high_score = document.createElement('tr');
        high_score.className = 'high-score';

        //html for table row
        high_score.innerHTML = `
        <td>${data.game}</td>
        <td>${data.score}</td>
        <td>${data.player}</td>
        `;

        container.appendChild(high_score);
    });


}//display leaderboard