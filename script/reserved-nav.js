$(function() {
    //reserved nav btn click
    $("#reserved-btn").click(() => {
        if ($(".events").is(":visible")) {
            $(".events").hide();
            $("#events-list").hide();
        }

        const $nav = $(".reserved-nav");
        if ($nav.is("#start-nav")) {
            $nav.removeAttr("id");
            $nav.animate({
                width: "20%",
            });
        } else {
            $nav.animate({
                width: "toggle",
            });
        }
    });

    //////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////
    /////////////////////////////////////////////////////
});