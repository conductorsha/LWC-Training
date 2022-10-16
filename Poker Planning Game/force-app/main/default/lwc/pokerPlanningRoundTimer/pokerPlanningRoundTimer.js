import { LightningElement, api } from "lwc";

export default class PokerPlanningRoundTimer extends LightningElement {
    minutes = 0;
    seconds = 0;
    secondsPassed = 0;
    roundDurationInSec = 0;

    startTheTimer(seconds) {
        this.roundDurationInSec = seconds;
        clearInterval(this.intervalId);
        let endDate = this.getEndDate(seconds);
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.intervalId = setInterval(() => {
            let now = new Date().getTime();
            let distance = endDate - now;

            if (distance < 1) {
                clearInterval(this.intervalId);
            } else {
                this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                this.secondsPassed = this.roundDurationInSec - this.seconds;
            }
        }, 1000);
    }

    getEndDate(seconds) {
        let dt = new Date();
        dt = new Date(dt.getTime() + seconds * 1000);
        return dt.getTime();
    }

    get timeLeft() {
        return (
            (this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`) +
            ":" +
            (this.seconds < 10 ? `0${this.seconds}` : `${this.seconds}`)
        );
    }

    get remainingPathColor() {
        const progressPercent = this.secondsPassed / this.roundDurationInSec;
        return this.getColor(progressPercent);
    }

    getColor(percent) {
        const hue = ((1 - percent) * 120).toString(10);
        return `hsl(${hue}, 100%, 50%)`;
    }

    get strokeDashArray() {
        const rawTimeFraction = this.seconds / this.roundDurationInSec;
        const adjustedTimeFraction =
            rawTimeFraction - (1 / this.roundDurationInSec) * (1 - rawTimeFraction);
        const dashWidth = (adjustedTimeFraction * 283).toFixed(0);
        return `${dashWidth} 283`;
    }
}
