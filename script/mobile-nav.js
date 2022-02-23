$(document).ready(function() {
    if (
        isTouchScreen &&
        matchMedia("only screen and (max-width: 900px)").matches
    ) {
        //close nav on touch screen
        $(".nav-btn").click(() => {
            $("#up").hide();
            $("#down").show();

            $(".nav-btns").fadeOut();
            $(".events-btns").fadeOut();
        });
    }
    if (
        isTouchScreen &&
        matchMedia("only screen and (max-width: 600px)").matches
    ) {
        if ($(".form-content").attr("display") == "grid") {
            $("body").attr("overflow", "hidden");
        } else {
            $("body").attr("overflow", "");
        }
    }

    ////////////////////////////
    /////////////////////////////////////////
    // mobile menu slider

    //touch down / open arrow
    $("#down").click(() => {
        $("#down").hide();
        $("#up").show();
        if ($(".nav-btns, .events-btns").css("visibility") == "hidden") {
            $(".nav-btns, .events-btns")
                .css("visibility", "visible")
                .toggle()
                .fadeIn("slow");
        } else {
            $(".nav-btns, .events-btns").fadeIn();
        }
    });

    //touch up / close arrow
    $("#up").click(() => {
        $("#up").hide();
        $("#down").show();

        $(".nav-btns").fadeOut();
        $(".events-btns").fadeOut();
    });
});