/**
 * Created by Dima on 14.08.2020.
 */

import {LightningElement, api} from 'lwc';
import createTasks from '@salesforce/apex/CreateHcpConfirmationTasksController.createTasks';

export default class CreateHcpConfirmationTasks extends LightningElement {
    @api recordId;

    onClickCreateTask() {
        createTasks({ meetingId: this.recordId} )
            .then(result => {
                console.log('success');
                eval("$A.get('e.force:refreshView').fire();");
            })
            .catch(error => {
                console.log('error');
            });
    }
}