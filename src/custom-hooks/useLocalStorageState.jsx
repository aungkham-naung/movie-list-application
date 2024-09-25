import { useState, useEffect } from "react";

export default function useLocalStorageState(initialValue, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key); //callback function gets data from locale stoage using a key
    if (storedValue) return JSON.parse(storedValue);
    else return initialValue;
    // return storedValue ? JSON.parse(storedValue) : initialValue; //return JSOn of the data
  });

  //storing data to locale storage
  useEffect(
    //also allows for sync between "wactched -state" and the localestorage
    //therefore we don't have to write a separate 'delete' code if we were to have to removed from locale storage
    function () {
      localStorage.setItem(key, JSON.stringify(value)); //needs a key, and storage data needs to be in string
    },
    [value, key]
  );

  return [value, setValue];
}
