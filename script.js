const jock = 1;
const teacher = 2;
const nerd = 3;
const ivancho = 4;
const notPicked = 0;

const playerWin = 1;
const tie = 0;
const computerWin = -1;


let playerClass = notPicked; /* 0-unselected, 1-jock, 2- teacher, 3-nerd, 4-ivancho */

/* let test = document.querySelector(".teacher"); */
document.querySelector(".jock").addEventListener("click", () => defineWinner(jock,genRndComputerClass()));
document.querySelector(".teacher").addEventListener("click", () => defineWinner(teacher,genRndComputerClass()));
document.querySelector(".nerd").addEventListener("click", () => defineWinner(nerd,genRndComputerClass()));
document.querySelector(".ivancho").addEventListener("click", () => defineWinner(ivancho,genRndComputerClass()));


function genRndComputerClass() {
    return Math.floor(Math.random()*3 + 1);
   
} 

/* 1 = player win, 0 = tie, -1 = computer win */
 function defineWinner (playerClass, computerClass) {

    switch(playerClass) {
        case jock:
            switch(computerClass){
                case jock:
                    document.querySelector(".fightResult").innerHTML = "You go train for the next football match together! (T)"
                    return tie;
                case teacher:
                    document.querySelector(".fightResult").innerHTML = "You failed your finals! (L)" 
                    return computerWin;
                case nerd:
                    document.querySelector(".fightResult").innerHTML = "You stuck him in a locker! (W)"
                    return playerWin;
                default: 
                    document.querySelector(".fightResult").innerHTML = ""
                    return;
            }

        case teacher:
            switch(computerClass){
                case jock:
                    document.querySelector(".fightResult").innerHTML = "You made him repeat the year! (W)" 
                    return playerWin;
                case teacher:
                    document.querySelector(".fightResult").innerHTML = "You try to fix the multimedia together ! (T)"
                    return tie;
                case nerd:
                    document.querySelector(".fightResult").innerHTML = "He's got higher-degree than you at 16! (L)"
                    return computerWin;
                default:
                    document.querySelector(".fightResult").innerHTML = "" 
                    return;
            }

        case nerd:
            switch(computerClass){
                case jock:
                    document.querySelector(".fightResult").innerHTML = "You got stuck in a locker! (L)"
                    return computerWin;
                case teacher: 
                    document.querySelector(".fightResult").innerHTML = "This mere mortal could not outsmart you! (W)"
                    return playerWin;
                case nerd:
                    document.querySelector(".fightResult").innerHTML = "You go play DnD and WoW together! (T)"
                    return tie;
                default:
                    document.querySelector(".fightResult").innerHTML = "" 
                    return;
            } 
        case ivancho:
            document.querySelector(".fightResult").innerHTML = "You are the ultimate human being in terms of strenth, smarts and beauty. Nobody can challenge you! (W) "
            return(1)
        default :
            return;
    }
} 


/* test.addEventListener("click", () => 100+100); */
/* document.querySelector("teacher").addEventListener("click", () => console.log(123)); */

/* function winnerIs (playerClass, computerClass) {

    switch(playerClass) {
        case jock:
            switch(computerClass){
                case jock: 
                    return("You go train for the next football match together! (T)");
                case teacher: 
                    return("You failed your finals! (L)");
                case nerd:
                    return("You stuck him in a locker! (W)");
                default: 
                    return("Could not correctly select computerClass");
            }

        case teacher:
            switch(computerClass){
                case jock: 
                    return("You made him repeat the year! (W)");
                case teacher:
                        return("You try to fix the multimedia together ! (T)");
                case nerd:
                    return("He's got higher-degree than you at 16! (L)");
                default: 
                    return("Could not correctly select computerClass");
            }

            case nerd:
            switch(computerClass){
                case jock:
                    return("You got stuck in a locker! (L)");
                case teacher: 
                    return("This mere mortal could not outsmart you! (W)");
                case nerd:   
                return("You go play DnD and WoW together! (T)");
                default: 
                    return("Could not correctly select computerClass");
            } 
            case ivancho:
                return("You are the ultimate human being in terms of strenth, smarts and beauty. Nobody can challenge you! (W) ")
    }
} 

let computerClass = genRndComputerClass();

playerClass = document.querySelector("jock").addEventListener("click", winnerIs(1,genRndComputerClass()));
playerClass = document.querySelector("teacher").addEventListener("click", winnerIs(2,genRndComputerClass()));
playerClass = document.querySelector("nerd").addEventListener("click", ("click", winnerIs(3,genRndComputerClass())));
playerClass = document.querySelector("ivancho").addEventListener("click", ("click", winnerIs(4,genRndComputerClass())));



document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World"; */
/* } */
