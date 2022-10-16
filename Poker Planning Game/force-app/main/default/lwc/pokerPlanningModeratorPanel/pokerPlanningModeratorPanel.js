import { LightningElement } from "lwc";

export default class PokerPlanningModeratorPanel extends LightningElement {
    handleStartRound(event) {
        this.dispatchEvent(new CustomEvent("roundstart"));
    }

    handleFinishRound(event) {
        this.dispatchEvent(new CustomEvent("roundfinish"));
    }
}
