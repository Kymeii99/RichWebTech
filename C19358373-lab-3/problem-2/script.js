document.addEventListener("DOMContentLoaded", function () {
    // Import functions and operators from RxJS
    const { fromEvent, timer } = rxjs;
    const { map, takeUntil } = rxjs.operators;

    // HTML Elements
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");
    const startButton = document.getElementById("startButton");
    const timerOutput = document.getElementById("timerOutput");

    //Observable for the click event on the start button
    const startButtonClick$ = fromEvent(startButton, 'click');

    // Subcribe to start button click event
    startButtonClick$.subscribe(() => {

        // calculating total seconds based on user input
        const totalSeconds =
            parseInt(hoursInput.value) * 3600 +
            parseInt(minutesInput.value) * 60 +
            parseInt(secondsInput.value);

        // checking is the input is valid
        if (isNaN(totalSeconds) || totalSeconds <= 0) {
            alert("Please enter a valid time.");
            return;
        }

        // create a countdown observable
        const countdown$ = timer(0, 1000).pipe(
            map((time) => totalSeconds - time),
            takeUntil(timer((totalSeconds + 1) * 1000))
        );
        
        // Subcribe to the countdown observable
        countdown$.subscribe((remainingSeconds) => {
            // Convert remaining seconds to hours, minute and seconds
            const hours = Math.floor(remainingSeconds / 3600);
            const minutes = Math.floor((remainingSeconds % 3600) / 60);
            const seconds = remainingSeconds % 60;

            // Update the timer element with the formatted time
            timerOutput.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        });
    });
});
