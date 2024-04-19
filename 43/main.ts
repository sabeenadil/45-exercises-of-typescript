
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

//making copy of original array through .slice
let copy_magician_name = magicians_names.slice();

//modify copied array to add the great before each magician name;

let copy_great_magicaian = make_great(copy_magician_name);

//show both arrays (original and copy);

//original
console.log("\n\t Original Array \t\n");
show_magicians(magicians_names);

//copied;
console.log("\n\t Copied Array \t\n")
show_magicians(copy_great_magicaian);