let playerScore = 0;
let aiScore = 0;

function computerPlay() {

    let computerMove = "none";
    let x = Math.floor(Math.random() * 3);


    if (x == 0) {
        computerMove = "rock";
        return (computerMove);
    }

    else if (x == 1) {
        computerMove = "paper";
        return (computerMove);
    }

    else if (x == 2) {
        computerMove = "scissors";
        return (computerMove);
    }



}

function scoreChanger(playerScore, aiScore) {
    document.getElementById("score").innerHTML = "Score: " + playerScore + " - " + aiScore;
}

function moveDisplayer(computerMove){
    document.getElementById("moveDisplay").innerHTML = "Last computer move when you submitted: " + computerMove;
}

function resultDisplayer(result){

    if(result == 'player wins'){
        document.getElementById("result").innerHTML = "Result: player wins!";
    }

    else if(result == "ai wins"){
        document.getElementById("result").innerHTML = "Result: ai wins :(";

    }

    else if(result == "tie"){
        document.getElementById("result").innerHTML = "Result: ... tie";
    }
}


document.getElementById("myButton").onclick = function () {



    let playerMove = document.getElementById("myText").value;

    let computerMove = computerPlay();
    moveDisplayer(computerMove);
    console.log("computer move: " + computerMove);
    console.log("player move: " + playerMove);

    document.getElementById("myText").value = "";

    if (computerMove == "paper") {


        if (playerMove == "paper") {
            console.log("tie");
            // alert("tie");

            resultDisplayer("tie");


        }

        else if (playerMove == "rock") {
            console.log("ai wins");
            aiScore++;

            scoreChanger(playerScore, aiScore);
            resultDisplayer("ai wins");

        }

        else if (playerMove == "scissors") {
            console.log("player wins");
            playerScore++;
            

            scoreChanger(playerScore, aiScore);
            resultDisplayer("player wins");


        }

    }

    if (computerMove == "rock") {


        if (playerMove == "paper") {
            console.log("player wins");
            playerScore++;

            scoreChanger(playerScore, aiScore);
            resultDisplayer("player wins");

        }

        else if (playerMove == "rock") {
            console.log("tie");
            resultDisplayer("tie");

        }

        else if (playerMove == "scissors") {
            console.log("ai wins");
            aiScore++;

            scoreChanger(playerScore, aiScore);
            resultDisplayer("ai wins");


        }

    }

    if (computerMove == "scissors") {


        if (playerMove == "paper") {
            console.log("ai wins");
            aiScore++;

            scoreChanger(playerScore, aiScore);
            resultDisplayer("ai wins");



        }


        else if (playerMove == "rock") {
            console.log("player wins");
            playerScore++;

            scoreChanger(playerScore, aiScore);
            resultDisplayer("player wins");


        }

        else if (playerMove == "scissors") {
            console.log(" tie");
            resultDisplayer("tie");

        }
    }


}


let y = computerPlay();
