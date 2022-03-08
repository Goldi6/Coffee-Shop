$(function() {
    //NOTE: FOLDER in which pages are located
    const FOLDER = "pages/";

    // load pages / navigation
    $(".navigation").click(function(e) {
        //get clean url
        const clean_url = window.location.href.split("?")[0];

        const url = new URL(clean_url);

        let page;

        // searchParameters_inUrl(url);

        //check Table for content pages
        //?if button has value with name of page ////witch will load the correct page
        if (this.hasAttribute("value")) {
            //all navigation (except logo/video-page) buttons have value with the name of the page
            let value = $(this).attr("value");

            //url addon to load the page
            page = FOLDER + value + ".html";

            //add ?page=page to the url
            url.searchParams.append("page", value);

            //remove the full class which needed for the video page
            $("main").removeClass("full");

            //remove 'active' class from any navigation button
            $(".navigation").removeClass("active");
            //add to the current clicked button
            $(this).addClass("active");

            //change the id of the main that contains all pages content //?made for the menu script
            $("main").attr("id", value);
        } else {
            //set index/video page
            page = FOLDER + "video.html";
            $("main").addClass("full");
            $("main").attr("id", "full");
            $(".reserved-nav , .events-wrap").hide();
            $("#events-list").slideUp();
        }
        $("main").load(page);

        window.history.replaceState({}, document.title, url);

        //remove print btn
        if (page !== "menu.html") {
            $(".print").hide();
        }

        $("html, body").animate({
                scrollTop: 0,
            },
            1
        );
    });

    // get all pages values
    const pageValues = [];
    $(".navigation.nav-btn").each(function() {
        pageValues.push($(this).attr("value"));
    });
    // loadPages from history
    pageValues.map(function(name) {
        if (window.location.href.indexOf("page=" + name) > 0) {
            $("main").load(FOLDER + name + ".html");
            $("main").removeClass("full");

            //?load menu from history
            if (name === "menu") {
                //if btn-has this class the page loads!
                $("#menu-btn").addClass("active");
            }
        }
    });
});