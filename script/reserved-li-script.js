//bounded to the created btn in the li elem
function clearLi(id) {
    // alert(id);
    let values = getTableKeysAndValues_localStorage();
    values.forEach((val) => {
        let cont = JSON.parse(val.cont);
        if (cont.num === id) {
            localStorage.removeItem(val.key);
        }
    });
    $("#" + id).remove();
    ///////////////////
    //    check again for existing keys
    values = getTableKeysAndValues_localStorage();
    //  console.log(values.length);
    //////////////////////
    //replace the cleared ul with original 'empty' content style of container
    if (values.length === 0) {
        deletedAllResLis();
    }
}

//TODO: cancel reservation function -> bind to the '.cancel-btn-li'
//upload li element (reservation nav)  //used in 'loadReserved.js' and 'reservationAjax.js'
function ResLiElement(num, guests, date, hour, minute, event, eventId) {
    return `<li data-eventId="${eventId}" id="${num}"><button class="clear-btn-li" onclick="clearLi(${num})"></button><button class="cancel-btn-li"></button><span class="relative li-tooltip-container"><span class="tooltip cancel-res-tooltip"></span></span><p class="event-li-output">${event}</p><p class="guests-invited">Table for:${guests}</p><p class="guest-time">${date} at ${hour}:${minute}</p></li>`;
}
//TODO: open another block to view full details

///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//!
//GENERAL//?
////////////////////////////////////////////////////

// //GET ALL 'TABLE' KEYS  //?functions from 'global.js'

//?USED ALSO IN 'loadReserved.JS'

////////////////////////////
//////////////////////////
//////////////////////////
/////////////////////////////
//clear local storage
$("#delete-All-reservations-btn").click(() => {
    window.localStorage.clear();
    let $element = $(
        "<div class='msg' id='cleared-msg' ><p style='padding:5px;'>All reservations cleared from you browser!</p><p style='font-size:small; color:coral;'>If you tried to cancel your table you should <a style='color:yellow;' class='caffee-tel' href='tel:123-456-7890'>call</a> to the restaurant because you only deleted the reminders from your browser!.<p/></div>"
    );

    if (!$(".reserved-nav").find("#cleared-msg").length) {
        $(".reserved-nav ul").html("");
        $(".reserved-nav").prepend($element);
        $("#reservation-delete-tooltip").hide();
    } else {
        $("#cleared-msg").remove();
        deletedAllResLis();
    }
});

function deletedAllResLis() {
    $(".reserved-nav").hide().attr("id", "start-nav");

    $("#search-reservations").show();
    $("#delete-All-reservations-btn").hide();
    $("#reservation-delete-tooltip").show();
    //$(".reserved-nav").hide();
}