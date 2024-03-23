const computerchoicedisplay=document.getElementById('computer-choice')
const userchoicedisplay=document.getElementById('user-choice')
const resultdisplay=document.getElementById('result')
let userchoice
let computerchoice
let result
const possiblechoices=document.querySelectorAll('button')
possiblechoices.forEach(possiblechoice=> possiblechoice.addEventListener('click',(e)=>{
    userchoice=e.target.id;
    userchoicedisplay.innerHTML=userchoice
    generatecomputerchoice();



}))

function generatecomputerchoice(){
    const randomnumber=Math.floor(Math.random() *possiblechoices.length)+1;

    if(randomnumber ===1){
        computerchoice='rock';
    }
    if(randomnumber === 2){
        computerchoice='paper';

    }
    if(randomnumber === 3){
        computerchoice='scissors';

    }
    computerchoicedisplay.innerHTML=computerchoice
    getresult()


}

function getresult() {
    if (computerchoice === userchoice) {
        result = 'It\'s a draw!';
    } else if (
        // Computer wins
        (computerchoice === 'rock' && userchoice === 'scissors') ||
        (computerchoice === 'paper' && userchoice === 'rock') ||
        (computerchoice === 'scissors' && userchoice === 'paper')
    ) {
        result = 'You lose!';
    } else {
        // User wins
        result = 'You win!';
    }
    resultdisplay.innerHTML = result;
}
