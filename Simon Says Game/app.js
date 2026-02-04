let gameSeq = []; 
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false; 
let level = 0; 

// Function to play sounds
function playSound(name) {
    let audio = new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound${btns.indexOf(name) + 1}.mp3`);
    audio.play();
}

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("Game Started");
        started = true; 
        levelUp(); 
    }
})

function gameFlash(btn) {
    btn.classList.add("flash"); 
    setTimeout(function() { 
        btn.classList.remove("flash");
    }, 240);
}

function userflash(btn) {
    btn.classList.add("userflash"); 
    setTimeout(function() { 
        btn.classList.remove("userflash");
    }, 240);
}

let h2 = document.querySelector('h2');

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4); 
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    gameFlash(randbtn);
    playSound(randColor); // Play sound when game flashes
}

function checkAns(idx) { 
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>. Press any key to Restart.`;
        
        // Dark-theme compatible game over flash
        document.querySelector("body").style.backgroundColor = "#ff2e63"; 
        let wrongAudio = new Audio("https://www.soundjay.com/misc/sounds/fail-trombone-01.mp3");
        wrongAudio.play();

        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "#1a1a2e"; 
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this; 
    userflash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor); 
    playSound(userColor); // Play sound when user clicks

    checkAns(userSeq.length - 1); 
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}
