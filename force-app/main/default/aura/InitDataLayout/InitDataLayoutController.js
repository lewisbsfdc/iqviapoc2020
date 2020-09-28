({
    doInit: function(cmp, event, helper) {
      console.log('test');
    },
    handleApplicationEvent : function(cmp, event, helper) {
        console.log('tabNameList');
        var tabNameList = event.getParam("tabNameList");
        var tabIconList = event.getParam("tabIconList");
        var tabRegionList = event.getParam("tabRegionList");
        console.log(tabNameList);
        helper.buildLeftNavigationPanel(cmp, tabNameList, tabIconList, tabRegionList);
    },
    toggleSection : function(cmp, event) {
        const arrIndex = event.getParam( 'rowTab' );
        let arrTab = cmp.get( "v.objectChildTab" );
        for (let i = 0; i < arrTab.length; i++) {
            arrTab[i].isSelected = (arrTab[i].name == arrIndex.name) ;
        }
        cmp.set("v.objectChildTab", arrTab);
    }
})