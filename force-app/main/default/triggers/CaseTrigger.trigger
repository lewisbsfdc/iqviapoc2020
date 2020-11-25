/**
 * Created by Dima on 14.08.2020.
 */

trigger CaseTrigger on Case (after update) {
    Map<Id, String> meetingIdToStatusMap = new Map<Id, String>();
    for(Case c : Trigger.new){
        if(c.Meeting__c != null && c.Status == 'Closed' && Trigger.oldMap.get(c.Id).Status != 'Closed'){
            String currentStatus = meetingIdToStatusMap.get(c.Meeting__c);
            if(currentStatus == null){
                meetingIdToStatusMap.put(c.Meeting__c, c.Subject);
            } else {
                if(currentStatus == 'Invite' && c.Subject != 'Invite'){
                    meetingIdToStatusMap.put(c.Meeting__c, c.Subject);
                } else if(currentStatus == 'Confirm' && (c.Subject == 'Send Full Confirmation' || c.Subject == 'Remind')){
                    meetingIdToStatusMap.put(c.Meeting__c, c.Subject);
                } else if(currentStatus == 'Send Full Confirmation' && c.Subject == 'Remind'){
                    meetingIdToStatusMap.put(c.Meeting__c, c.Subject);
                }
            }
        }
    }
    List<Meeting__c> meetingList = [SELECT Id FROM Meeting__c WHERE Id IN: meetingIdToStatusMap.keySet()];
    for(Meeting__c meeting : meetingList){
        String subject = meetingIdToStatusMap.get(meeting.Id);
        String stage;
        if(subject == 'Invite'){
            stage = 'Contacted';
        } else if(subject == 'Confirm'){
            stage = 'Followed-up';
        } else if(subject == 'Send Full Confirmation'){
            stage = 'Confirmed';
        } else if(subject == 'Remind'){
            stage = 'Reminded';
        }
        meeting.HCP_Confirmation_Stage__c = stage;
    }
    update meetingList;
}