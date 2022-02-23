//show date
function outputDate(bookedDate) {
    var day = bookedDate.getDate();
    var weekday = bookedDate.toLocaleDateString("en", {
        weekday: "long",
    });
    //alert(day);

    //modify month format
    var mo = new Intl.DateTimeFormat("en", {
        month: "short",
    }).format(bookedDate);

    //input values to the msg about new reservation

    $("#reserved-date").html(
        "<span style='font-size:big; color:white'>" +
        weekday +
        "</span>" +
        ", " +
        mo +
        " " +
        day +
        "<span style='font-variant:small-caps'>th</span>"
    );
}

//show time
function outputTime(bookedHour, bookedMinute) {
    $("#reserved-time").html(
        "<span style='font-size:big; color:white'>" +
        bookedHour +
        ":" +
        bookedMinute +
        "</span>"
    );
}

//show guests
function outputGuests(bookedGuests) {
    $("#reserved-guests").html(bookedGuests);

    //show reservation confirmation block
    $("article#reserve-container").fadeOut(200, () => {
        $("article#reserved-container").fadeIn();
    });
}