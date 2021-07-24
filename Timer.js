class Timer {
  constructor(minutes, seconds) {
    this.minutes = minutes;
    this.seconds = seconds;
    this.on = false;
    this.intervalId = null;
  }

  /**
   * Starts the clock, wether it comes from an idle value, or paused value
   */
  start() {
    this.on = true;

    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  /**
   * Pauses the timer. Doesn't clear the timer
   */
  pause() {
    this.on = false;
    clearInterval(this.intervalId);
  }

  /**
   * Completely clears the timer's clock.
   */
  stop() {
    this.on = false;
    this.minutes = 0;
    this.seconds = 0;
    clearInterval(this.intervalId);
  }

  /**
   * This method is going to be called every second, in case the timer is on
   */
  updateTime() {
    console.log("UPDATING TIME:");
    if (this.on === false) {
      return;
    }
    if (this.minutes === 0 && this.seconds === 1) {
      this.stop();
      console.log(`${this.minutes}:${this.seconds}`);
      return;
    }
    if (this.seconds === 0) {
      this.seconds = 59;
      this.minutes -= 1;
      console.log(`${this.minutes}:${this.seconds}`);
      return;
    }
    this.seconds -= 1;
    console.log(`${this.minutes}:${this.seconds}`);
  }
}
