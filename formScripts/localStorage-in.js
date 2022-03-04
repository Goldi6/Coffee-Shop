/////////////////////////////////////
function insertToLocalStorage(data, keys) {
    // let keys = ["table1", "table2", "table3", "table4", "table5", "table6"];

    exist = keys.map((key, index) => {
        if (window.localStorage.getItem(key) !== null) {
            return ([index] = key);
        } else {
            return ([index] = "empty");
        }
    });

    let free = false;

    let table = "";

    $.each(exist, (key, value) => {
        if (value == "empty") {
            table = key + 1;
            free = true;
            return false;
        } else {
            free = false;
        }
    });
    /////////////////////

    if (free && table > 0) {
        let id = "table" + table;
        let suffix = data.phone;
        suffix = suffix.substr(suffix.length - 4);
        let values = {
            name: data.name,
            guests: data.guests,
            date: data.date,
            hour: data.hour,
            minute: data.minute,
            num: data.id,
            suffix: suffix,
            event: data.event,
            eventId: data.eventId,
        };

        let value = JSON.stringify(values);
        window.localStorage.setItem(id, value);
        //  console.log(free + " key:" + id);
        return (free = true);
    } else {
        return (free = false);
    }
}