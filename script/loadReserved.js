$(document).ready(function() {
    //check for local storage expired

    //remove expired reservations

    //!
    //
    let json = "./formScripts/keysVariable.json";
    //
    //!
    $("#reserved-btn").click(function() {
        testExpired();
        //when data loads(amount off allowed reservations) pass to get the possible local storage keys
        //?data here is the obj returned from json data file 'keysVariable.json' witch contains the number of allowed reservations
        $.when(fetch(json)).then(function(data) {
            // console.log(data);
            let tableKeys;
            //if some problem with fetching number the use default value
            if (data.keysAmount > 0) {
                tableKeys = getKeysAmount(data.keysAmount);
            } else {
                tableKeys = getKeysAmount();
            }

            //get all local storage data with provided keys
            $.getScript("./formScripts/localStorage-out.js", () => {
                //get keys values

                //?this function
                let items = getLocalStorageToNav(tableKeys);
                //      console.log(items);

                //hide 'no reservations msg'
                if (items.length !== 0) {
                    //
                    let ReservedData = items.map((itemString) => {
                        return JSON.parse(itemString.storageContent);
                    });
                    // console.log(ReservedData);

                    //load all saved reservations in the menu
                    let htmlCont = ReservedData.map((data) => {
                        return ResLiElement(
                            data.num,
                            data.guests,
                            data.date,
                            data.hour,
                            data.minute
                        );
                    });
                    // alert(htmlCont);
                    htmlCont.join("");
                    $(".reserved-nav ul").html(htmlCont);

                    $("#delete-All-reservations-btn").show();
                    $("#search-reservations").hide();
                }
            });
        });

        ///////////////////////////
        //this function creates the possible keys
    });
});

function testExpired() {
    //those values have  objects of {key:key('table1...') , cont:json string} with unparsed object off all stored values in the local storage obj}
    //?from 'reserved-li-script.js'
    var values = getTableKeysAndValues_localStorage();
    let idsRemove = [];

    // console.log(values);

    //check for this website local storage
    values.forEach((val) => {
        let key = val.key;
        // ! if (key.includes("table")) { //no need for that (there is a function to get all tables)
        //   console.log(key);

        //parse to js objects
        let items = JSON.parse(val.cont);
        //get time to check if expired
        let hour = items.hour,
            minute = items.minute,
            date = items.date;

        let id = items.id;

        let d = new Date();
        //d.setDate(d.getDate() + 20);
        // console.log(d);

        date = new Date(date);

        date.setHours(hour);
        date.setMinutes(minute);

        if (d > date) {
            localStorage.removeItem(key);
            idsRemove.push(id);
        }
        // ! }
    });

    return idsRemove;
}

///////////////////////////////////////////////////////////////////////////////////////