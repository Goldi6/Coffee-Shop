$(function() {
    //#region Reserved nav open\close
    const $nav = $(".reserved-nav");
    $("#reserved-btn").click(() => {
        if ($(".events-wrap").is(":visible")) {
            // $(".events-wrap").hide();
            $("#events-list").hide();

            $(".events-wrap").css("opacity", 0).addClass("closed");
            $(".big-arrow").addClass("closed");
        }

        //!blinks
        // if ($nav.is("#start-nav")) {
        //     $nav.removeAttr("id");
        //     $nav.animate({
        //         width: "20em",
        //     });
        // } else {
        //     $nav.animate({
        //         width: "toggle",
        //     });
        // }
        if ($nav.is("#start-nav")) {
            $nav.removeAttr("id");
            $nav.fadeTo("slow", 1);
        } else {
            fadeOutRes_bar();
        }
    });

    function fadeOutRes_bar() {
        $nav.fadeTo("slow", 0);
        $nav.attr("id", "start-nav");
    }

    //#endregion

    //////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////
    /////////////////////////////////////////////////////
    //#region Events bar Close\Open
    //COMPLETE: blinking while opening and closing - FIXED
    // open/close events bar
    $("#events-btn").click(() => {
        $evWrap = $(".events-wrap");
        if ($(".reserved-nav").is(":visible")) {
            fadeOutRes_bar();
        }

        let fadeToVal = () => {
            if ($evWrap.hasClass("closed")) {
                $evWrap.removeClass("closed");
                console.log("d");
                return 1;
            } else {
                $evWrap.addClass("closed");
                return 0;
            }
        };
        $evWrap.fadeTo("slow", fadeToVal());

        //  this.toggle = !this.toggle;

        // $(".events-wrap")
        //     .stop()
        //     .fadeTo("slow", this.toggle ? 1 : 0);
        //  $(".events-wrap").fadeToggle("slow"); //!blinks

        if (
            $(".big-arrow").hasClass("closed") &&
            $(".events-wrap").css("opacity") == 0
        ) {
            $(".big-arrow").removeClass("closed");

            $("#events-list").slideDown();
        } else {
            $("#events-list").slideUp();
            $(".big-arrow").addClass("closed");
        }
    });
    //#endregion
    /////////////////////
});