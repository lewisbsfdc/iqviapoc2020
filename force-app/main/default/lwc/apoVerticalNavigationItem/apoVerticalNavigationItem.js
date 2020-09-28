import LightningElementPlus from 'c/lightningElementPlus';
import { track, api } from "lwc";

export default class ApoVerticalNavigationItem extends LightningElementPlus {
    @track state = {};
    @api selected;
    @track selectClass;
    @api
    get tab() {
        return this.state.tab;
    }
    set tab(value) {
        if (value.isSelected) {
            this.selectClass = "apo-left-navigation--active";
        } else {
            this.selectClass = "apo-left-navigation";
        }
        this.state.tab = value;
    }

    selectTab(e) {
        e.preventDefault();
        const event = new CustomEvent("selecttab", {
            detail: this.tab
        });
        this.dispatchEvent(event);
    }
}