({
    loadVerticalNavItems: function(component) {
        var config = this.parseConfig(component);
        //this.fireAppEvent(config.labelList, config.iconList, config.regionList);

        //Translate the labels before firing the app event
        var helper = this;
        var tabLabels = config.labelList.toString();
        //helper.translateLabels(component, tabLabels).then(
          //  $A.getCallback(function(result) {
            //    var labelMap = JSON.parse(result);
              //  var translatedTabList = helper.getLabelList(tabLabels, labelMap);
                var translatedTabList = tabLabels.split(',');
                console.log(translatedTabList);
                helper.fireAppEvent(translatedTabList, config.iconList, config.regionList, component.get('v.backgroundColor'));
            //}),
            //$A.getCallback(function(error){
              //  console.log(error);
            //})
        //);
    },

    parseConfig: function(component) {
        var tabList = [];
        for (var i = 1; i <= 20; i++) {
            var propertyName = 'v.region' + i + 'Config';
            var propertyValue = component.get(propertyName);
            if (propertyValue) {
                //Default values
                var sequence = "0";
                var label = "NOT CONFIGURED";
                var icon = "";
                var tokens = propertyValue.split(',');
                if (tokens.length == 3) {
                    sequence = tokens[0];
                    label = tokens[1];
                    icon = tokens[2];
                } else if (tokens.length == 2) {
                    //Icon or sequence may not be provided
                    var frstToken = tokens[0].replace(/ /g,'');
                    if (isNaN(frstToken)) {
                        //First one is not a number, assume sequence is not provided
                        label = tokens[0];
                        icon = tokens[1];
                    } else {
                        //First one is a number, assume icon is not provided
                        sequence = tokens[0];
                        label = tokens[1];
                    }
                } else if (tokens.length == 1) {
                    //Assume only the label is set
                    label = tokens[0];
                }

                if (sequence) sequence.replace(/ /g,'');
                if (icon) icon.replace(/ /g,'');

                var config = { region: i, order: Number(sequence), label: label, icon: icon };
                tabList.push(config);
            }
        }

        tabList.sort((a, b) => (a.order > b.order) ? 1 : -1);

        var labelList = [];
        var iconList = [];
        var regionList = [];
        for (var i = 0; i < tabList.length; i++) {
            labelList.push(tabList[i].label);
            iconList.push(tabList[i].icon);
            regionList.push(tabList[i].region);
        }

        var config = { labelList: labelList, iconList: iconList, regionList: regionList };
        return config;
    },

    fireAppEvent: function( tabList, iconList, regionList, backgroundColor){
        var appEvent = $A.get('e.c:InitDataLayoutEvent');
        console.log(tabList);
        appEvent.setParams({
            'tabNameList': tabList,
            'tabIconList': iconList,
            'tabRegionList': regionList,
            'backgroundColor': backgroundColor
        });
        appEvent.fire();
    },

    translateLabels : function(component, labels) {
        return new Promise(function(resolve, reject){
            var action = component.get('c.getTranslatedLabels');
            action.setParams({
                labelApiList: labels
            });

            action.setCallback(this, function(response){
                var state = response.getState();
                if (state === 'SUCCESS') {
                    if(resolve) {
                        resolve(response.getReturnValue());
                    }
                } else if(reject) {
                    console.log('getTranslatedLabels - rejecting promise');
                    reject(Error(response.getError()[0].message));
                }
            });
            $A.enqueueAction(action, false);
        });
    },

    getLabelList : function(labelApiString, customLabelMap){
        var labelApiList = labelApiString.split(',');

        var translatedlabelList = [];
        for (var i = 0; i < labelApiList.length; i++) {
            translatedlabelList.push(customLabelMap[labelApiList[i]]);
        }
        return translatedlabelList;
    },

})