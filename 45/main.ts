function create_car(manufacturer, model, ...options){
// initializing a car object with manufacturer and model

let car = {
    manufacturer: manufacturer,
    model: model
};

//Add additional options for car
options.forEach(option =>{
    let [key, value] = option.split(":"); 
    car[key.trim()] = value.trim()
});
return car;
}

// call the function 

let my_car = create_car("Toyota", "Corrolla", "Color: Black", "Sunroof: True", "Year: 2023");
//print the variable to check it out;

console.log(my_car);