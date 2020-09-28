/**
 * Created by Dima on 17.08.2020.
 */

import {LightningElement, api} from 'lwc';

export default class ChecklistItem extends LightningElement {
    @api
    checklistItemDone;

    @api
    checklistItemName;
}