({
    toggleSection: function( cmp ) {
        let x = cmp.find("apo-blade").getElement();
        let arrowBtn = cmp.find("apo-arrow").getElement();
        if (x.style.width === "24px") {
            x.style.width = "345px";
            arrowBtn.className = 'apo-toggle-button__right';
        } else {
            x.style.width = "24px";
            arrowBtn.className = 'apo-toggle-button__left';
        }
    },
    doInit: function( cmp ){
        var pathname = window.location.pathname;
        if (!pathname.includes('flexipageEditor')){
            cmp.set('v.isBuilderTime', false);
        }
    }
})