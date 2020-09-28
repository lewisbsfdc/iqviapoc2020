({
    doInit: function(cmp, event, helper) {
        var pathname = window.location.pathname;
        if (pathname.includes('flexipageEditor')){
        }
        helper.loadVerticalNavItems(cmp);
    },

    refreshOnlocationChange : function (cmp, event, helper) {
        var recordId = cmp.get('v.recordId');
        var pathname = window.location.pathname;
        console.log(recordId);
        console.log(pathname);
        if(pathname.includes(recordId)){
            helper.loadVerticalNavItems(cmp);
        }
    }
});