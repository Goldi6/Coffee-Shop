$(function() {
    // open/close events bar
    $("#events-btn").click(() => {
        if ($(".reserved-nav").is(":visible")) {
            $(".reserved-nav").animate({
                    width: "toggle",
                },
                200
            );
        }
        $(".events").fadeToggle("slow");
        $("#events-list").slideToggle();
    });
    //////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    // scroll events

    //get item offset height and count list items minus (4) visible items
    var $height = $("#events-list li").outerHeight(true);
    var listItemsNum = $("#events-list li").length;

    let preventScrollingFire = false;

    //////////////////////////////////////////////////////////////

    var btnSectionsAmount = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--sections-amount");

    var btnSectionsAmount = Number(btnSectionsAmount);
    ///////
    function down() {
        if (nDown < listItemsNum - 4) {
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
});