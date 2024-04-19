//Define a function to print each magician name from array.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Define array containing magician names
var magician_name = ["umar", "Usman", "Arham"];
//calling function to print each magician name
show_magicians(magician_name);
