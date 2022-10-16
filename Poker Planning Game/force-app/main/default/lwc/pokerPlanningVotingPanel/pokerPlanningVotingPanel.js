import { LightningElement } from "lwc";

export default class PokerPlanningVotingPanel extends LightningElement {
    voteOptions = ["0.5", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "100"];
    playersChoice;

    handleVoteOptionClick(event) {
        this.resetCardsStyles();
        event.target.classList.add("selectedPokerCard");
        this.playersChoice = event.target.dataset.id;
        console.log(this.playersChoice);
    }

    resetCardsStyles() {
        this.template.querySelectorAll(".pokerCard").forEach((node) => {
            node.classList.remove("selectedPokerCard");
        });
    }

    handleVoteClick(event) {
        this.dispatchEvent(
            new CustomEvent("uservote", { detail: { estimationChoice: this.playersChoice } })
        );
    }
}
