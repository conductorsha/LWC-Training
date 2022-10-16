import { LightningElement, track } from "lwc";

export default class PokerPlanningGamePanel extends LightningElement {
    playerId = "1";
    isModerator = true;
    roundInProgress = false;
    @track players = [
        { id: "1", name: "Boris", estimationChoice: "?", voted: false },
        { id: "2", name: "Sam", estimationChoice: "?", voted: false },
        { id: "3", name: "Vlad", estimationChoice: "?", voted: false },
        { id: "4", name: "Alex", estimationChoice: "?", voted: false }
    ];

    handleUserVote(event) {
        let { estimationChoice } = event.detail;
        console.log("Received userVote event. My new choice: ", estimationChoice);
        console.log("My old users:", JSON.parse(JSON.stringify(this.players)));
        let foundUser = this.players.find((player) => player.id === this.playerId);
        foundUser.estimationChoice = estimationChoice;
        foundUser.voted = true;
        console.log("Updated users: ", this.players);
    }

    startRound(event) {
        console.log("Receive start round event");
        let timerCmp = this.template.querySelector("c-poker-planning-round-timer");
        timerCmp.startTheTimer(60);
        this.roundInProgress = true;
        this.players.forEach((player) => {
            player.voted = false;
            player.estimationChoice = "?";
        });
    }

    finishRound(event) {
        console.log("Received finish round ");
        let timerCmp = this.template.querySelector("c-poker-planning-round-timer");
        timerCmp.resetTimer();
        this.roundInProgress = false;
    }

    get votingPanelClass() {
        return !this.roundInProgress ? "disabled-panel" : "";
    }
}
