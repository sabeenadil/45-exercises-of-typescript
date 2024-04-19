//define function to show magician name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to write great before magician name through .map. It will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Making array
var magicians_names = ["Umar", "Usman", "Arham"];
//call function to modifymagician names;
var great_magician = make_great(magicians_names);
//call function that shows modified list of magicians.
show_magicians(great_magician);
