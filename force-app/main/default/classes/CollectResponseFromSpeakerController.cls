/**
 * Created by Dima on 18.08.2020.
 */

public with sharing class CollectResponseFromSpeakerController {
    public Boolean isSend {get; set;}
    public String meetingId {get; set;}
    public String speakerId {get; set;}
    public String varResponse {get; set;}
    public String varComment {get; set;}

    public CollectResponseFromSpeakerController() {
        isSend = false;

        meetingId = ApexPages.currentPage().getParameters().get('meetingId');
        speakerId = ApexPages.currentPage().getParameters().get('speakerId');
    }

    public void saveResponse() {
        isSend = true;

        Response_From_Suggested_Meeting_Speaker__c responseFromSuggestedMeetingSpeaker = new Response_From_Suggested_Meeting_Speaker__c();
        responseFromSuggestedMeetingSpeaker.Meeting__c = meetingId;
        responseFromSuggestedMeetingSpeaker.Speaker__c = speakerId;
        responseFromSuggestedMeetingSpeaker.Response__c = varResponse;
        responseFromSuggestedMeetingSpeaker.Comment__c = varComment;
        insert responseFromSuggestedMeetingSpeaker;
    }
}