let currentCoins = 0;
let goal = 0;

document.getElementById('set-goal').addEventListener('click', () => {
    goal = parseInt(document.getElementById('goal').value);
    updateDisplay();
});

document.getElementById('add-coin').addEventListener('click', () => {
    if (currentCoins < goal) {
        currentCoins++;
        updateDisplay();
    }
});

document.getElementById('subtract-coin').addEventListener('click', () => {
    if (currentCoins > 0) {
        currentCoins--;
        updateDisplay();
    }
});

function updateDisplay() {
    document.getElementById('coins').textContent = `${currentCoins}/${goal}`;
    let jarContent = document.getElementById('jar-content');
    let percentage = (currentCoins / goal) * 100;
    jarContent.style.height = `${percentage}%`;
}
