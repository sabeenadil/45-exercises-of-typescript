//Making a function
function makeShirt(size, printMsg) {
    if (size === void 0) { size = "Large"; }
    if (printMsg === void 0) { printMsg = "'I love Typescript'"; }
    console.log("Creating a ".concat(size, " size shirt with written ").concat(printMsg, " on it."));
}
//Calling function by default values
makeShirt();
//calling function for medium size by default values
makeShirt("Medium");
//calling function with different message printing.
makeShirt("small", "'I love javascript'");
