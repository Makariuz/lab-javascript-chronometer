class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    },1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = this.currentTime  / 60
    return Math.floor(minutes)
    
    
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let numString = value.toString() //searched online how to convert number to string
    if (numString === 0) return '00'
    if (numString >= 10) return numString
    if (numString < 10) return `0${numString}`
    return value.toFixed(2)

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let mm = this.computeTwoDigitNumber(this.getMinutes()) //
    let ss = this.computeTwoDigitNumber(this.getSeconds())

    return `${mm}:${ss}`

    //i didnt include the computeTwoDigitNumber first because i wasn't sure how it would work
    //then i remembered that it has to receive a value for each (check minutes and check for seconds)
    
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
