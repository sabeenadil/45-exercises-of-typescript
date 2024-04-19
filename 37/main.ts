//Making a function

function makeShirt (size: string = "Large", printMsg: string = "'I love Typescript'"){
    console.log(`Creating a ${size} size shirt with written ${printMsg} on it.`)
}

//Calling function by default values

makeShirt();

//calling function for medium size by default values

makeShirt("Medium");

//calling function with different message printing.
makeShirt("small", "'I love javascript'");