$(function() {
    const folder = "pages/";

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
            let value = $(this).attr("value");
            page = folder + value + ".html";
            url.searchParams.append("page", $(this).attr("value"));
            $("main").removeClass("full");

            $(".navigation").removeClass("active");
            $(this).addClass("active");

            $("main").attr("id", value);
        } else {
            //set index/video page
            page = folder + "video.html";
            $("main").addClass("full");
            $("main").attr("id", "full");
            $(".reserved-nav , .events").hide();
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
            $("main").load(folder + name + ".html");
            $("main").removeClass("full");

            //?load menu from history
            if (name === "menu") {
                //if btn-has this class the page loads!
                $("#menu-btn").addClass("active");
            }
        }
    });
});