/**
 * Created by Dima on 14.08.2020.
 */

public with sharing class CreateHcpConfirmationTasksController {
    @AuraEnabled
    public static void createTasks(String meetingId) {
        final String HCP_CONFIRMATION_RECORD_TYPE_ID = Schema.SObjectType.Case.getRecordTypeInfosByDeveloperName().get('Meeting_HCP_Confirmation').getRecordTypeId();
        final String TRAVELING_RECORD_TYPE_ID = Schema.SObjectType.Case.getRecordTypeInfosByDeveloperName().get('Meeting_Traveling').getRecordTypeId();
        final String PAYMENT_RECORD_TYPE_ID = Schema.SObjectType.Case.getRecordTypeInfosByDeveloperName().get('Meeting_Payment').getRecordTypeId();
        System.debug('test');
        Id currentUserId = UserInfo.getUserId();
        List<Case> caseList = new List<Case>();
        Case case1 = new Case();
        case1.Subject = 'Invite';
        case1.Meeting__c = meetingId;
        case1.OwnerId = currentUserId;
        case1.Origin = 'Web';
        case1.RecordTypeId = HCP_CONFIRMATION_RECORD_TYPE_ID;
        caseList.add(case1);
        Case case2 = new Case();
        case2.Subject = 'Confirm';
        case2.Meeting__c = meetingId;
        case2.OwnerId = currentUserId;
        case2.Origin = 'Web';
        case2.RecordTypeId = HCP_CONFIRMATION_RECORD_TYPE_ID;
        caseList.add(case2);
        Case case3 = new Case();
        case3.Subject = 'Send Full Confirmation';
        case3.Meeting__c = meetingId;
        case3.OwnerId = currentUserId;
        case3.Origin = 'Web';
        case3.RecordTypeId = HCP_CONFIRMATION_RECORD_TYPE_ID;
        caseList.add(case3);
        Case case4 = new Case();
        case4.Subject = 'Remind';
        case4.Meeting__c = meetingId;
        case4.OwnerId = currentUserId;
        case4.Origin = 'Web';
        case4.RecordTypeId = HCP_CONFIRMATION_RECORD_TYPE_ID;
        caseList.add(case4);

        Case case5 = new Case();
        case5.Subject = 'Request Needs\\Preferences';
        case5.Meeting__c = meetingId;
        case5.OwnerId = currentUserId;
        case5.Origin = 'Web';
        case5.RecordTypeId = TRAVELING_RECORD_TYPE_ID;
        caseList.add(case5);

        Case case6 = new Case();
        case6.Subject = 'Research Options';
        case6.Meeting__c = meetingId;
        case6.OwnerId = currentUserId;
        case6.Origin = 'Web';
        case6.RecordTypeId = TRAVELING_RECORD_TYPE_ID;
        caseList.add(case6);

        Case case7 = new Case();
        case7.Subject = 'Provide Options';
        case7.Meeting__c = meetingId;
        case7.OwnerId = currentUserId;
        case7.Origin = 'Web';
        case7.RecordTypeId = TRAVELING_RECORD_TYPE_ID;
        caseList.add(case7);

        Case case8 = new Case();
        case8.Subject = 'Confirm Options';
        case8.Meeting__c = meetingId;
        case8.OwnerId = currentUserId;
        case8.Origin = 'Web';
        case8.RecordTypeId = TRAVELING_RECORD_TYPE_ID;
        caseList.add(case8);

        Case case9 = new Case();
        case9.Subject = 'Book Travel';
        case9.Meeting__c = meetingId;
        case9.OwnerId = currentUserId;
        case9.Origin = 'Web';
        case9.RecordTypeId = TRAVELING_RECORD_TYPE_ID;
        caseList.add(case9);

        Case case10 = new Case();
        case10.Subject = 'Send Full Itinerary';
        case10.Meeting__c = meetingId;
        case10.OwnerId = currentUserId;
        case10.Origin = 'Web';
        case10.RecordTypeId = TRAVELING_RECORD_TYPE_ID;
        caseList.add(case10);

        Case case11 = new Case();
        case11.Subject = 'Process Fee Payment';
        case11.Meeting__c = meetingId;
        case11.OwnerId = currentUserId;
        case11.Origin = 'Web';
        case11.RecordTypeId = PAYMENT_RECORD_TYPE_ID;
        caseList.add(case11);

        Case case12 = new Case();
        case12.Subject = 'Receive HCP Expenses';
        case12.Meeting__c = meetingId;
        case12.OwnerId = currentUserId;
        case12.Origin = 'Web';
        case12.RecordTypeId = PAYMENT_RECORD_TYPE_ID;
        caseList.add(case12);

        Case case13 = new Case();
        case13.Subject = 'Review HCP Expenses';
        case13.Meeting__c = meetingId;
        case13.OwnerId = currentUserId;
        case13.Origin = 'Web';
        case13.RecordTypeId = PAYMENT_RECORD_TYPE_ID;
        caseList.add(case13);

        Case case14 = new Case();
        case14.Subject = 'Process Expense Payment';
        case14.Meeting__c = meetingId;
        case14.OwnerId = currentUserId;
        case14.Origin = 'Web';
        case14.RecordTypeId = PAYMENT_RECORD_TYPE_ID;
        caseList.add(case14);

        Case case15 = new Case();
        case15.Subject = 'Reconcile all Payments';
        case15.Meeting__c = meetingId;
        case15.OwnerId = currentUserId;
        case15.Origin = 'Web';
        case15.RecordTypeId = PAYMENT_RECORD_TYPE_ID;
        caseList.add(case15);
        insert caseList;
    }
}