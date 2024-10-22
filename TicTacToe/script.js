let btn = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let playerO = true; 
const WinPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

btn.forEach((btn) => {
    btn.addEventListener("click",()=>{
        console.log("Button was clicked");
        if(playerO){
            btn.innerText = "O";
            playerO = false;
        }else{
            btn.innerText = "X";
            playerO = true;
        }
        btn.disabled = true;
        checkWinner();
    })
});

const resetGame = () =>{
    playerO = true;
    enabledBtn();
    msgContainer.classList.add("hide");
    newGameBtn.classList.add("hide");
}

const enabledBtn = () =>{
    for(let b of btn){
        b.disabled = false;
        b.innerText = "";
    }
}

const disabledBtn = () =>{
    for(let b of btn){
        b.disabled = true;
    }
} 

 const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    newGameBtn.classList.remove("hide");
    disabledBtn();
 }

function checkWinner(){
    for(let pattern of WinPattern){
       let posVal1 = btn[pattern[0]].innerText;
       let posVal2 = btn[pattern[1]].innerText;
       let posVal3 = btn[pattern[2]].innerText;  

       if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
        if(posVal1 === posVal2 && posVal2 === posVal3){
            showWinner(posVal1);
        }
       }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);