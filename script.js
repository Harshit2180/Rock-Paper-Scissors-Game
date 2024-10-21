let MyScore = 0;
let CompScore = 0;

const MyChoice = document.querySelectorAll(".choice");
const Message = document.querySelector(".result");
const UserScoreTrack = document.querySelector(".UserScore");
const CompScoreTrack = document.querySelector(".CompScore");

const GenCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

const DrawGame = (UserChoice) => {
  Message.innerText = `Game Draw! You both chose ${UserChoice}. Play Again!`;
  Message.style.backgroundColor = "#060684"
}

const ShowWinner = (UserWin, UserChoice, CompChoice) => {
  if (UserWin) {
    MyScore++;
    UserScoreTrack.innerText = MyScore;
    Message.style.backgroundColor = "green";
    Message.innerText = `You Won! Your ${UserChoice} beats computer's ${CompChoice}`;
  }
  else{
    CompScore++;
    CompScoreTrack.innerText = CompScore;
    Message.style.backgroundColor = "red";
  Message.innerText = `You Lose! Computer's ${CompChoice} beats your ${UserChoice}`;
  }
}

const PlayGame = (UserChoice) => {
  const CompChoice = GenCompChoice();
  if (UserChoice === CompChoice){
    DrawGame(UserChoice);
  }
  else {
    UserWin = true;
    if (UserChoice === "rock"){
      UserWin = CompChoice === "scissor"? true: false;
    }
    else if (UserChoice === "paper"){
      UserWin = CompChoice === "rock"? true: false;
    }
    else{
      UserWin = CompChoice === "paper"? true: false;
    }
    ShowWinner(UserWin, UserChoice, CompChoice);
  }
}

MyChoice.forEach((choice) => {
  choice.addEventListener("click", () =>{
    const UserChoice = choice.getAttribute("id");
    console.log("User Chose ", UserChoice);
    PlayGame(UserChoice);
  })
})