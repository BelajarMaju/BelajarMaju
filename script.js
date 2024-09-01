let timerInterval;

function startTimer(minutes) {
    clearInterval(timerInterval);
    
    let time = minutes * 60;
    const timerDisplay = document.getElementById('timer');
    
    timerInterval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        time--;

        if (time < 0) {
            clearInterval(timerInterval);
            alert("Waktu Habis!");
        }
    }, 1000);
}


