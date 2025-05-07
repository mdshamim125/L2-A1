"use strict";
console.log("Hello World");
function formateString(input, toUpper) {
    if (toUpper) {
        return input.toUpperCase();
    }
    return input;
}
console.log(formateString("Hello", true));
