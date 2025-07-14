const user=document.getElementById("name1");
const friend=document.getElementById("name2");
const calculateBtn=document.getElementById("calculate-btn");
const resultDiv=document.getElementById("result");
const resetBtn=document.getElementById("reset-btn");
const themeToggle=document.getElementById("theme-toggle");

calculateBtn.addEventListener("click", () => {
    const a=name1.value;
    const b=name2.value;
    if (a === '' || b === '') {
        alert("Please enter both names");
        result.textContent = 'Please enter both names';
        result.style.color = 'red';
        return;
    }
    const score = Math.floor(Math.random() * 50 + 50);
    let message = '';
    if (score >= 90) message = 'Best Friends Forever';
    else if (score >= 75) message = 'Best Friends';
    else if (score >= 60) message = 'Just Friends';
    else message = 'Room for Grow';
    result.innerHTML=`${a}, ${b} Friendship Score: ${score}-${message}`;

})
resetBtn.addEventListener("click", () => {
    name1.value = '';
    name2.value = '';
    result.textContent = '';
    });
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-theme');
    
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleBtn.textContent = document.body.classList.contains('dark-mode')
            ? 'Switch to Light Mode'
            : 'Switch to Dark Mode';
    });

    // Sample logic for Calculate and Reset buttons (optional)
    document.getElementById('calculate-btn').addEventListener('click', () => {
        const name1 = document.getElementById('name1').value.trim();
        const name2 = document.getElementById('name2').value.trim();
        const result = document.getElementById('result');

        if (!name1 || !name2) {
            result.textContent = 'Please enter both names.';
            return;
        }

        const score = Math.floor(Math.random() * 100) + 1;
        result.textContent = `${name1} & ${name2}'s friendship score is ${score}% 🌟`;
    });

    document.getElementById('reset-btn').addEventListener('click', () => {
        document.getElementById('name1').value = '';
        document.getElementById('name2').value = '';
        document.getElementById('result').textContent = '';
    });
});
