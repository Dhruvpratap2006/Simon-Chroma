// // how to start the game 


// // Step 1 : we have to press any key for starting the game
// // Step 2 : then one button will flash and level one will come

// // now after this we have to press the any of the four button to forward in the game

// // according to the rules of the game we have to press all the keys in one order otherwise we loose the game 
// // so for maintaining this sequence in the form of userSeq 
// // and one seq we have to maintain the game seq means in which seq our buttons are flashing
// // so for maintaing both seq we are going to store both in th form of array

// // step 3 is to check that the user is pressing the button in the same order as the order or seq of game
// // if both are allign then level up the game
// // otherwise Game Over

// let gameSeq = []; // in this seq we are going to store all those seq which our game is going to generate
// // /our colour is generating by the function levelUp
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let started = false; // tells that our game has not started till yet
// let level = 0;  // current level is 0

// // step 1
// // now we want that user press any key to start the game so we have to apply EventListener
// document.addEventListener("keypress", function() {
//     if(started == false) {
//         console.log("Game Started");
//         started = true; // press any key to start the function

//         levelUp(); // call level up the function
//     }
// })


// function gameFlash(btn) {
//     btn.classList.add("flash"); // in css we have make on flash class in which we have all the styking of flash button
//     setTimeout(function() { // this will return our original color of that button which will come after 1s
//         btn.classList.remove("flash");
//     }, 240);
// }


// function userflash(btn) {
//     btn.classList.add("userflash"); // in css we have make on flash class in which we have all the styking of flash button
//     setTimeout(function() { // this will return our original color of that button which will come after 1s
//         btn.classList.remove("userflash");
//     }, 240);
// }


// let h2 = document.querySelector('h2');
// // step 2 -> one random button will flash which will level up the game 
// function levelUp() {
//     userSeq = [];
//     level++;
//     // flash the button
//     // update the level value
//     h2.innerText = `Level ${level}`;

//     // random btn flash
//     // for this just take any random color from btns array
//     let randIdx = Math.floor(Math.random() * 3);
//     let randColor = btns[randIdx];
//     let randbtn = document.querySelector(`.${randColor}`);
//     // console.log(randIdx);
//     // console.log(randColor);
//     // console.log(randbtn);
//     gameSeq.push(randColor);
//     gameFlash(randbtn);
// } 


// function checkAns() {
//     // console.log("cur level: ", level);
//     let idx = level-1;

//     if(userSeq[idx] === gameSeq[idx]) {
//         if(userSeq.length == gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         h2.innerHTML = `Game Over! Your score was <b>${level}</b>. Press any key to Restart.`
//         document.querySelector("body").stylr.backgroundColor = "red";
//         setTimeout(function() {
//             document.querySelector("body").stylr.color = "white";
//         }, 150);
//         reset();
//     }
// }
// function btnPress() {
//     // this function will handle all the function after button press that means after button press we have to flash the button agian\
//     // console.log("btn was pressed");
//     console.log(this);
//     let btn = this; // this will represent the button which is pressed and we are going to store that button in variable btn and then pass to 
//     // func btnFlash which will foing to flash it
//     userflash(btn);

//     // now ffirst find out the color which user has press 
//     userColor = btn.getAttribute("id");
//     userSeq.push(userColor); 


//     checkAns(userSeq.length-1);


// }

// // acess all the button from html
// let allBtns = document.querySelectorAll(".btn");
// for(btn of allBtns) {
//     btn.addEventListener("click", btnPress);
// }

// // if user preess any value then we have to reset ot 
// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }



// let gameSeq = []; 
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let started = false; 
// let level = 0; 

// // step 1
// document.addEventListener("keypress", function() {
//     if(started == false) {
//         console.log("Game Started");
//         started = true; 
//         levelUp(); 
//     }
// })

// function gameFlash(btn) {
//     btn.classList.add("flash"); 
//     setTimeout(function() { 
//         btn.classList.remove("flash");
//     }, 240);
// }

// function userflash(btn) {
//     btn.classList.add("userflash"); 
//     setTimeout(function() { 
//         btn.classList.remove("userflash");
//     }, 240);
// }

// let h2 = document.querySelector('h2');

// // step 2
// function levelUp() {
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`; // Fixed: added backticks for template literal

//     // random btn flash
//     let randIdx = Math.floor(Math.random() * 4); // Fixed: 4 instead of 3 to include green
//     let randColor = btns[randIdx];
//     let randbtn = document.querySelector(`.${randColor}`);
    
//     gameSeq.push(randColor);
//     gameFlash(randbtn);
// }

// function checkAns(idx) { // Fixed: added idx parameter
//     if(userSeq[idx] === gameSeq[idx]) {
//         if(userSeq.length == gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         h2.innerHTML = `Game Over! Your score was <b>${level}</b>. Press any key to Restart.`
//         document.querySelector("body").style.backgroundColor = "red"; // Fixed: .style
//         setTimeout(function() {
//             document.querySelector("body").style.backgroundColor = "white"; // Fixed: .style
//         }, 150);
//         reset();
//     }
// }

// function btnPress() {
//     let btn = this; 
//     userflash(btn);

//     let userColor = btn.getAttribute("id");
//     userSeq.push(userColor); 

//     checkAns(userSeq.length - 1); // Fixed: passing the current index
// }

// let allBtns = document.querySelectorAll(".btn");
// for(btn of allBtns) {
//     btn.addEventListener("click", btnPress);
// }

// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }

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