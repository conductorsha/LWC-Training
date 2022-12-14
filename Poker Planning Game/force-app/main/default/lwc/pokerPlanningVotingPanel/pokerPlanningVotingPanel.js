import { LightningElement } from "lwc";

export default class PokerPlanningVotingPanel extends LightningElement {
    voteOptions = ["0.5", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "100"];

    handleVoteOptionClick(event) {
        this.resetCardsStyles();
        event.target.classList.add("selectedPokerCard");
    }

    resetCardsStyles() {
        this.template.querySelectorAll(".pokerCard").forEach((node) => {
            node.classList.remove("selectedPokerCard");
        });
    }
}
