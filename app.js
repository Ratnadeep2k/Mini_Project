let userScore =0;
let computerScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const generateComputerChoice =()=>{
    //rock,paper,scissors
    const options =["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}
const DrawGame=()=>{
    console.log("Draw");
    msg.innerText = `Draw ! You and Computer both choose same choice`;
    msg.style.backgroundColor = "Black";
    
}
const showWinner=(userWin ,userChoice,computerChoice)=>{
    if(userWin){
        userScore ++;
        userScorePara.innerText = userScore;  
        console.log("You win");
        msg.innerText = `You Win ! Your Choice ${userChoice} beats Computer choice ${computerChoice}`;
        msg.style.backgroundColor = "green";
        console.log(`You Win ! ${userChoice} beats ${computerChoice}`);
    }
    else {
        computerScore ++;
        computerScorePara.innerText = computerScore;
        console.log("Computer wins");
        msg.innerText = `You loss ! Computer choice ${computerChoice} beats Your Choice ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }

}
const playGame =(userChoice)=>{
    console.log(userChoice);
    const computerChoice =generateComputerChoice();
    console.log(computerChoice);
    if(userChoice == computerChoice){
        //Draw game
        DrawGame();
    }
    else{
        let userWin = true;
        if(userChoice =="rock"){
            userWin =computerChoice =="paper" ? false:true;

        }
        else if(userChoice =="paper"){
            userWin =computerChoice =="scissors" ? false:true;

        }
        else {
            userWin =computerChoice =="rock" ? false:true;
        
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })

});
