
//define function to show magician name

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//function to write great before magician name through .map. It will modify array
function make_great(magicians: string[]){

   return magicians.map(name => `The Great ${name}`);
}

// Making array
let magicians_names = ["Umar", "Usman", "Arham"];

//call function to modifymagician names;
let great_magician = make_great(magicians_names);

//call function that shows modified list of magicians.
show_magicians(great_magician);