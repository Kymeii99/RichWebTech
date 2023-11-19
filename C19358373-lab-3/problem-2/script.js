document.addEventListener("DOMContentLoaded", function () {
    const { fromEvent, timer } = rxjs;
    const { map, takeUntil } = rxjs.operators;

    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");
    const startButton = document.getElementById("startButton");
    const timerOutput = document.getElementById("timerOutput");

    const startButtonClick$ = fromEvent(startButton, 'click');

    startButtonClick$.subscribe(() => {
        const totalSeconds =
            parseInt(hoursInput.value) * 3600 +
            parseInt(minutesInput.value) * 60 +
            parseInt(secondsInput.value);

        if (isNaN(totalSeconds) || totalSeconds <= 0) {
            alert("Please enter a valid time.");
            return;
        }

        const countdown$ = timer(0, 1000).pipe(
            map((time) => totalSeconds - time),
            takeUntil(timer((totalSeconds + 1) * 1000))
        );

        countdown$.subscribe((remainingSeconds) => {
            const hours = Math.floor(remainingSeconds / 3600);
            const minutes = Math.floor((remainingSeconds % 3600) / 60);
            const seconds = remainingSeconds % 60;

            timerOutput.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        });
    });
});
