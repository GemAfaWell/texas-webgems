"use strict";

let dt = new Date();

let m = dt.getMonth() + 1;
let d = dt.getDate();
let y = dt.getFullYear();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

setInterval(() => {
    let now = new Date();
    let h = now.getHours().toString().padStart(2, "0");
    let amOrPm = h >= 12 ? "PM" : "AM";
    h = (h % 12) || 12;
    let min = now.getMinutes().toString().padStart(2, "0");
    let s = now.getSeconds().toString().padStart(2, "0");
    let time = h + ":" + min + ":" + s + " " + amOrPm;
    document.getElementById("time").innerHTML = time;
}, 1000)


