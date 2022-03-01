$(function() {
    //////////////////////////////////////////////////////////////
    //how many li items are shown

    //count how many shown li's are in the events sect
    const btnSectionsAmount = () => {
        const cssVar_Amount = getComputedStyle(
            document.documentElement
        ).getPropertyValue("--sections-amount");
        return Number(cssVar_Amount);
    };

    //get li item offset height
    var $height = $("#events-list li").outerHeight(true);

    ///////

    //NOTE:close /open events list items
    //#region Slide on big arrow
    var open = false;
    $(".big-arrow").click(() => {
        if ($(".big-arrow").hasClass("closed")) {
            //$("#events-list").slideDown();//!flickers

            slideDownCustom("#events-list");

            $(".arrow").css("cursor", "pointer");
            $(".big-arrow").removeClass("closed");

            open = true;
        } else {
            $("#events-list").slideUp();
            $(".arrow").css("cursor", "default");
            $(".big-arrow").addClass("closed");
            open = false;
        }
    });

    //replacing the slideDown()
    function slideDownCustom(el) {
        //get height of the items menu
        const ulHeight = () => {
            return $height * btnSectionsAmount();
        };

        var $elem = $(el);
        let h = ulHeight() + "px";
        console.log(h);

        $elem.css({ height: 0, display: "block" });

        $elem.animate({
                height: h,
            },
            1000
        );
    }
    //#endregion

    //////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //COMPLETE: scroll events
    //#region scrolling and next\prev

    // count list items minus  visible items
    var listItemsNum = $("#events-list li").length;

    let preventScrollingFire = false;

    //////////////////////////////

    //arrows and scrolling functions for ul section
    ////////
    function down() {
        if (nDown < listItemsNum - btnSectionsAmount()) {
            nDown++;
            $("#events-list").animate({
                    scrollTop: $height * nDown,
                },
                100
            );
        }
    }
    /////////////////////////////////////////////////////////////
    function up() {
        if (nDown > 1) {
            nDown--;

            $("#events-list").animate({
                    scrollTop: $height * nDown,
                },
                100
            );
        } else if (nDown == 1) {
            nDown = 0;
            $("#events-list").animate({
                    scrollTop: 0,
                },
                100
            );
        }
    }
    /////////////////////////////////////////////////

    var nDown = 0;

    //arrows click

    $("#events-down-arrow").click(() => {
        preventScrollingFire = true;
        down();
        //  console.log(nDown);
    });

    $("#events-up-arrow").click(() => {
        preventScrollingFire = true;

        up();
        //  console.log(nDown);
    });

    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    //determine visible item

    const isVisible = function(ele, container) {
        const eleTop = ele.offsetTop;
        const eleBottom = eleTop + ele.clientHeight;

        const containerTop = container.scrollTop;
        const containerBottom = containerTop + container.clientHeight;

        // The element is fully visible in the container
        return (
            (eleTop >= containerTop && eleBottom <= containerBottom) ||
            // Some part of the element is visible in the container
            (eleTop < containerTop && containerTop < eleBottom) ||
            (eleTop < containerBottom && containerBottom < eleBottom)
        );
    };

    //////////////////////////////////////////////////

    let cont = document.querySelector("#events-list");
    let listItems = cont.querySelectorAll("li");

    //while scrolling the box set the correct position for the buttons

    function count() {
        if (!preventScrollingFire || $(this).is(":hover")) {
            // add class to all visible item to select the first items and get the ordered number of item to set nDown variable
            listItems.forEach(function(item) {
                if (isVisible(item, cont)) {
                    item.classList.add("visible");
                } else {
                    item.classList.remove("visible");
                }
            });
            let visible = document.querySelectorAll(".visible");
            //must me 4 visible elements!
            if (visible.length > 4) {
                visible[0].classList.remove("visible");
            }

            //get the place of the first element in the 'visible' list out of 'li' items
            nDown = indexof(listItems, visible[0]) + 2;
            if (nDown == 2) {
                nDown = 0;
            }
            // console.log(nDown);
        }
    }

    //get the index of first visible item ^^^
    function indexof(collection, node) {
        for (var i = 0; i < collection.length; i++) {
            if (collection[i] === node) {
                return i;
            }
        }
    }
    /////////////////////////////////////////////////////////////////////
    //set wheel scroll to one element each time

    cont.addEventListener("wheel", checkScrollDirection);
    count();

    function checkScrollDirection(event) {
        event.preventDefault();
        if (checkScrollDirectionIsUp(event)) {
            up();
            console.log("UP");
        } else {
            down();
            console.log("Down");
        }
    }

    function checkScrollDirectionIsUp(event) {
        if (event.wheelDelta) {
            return event.wheelDelta > 0;
        }
        return event.deltaY < 0;
    }

    //#endregion
});