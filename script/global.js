//GET ALL LOCAL STORAGE KEYS and values FUNC
function getAllLocalStorageItems() {
    var values = [],
        //get all localStorage keys
        keys = Object.keys(localStorage);

    //get all keys values
    for (let i = 0; i < keys.length; i++) {
        let cont = localStorage.getItem(keys[i]);
        values.push({
            cont: cont,
            key: keys[i],
        });
    }
    return values;
}

//those values have  objects of {key:local-storage-key , cont:json string} with unparsed object off all stored values in the local storage obj}
function getSpecificKeysAndValues_localStorage(values, keyIncludes) {
    let readyTable_Key_Cont = [];

    values.forEach((val) => {
        let key = val.key;
        let cont = val.cont;
        if (key.includes(keyIncludes)) {
            // console.log(values.cont);
            readyTable_Key_Cont.push({
                cont: cont,
                key: key,
            });
        }
    });
    return readyTable_Key_Cont;
}

//get the 'table' keys data
function getTableKeysAndValues_localStorage() {
    return getSpecificKeysAndValues_localStorage(
        getAllLocalStorageItems(),
        "table"
    );
}

//check if keys exist
//!function checkIfKeysExist(){}

///ket all permited keys
//used in 'loadReserved.js' and 'reservationAjax.js'
function getKeysAmount(data = 4) {
    const KEYS_AMOUNT = data;
    //alert(KEYS_AMOUNT);
    let keys = []; //['table1' , 'table2' , etc]
    for (let i = 1; i <= KEYS_AMOUNT; i++) {
        let key = "table" + i;
        keys.push(key);
    }
    return keys;
}

const HELLO = 4;

//1) fetch data
function fetch(json) {
    //alert("fetched");
    return $.getJSON(json);
}