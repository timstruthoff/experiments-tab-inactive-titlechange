window.addEventListener("load", function () {

    window.tabInactiveTitlechange = {};

    tabInactiveTitlechange.currentPage = "Home"

    tabInactiveTitlechange.hidden = function () {
        console.log("hidden");
        document.title = "Tim Struthoff";
    };

    tabInactiveTitlechange.visible = function () {
        console.log("visible");


        document.title = "Home";



        //document.title = "TS/" + tabInactiveTitlechange.currentPage;
    };

    (function () {
        var hidden = "hidden";

        // Standards:
        if (hidden in document)
            document.addEventListener("visibilitychange", onchange);
        else if ((hidden = "mozHidden") in document)
            document.addEventListener("mozvisibilitychange", onchange);
        else if ((hidden = "webkitHidden") in document)
            document.addEventListener("webkitvisibilitychange", onchange);
        else if ((hidden = "msHidden") in document)
            document.addEventListener("msvisibilitychange", onchange);
        // IE 9 and lower:
        else if ("onfocusin" in document)
            document.onfocusin = document.onfocusout = onchange;
        // All others:
        else
            window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onchange;

        function onchange(evt) {
            var evtMap = {
                focus: false,
                focusin: false,
                pageshow: false,
                blur: true,
                focusout: true,
                pagehide: true
            };

            evt = evt || window.event;
            if (evt.type in evtMap) {
                console.log("evt.type in evtMap")
                if (evtMap[evt.type] === true) {
                    tabInactiveTitlechange.hidden();
                } else if (evtMap[evt.type] === false) {
                    console.log("2");
                    tabInactiveTitlechange.visible();
                } else {
                    tabInactiveTitlechange.visible();
                }

            } else {
                if (this[hidden] === true) {
                    tabInactiveTitlechange.hidden();
                } else {
                    tabInactiveTitlechange.visible();
                }

                document.body.className = this[hidden] ? "hidden" : "visible";
            }


        }

        // set the initial state (but only if browser supports the Page Visibility API)
        if (document[hidden] !== undefined)
            onchange({
                type: document[hidden] ? "blur" : "focus"
            });
    })();

});
