var landingPageScroll;
var documentDetailsScroll;

function loaded() {
    var wrapperWidth = $("#homePage").css("width").split("px", 1);
    console.log("Total Width : " + wrapperWidth)
    if (version == "desktopWidget") {
        wrapperWidth -= 45;
    }
    else {
        wrapperWidth -= 30;
    }
    $("#scroller").css("width", ($("ul#thelist").children().length * wrapperWidth) + "px");
    configureIScroll(wrapperWidth)
    landingPageScroll = new iScroll('wrapper', {
        snap:true,
        momentum:false,
        hScrollbar:false,
        vScroll:false,
        snapThreshold:100,
        onScrollEnd:function () {
            getCurrentPage = this.currPageX
            $("#currentDoc").html(getCurrentPage + 1)
        }
    });
}
//        document.addEventListener('DOMContentLoaded', loaded, false);

function configureIScroll(wrapperWidth) {
    $("#scroller li").css("width", wrapperWidth + "px");
    $("#wrapper").css("width", wrapperWidth + "px");
    var docTitleWidth = wrapperWidth - 50;
    $("#docTitle").css("width", docTitleWidth + "px");
    var docSummary = wrapperWidth - 40;
    $("#docSummary").css("width", docSummary + "px");
}


function scrollDocumentDetails() {
    var containerWidth = $(".newscontainer").css("width");
    var containerHeight = $(".newscontainer").css("height");
    $("#documentDetailsWrapper").css("width", containerWidth)
    $("#documentDetailsScroller").css("width", containerWidth)
    $("#documentDetailsWrapper").css("height", containerHeight)

    documentDetailsScroll = new iScroll('documentDetailsWrapper', {
        vScrollbar:true,
        hScroll:false,
        momentum:true
    });
}


