import LightningElementPlus from "c/lightningElementPlus";
import { track, api } from "lwc";

export default class ApoVerticalNavigation extends LightningElementPlus {
    @track state = {};
    @api
    backgroundColor;

    get style() {
        const listOfProperties = [
            'background-color:' + this.backgroundColor
        ];

        return listOfProperties.join(';');
    }

    @api
    get tabs() {
        return this.state.tabs;
    }
    set tabs(value) {
        console.log('fdd');
        this.state.originalTabs = value;
        this.state.tabs = this.prepTabs(value);
    }
    @api
    get selectedTab() {
        return this.state.selectedTab;
    }
    set selectedTab(value) {
        this.state.selectedTab = value;
        if (!this.tabsAreSet) {
            this.prepTabs(this.tabs, value);
        }
    }
    prepTabs(array) {
        let index = 1;
        let tempTabs = [];
        const valueLength = array.length;
        for (let i = 0; i < valueLength; i++) {
            tempTabs.push({
                name: array[i].name,
                id: index,
                isSelected: array[i].isSelected,
                icon: array[i].icon
            });
            index++;
        }
        return tempTabs;
    }
    setTab(value) {
        const tabLenght = this.tabs.length;
        for (let i = 0; i < tabLenght; i++) {
            // eslint-disable-next-line radix
            if (parseInt(this.tabs[i].id) === parseInt(value)) {
                this.state.tabs[i].isSelected = true;
            } else {
                this.state.tabs[i].isSelected = false;
            }
        }
    }
    handleSelection(e) {
        this.tabs = this.prepTabs(this.state.originalTabs);
        this.setTab(e.detail.id);
        const event = new CustomEvent("select", {
            detail: { rowTab: e.detail }
        });
        this.dispatchEvent(event);
    }
}