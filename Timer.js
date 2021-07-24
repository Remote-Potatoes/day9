class Timer {
  constructor(minutes, seconds, htmlElement) {
    this.minutes = minutes;
    this.seconds = seconds;
    this.on = false;
    this.intervalId = null;
    this.htmlElement = htmlElement;
  }

  /**
   * Starts the clock, wether it comes from an idle value, or paused value
   */
  start() {
    console.log("TIMER IS STARTING");
    this.on = true;

    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  /**
   * Pauses the timer. Doesn't clear the timer
   */
  pause() {
    console.log("TIMER GOT PAUSED");
    this.on = false;
    clearInterval(this.intervalId);
  }

  /**
   * Completely clears the timer's clock.
   */
  stop() {
    console.log("STOP. WAIT A MINUTE. FILL MY CUP PUT SOME LIQUOR IN IT");
    this.on = false;
    this.minutes = 0;
    this.seconds = 0;
    clearInterval(this.intervalId);
    this.htmlElement.innerText = "0:00";
  }

  /**
   * This method is going to be called every second, in case the timer is on
   */
  updateTime() {
    this.htmlElement.innerText = `${this.minutes}:${this.seconds}`;
    if (this.on === false) {
      return;
    }
    if (this.minutes === 0 && this.seconds === 1) {
      this.stop();
      return;
    }
    if (this.seconds === 0) {
      this.seconds = 59;
      this.minutes -= 1;
      return;
    }
    this.seconds -= 1;
  }
}
