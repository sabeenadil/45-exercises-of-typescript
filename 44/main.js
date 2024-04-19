//Define a function with rest parameter that accept items arguments representing sandwich;
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now enjoy sandwich");
}
//call function 3 times with 3 different no. of arguments;
makeSandwich("chicken", "cheese", "mayo", "egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "lettuce", "tomato", "cheese", "egg");
