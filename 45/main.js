function create_car(manufacturer, model) {
    // initializing a car object with manufacturer and model
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //Add additional options for car
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function 
var my_car = create_car("Toyota", "Corrolla", "Color: Black", "Sunroof: True", "Year: 2023");
//print the variable to check it out;
console.log(my_car);
