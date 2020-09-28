import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader';
import CSS from '@salesforce/resourceUrl/apo_styles';
/**
 * @NOTE this component is to utalize global Tokens, it is not a stand alone component.
 * @step [0]import lightningElementPlus from 'c/lightningElementPlus';
 * @step [1] export default class NewComponent extends LightningElementPlus {}
 * @step [2] use styleTokens
 */
export default class LightningElementPlus extends LightningElement {
    constructor(){
        super();
        loadStyle(this, CSS + '/apo_tokens.css');
    }
}