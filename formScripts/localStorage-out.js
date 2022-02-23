function getLocalStorageToNav(keys) {
    //all the returned data from local storage

    //console.log(keys);
    //? all the key are returned after fetching data from jason 'keysVariable' file and using a function that creates valid possible keys like 'table1'
    //////////////////////////
    //for each possible key we are CHECKING IF THE KEY EXISTS IN THE LOCALSTORAGE
    let values = keys.map((key) => {
        let value;
        value = window.localStorage.getItem(key);
        if (value !== null) {
            //if key is not null then it exists in local storage
            return { keyId: key, storageContent: value };
        } else return;
    });

    //get and return all existing 'table' keys
    let defined = [];
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== undefined) {
            defined.push(values[i]);
        }
    }

    return defined;
}