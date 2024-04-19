let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let ordinalNum of numbers){

    let ordinalEnding: string;
    if(ordinalNum ===1){
        ordinalEnding ="st"
    }

    else if(ordinalNum === 2){

        ordinalEnding = "nd"
    }

    else if(ordinalNum ===3){
        ordinalEnding = "rd"
    }
    else{
        ordinalEnding = "th"
    }
console.log(`${ordinalNum}${ordinalEnding}`);

}