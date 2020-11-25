/**
 * Created by Dima on 26.08.2020.
 */

public with sharing class SpeakerW9FormExpirationWarningController {
    @AuraEnabled
    public static Boolean isW9FormGoingToBeExpired(String speakerId) {
        List<Speaker_W9_Form__c> w9FormList = [SELECT Form_Expiration_Date__c FROM Speaker_W9_Form__c WHERE Speaker__c =: speakerId ORDER BY Form_Expiration_Date__c DESC];
        system.debug('w9FormList.size() -> ' + w9FormList.size());
        if(w9FormList.size() > 0){
            Speaker_W9_Form__c w9Form = w9FormList.get(0);
            system.debug('w9Form.Form_Expiration_Date__c -> ' + w9Form.Form_Expiration_Date__c );
            system.debug('System.today() ' + System.today() + '; System.today().addMonths(1)' + System.today().addMonths(1));
            if(w9Form.Form_Expiration_Date__c >= System.today() && w9Form.Form_Expiration_Date__c <= System.today().addMonths(1)){
                return true;
            }
        }

        return false;
    }
}