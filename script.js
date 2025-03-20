let msgC = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#New-Game");
let boxes = document.querySelectorAll("#box");
let reset = document.querySelector("#reset");

let count = 0;
let player = true;

const winpattern = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
                    [1,4,7], [2,5,8],[0,4,8], [2,4,6]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(player){
            box.innerText = "x";
            player = false;
            count++;
        }
        else{
            box.innerText = "O";
            player = true;
            count++;
        }
        box.disabled = true;//disable the box
        if(count === 9){
            matchDraw();
            count = 0;
        }
        else{
            checkWinner();
        }
    });
});

const checkWinner = () => {
    for(let i of winpattern){
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3!= ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }

};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgC.classList.remove("hide");
    disableboxes();
};

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const matchDraw = () => {
    msg.innerText = "Ops! Match Draw";
    msgC.classList.remove("hide");
    disableboxes();
    count = 0;
}

const resetG = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgC.classList.add("hide");
    count = 0;
};

newGame.addEventListener("click", resetG);
reset.addEventListener("click", resetG);