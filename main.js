"use strict";

let test = null;

// int1とint2を足し算する関数
const sum_int = (str) => {
    console.log(str);
}

// int1とint2に値をセットする関数
const set_int = (callback) => {
    setTimeout(function(){
        test = "after 1 sec";
        callback(test);
    }, 1000);
}

// set_int(1, 2, sum_int);