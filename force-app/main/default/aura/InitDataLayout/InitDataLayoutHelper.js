({
    buildLeftNavigationPanel: function(cmp, tabNameList, tabIconList, tabRegionList) {
        let myTabs=[];
        try {
            if( tabNameList[0].length > 0 ){
                let i = 1;
                for (const iterator of tabNameList) {
                    myTabs.push({
                        name: iterator,
                        icon: tabIconList[i - 1],
                        region: 'sidebar' + tabRegionList[i -1],
                        isSelected: i == 1 ? true : false
                    });
                    i++;
                }
                cmp.set("v.noSetup", false);
            }else{
                cmp.set("v.noSetup", true);
            }
        } catch (error) {
            cmp.set("v.noSetup", true);
        }
        cmp.set("v.objectChildTab", myTabs);
    }
})