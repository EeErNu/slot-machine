const REEL_HEIGTH = 605;
const FRAMES_NUMBER = 5;
const LEFT_REEL = document.getElementById("left-reel");
const MIDDLE_REEL = document.getElementById("middle-reel");
const RIGHT_REEL = document.getElementById("right-reel");
const REELS = [LEFT_REEL, MIDDLE_REEL, RIGHT_REEL];
const CURRENT_CREDIT = document.getElementById("currentCredit");
let score = document.getElementById("score");
let frameCounter = 1;
let secondIncrement;

/**
 * This function triggers after click on a spin button.
 * It triggers animate function. 
 * 
 * second increment variable is responsible for how long the reels are going to spin;
 * CURRENT_CREDIT reduces the number of tokens after every spin.
 */
let spin = function() {
    animate();
    if (CURRENT_CREDIT.innerHTML >= 1) {
        CURRENT_CREDIT.innerHTML -= 1;
        animate();
        secondIncrement = frameCounter + 100;
    } else {
        alert("You need to top up your balance");
    }
}

/**
 * This is just an idea... for now at least
 * TODO: make it work
 */
// let winCombinations = function() {
//     const winConditions = {
//         BARx3: "3xBAR",
//         BAR: "BAR",
//         BARx2: "2xBAR",
//         SEVEN: "SEVEN",
//         CHERRY: "CHERRY",
//     }

//     switch (winConditions) {
//         case SEVEN + SEVEN + SEVEN:
//             CURRENT_CREDIT.innerHTML + 150
//         case BARx3 + BARx3 + BARx3:
//             CURRENT_CREDIT.innerHTML + 50
//         case BARx2 + BARx2 + BARx2:
//             CURRENT_CREDIT.innerHTML + 20
//         case BAR + BAR + BAR:
//             CURRENT_CREDIT.innerHTML + 10
//             break;
//         default:
//             break;
//     }
// }

/**
 * This function is responsible for reel animation.
 */
let animate = function() {
    for (let i = 0; i < REELS.length; i++) {
        if (frameCounter) {
            REELS[i].style.backgroundPosition = '0px ' + (REEL_HEIGTH / FRAMES_NUMBER * frameCounter) + "px";

            setTimeout(function animate() {
                REELS[i].style.backgroundPosition = '0px ' + (REEL_HEIGTH / FRAMES_NUMBER * frameCounter) + "px";
                frameCounter += 1;

                if (frameCounter < secondIncrement) {
                    setTimeout(animate, 70);
                }
                clearTimeout();

            }, 10);
        }
    }
}

// TODO: add possibility to sum credit values 
let addCredit = function() {
    let credit = document.getElementById("credit").value;

    if (credit >= 1 && credit <= 5000) {
        CURRENT_CREDIT.innerHTML = credit;
    } else {
        alert("Apologies, only value from 1 to 5000 is acceptable");
    }
}