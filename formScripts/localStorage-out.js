function getLocalStorageToNav(keys) {
    //all the returned data from local storage

    //console.log(keys);
    //? all the key are returned after fetching data from jason 'keysVariable' file and using a function that creates valid possible keys like 'table1'
    //////////////////////////
    //for each possible key we are CHECKING IF THE KEY EXISTS IN THE LOCALSTORAGE

    let definedKeys = keys.filter((key) => {
        let value;
        value = window.localStorage.getItem(key);
        if (value !== null) {
            return key;
        }
    });

    //gel all localStorage values as objects
    let values = definedKeys.map((key) => {
        let value;
        value = window.localStorage.getItem(key);

        //return all key:value pairs for local host keys
        return { keyId: key, storageContent: value };
    });
    // console.log(values);

    return values;
}