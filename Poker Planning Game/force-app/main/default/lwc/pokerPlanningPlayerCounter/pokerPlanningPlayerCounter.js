import { LightningElement, api } from "lwc";
export default class PokerPlanningPlayerCounter extends LightningElement {
    //player should have: id, name, estimationChoice
    @api players;
    @api roundInProgress;
}
