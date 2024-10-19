function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const submit_button = document.getElementById("submit");
const input = document.getElementById("number");
const computer_span = document.getElementById("computer_result"); 
const result = document.getElementById("result"); 

submit_button.addEventListener("click", () => {
    let player_guess = parseInt(input.value); 
    let computer_guess = getRandomInt(1, 10);
    computer_span.textContent = computer_guess;
    
    if (player_guess === computer_guess) {
        result.textContent = "You won!";
    } else {
        result.textContent = "You lose";
    }
});
