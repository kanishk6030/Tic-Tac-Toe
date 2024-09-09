let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#winner");
let start = document.querySelector(".start");
let reset_btn = document.querySelector(".reset_btn");

let turn0 = true;

const winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];


boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        box.style.fontSize = "50px";
        if (turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        check_winner();
    });
});
//

const reset = ()=>{
    turn0 = true;
    enable();
}
const enable = ()=>{
    for (let box of boxes){
        box.disabled = false ;
        box.innerText = "";
    }
}
const disable = ()=>{
    for (let box of boxes){
        box.disabled = true ;
    }
}
// showing thw winner
const show_winner =(winner)=>{
    msg.innerText = `Congratulation Winner : ${winner}`;
    disable();
}
// check winner
const check_winner=()=>{
    for(let patterns of winner){
        let pos1 =boxes[patterns[0]].innerText;
        let pos2 =boxes[patterns[1]].innerText;
        let pos3 =boxes[patterns[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1);
                show_winner(pos1);   //passing arg to show_winner fun
            }
        }
    }
}

start.addEventListener("click",reset);
reset_btn.addEventListener("click",reset);

