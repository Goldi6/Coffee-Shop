//get subscription value
var getUpdated;
if ($("#subscription").is(":checked")) {
    getUpdated = $("#subscription").val();
} else {
    getUpdated = "no";
}

//set form data
var formData = {
    name: $("#name").val(),
    email: $("#email").val(),
    phone: $("#phone").val(),
    hour: $("#hour").val(),
    minute: $("#minute").val(),
    date: $("#date").val(),
    guests: $("#guests").val(),
    subscription: getUpdated,
};

$.ajax({
        type: "post",
        url: "backend/processReservation/processReservation.php",
        data: formData,
        dataType: "json",
        encode: "true",
        beforeSubmit: function() {
            //check local storage for count
            //NEEDED?
        },
    })
    .done(function(data) {
        // console.log(data);
        if (!data.success) {
            let errors = data.errors;

            //!red light for errors
            $.each(errors, (key, err) => {
                $("#" + key).addClass("has-error");

                //basic errors
                if (key == "email" || key == "phone" || key == "name") {
                    $("#" + key).attr("placeholder", "*" + err);
                }
                //sabotage errors
                if (
                    key == "hour" ||
                    key == "minute" ||
                    key == "guests" ||
                    key == "subscription" ||
                    key == "date"
                ) {
                    //don't multiply err text
                    if (!($(".form-error span").text() == err)) {
                        $(".form-error").append($("<br><span>" + err + "</span>"));
                    }
                    $(".form-error").show();
                }
            });
        } else {
            //reset form

            $("#reserve-form").trigger("reset");

            // get posted date
            let bookedDate = new Date(data.date);
            let bookedHour = data.hour;
            let bookedMinute = data.minute;
            let bookedGuests = data.guests;

            $.getScript("formScripts/showClientReservation.js", () => {
                ///get the output for the client (Modal box)
                console.log("loaded storage");
                outputDate(bookedDate);
                outputTime(bookedHour, bookedMinute);
                outputGuests(bookedGuests);
            });
            ///////////////////////////////////////////////////////////////////////////////
            let json = "formScripts/keysVariable.json";

            //////////////////////////////////////////////////////////////

            // let keysAmount = getKeysAmount();
            $.when(fetch(json), data).then(function(key, data) {
                //?unlike in 'loadReserved.js' the the fetch() returns an array! so key[0] is the object from JSON file
                // console.log(key);
                //? let tableKeys = getKeysAmount(key[0].keysAmount);

                let tableKeys;
                //if some problem with fetching number then use default value
                if (key[0].keysAmount > 0) {
                    tableKeys = getKeysAmount(key[0].keysAmount);
                } else {
                    tableKeys = getKeysAmount();
                }

                ///////////////////////////////////////////
                // console.log(tableKeys);
                $.getScript("formScripts/localStorage-in.js", () => {
                    console.log("in loaded!");

                    //   console.log(tableKeys);
                    //take the amount off allowed reservations[keys] and the form data
                    //and check if there are free space, if yes then create local storage value fot the navigation output and canceling
                    let inserted = insertToLocalStorage(data, tableKeys);
                    //alert(inserted);
                    //if space full add an error to the ready reservation msg block
                    if (!inserted) {
                        $("#reserved-content-block").addClass("error");
                    }
                }).then(function() {
                    if (!$("#reserved-content-block").hasClass("error")) {
                        //if reservation made get it from local storage and add to the reserver menu;

                        $.getScript("formScripts/localStorage-out.js", () => {
                            console.log("out loaded!");
                            let items = getLocalStorageToNav(tableKeys);
                            //  console.log(items);
                            let reservationToAdd = items[items.length - 1];

                            let storageObject = JSON.parse(reservationToAdd.storageContent);
                            // let idKey = reservationToAdd.keyId;

                            //console.log(idKey);
                            //place reservation items in the reservations menu in thr nav bar!!
                            //LINK : this func returns ready html element from: 'reserved-li-script.js'
                            let element = ResLiElement(
                                storageObject.num,
                                storageObject.guests,
                                storageObject.date,
                                storageObject.hour,
                                storageObject.minute
                            );
                            $(".msg").hide();
                            $(".reserved-nav ul").append(element);
                            $("#delete-All-reservations-btn").show();
                        });
                    }
                });

                //end //show reservation confirmation block
            });
            //////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////
        }
    })
    ///end ajax .done
    .fail((ts) => {
        $(".form-error").show();
        alert("Could not reach server, please try again later");
        alert(ts.responseText);
    });