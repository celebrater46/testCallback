"use strict";

let int1 = 0;
let int2 = 0;

// int1とint2を足し算する関数
const sum_int = () => {
    console.log(int1 + int2);
}

// int1とint2に値をセットする関数
const set_int = (a, b, callback) => {
    setTimeout(function(){
        int1 = a;
        int2 = b;
        callback();
    }, 1000);
}

// set_int(1, 2, sum_int);