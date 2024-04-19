//creating array for current users
let currentUsers = ["Danish", "Sana", "Tuba", "Zoya"]

//creating array for new users
let newUsers = ["SANA", "Farrukh", "Usman", "Tuba"]

//loop for new users to check availability

newUsers.forEach(newOneUser => {

let ourCondition = currentUsers.some(currentOneUser => currentOneUser.toLowerCase() === newOneUser.toLowerCase())
    if(ourCondition){
        console.log(`Sorry ${newOneUser} already exist.`)
    }

    else{

        console.log(`User name ${newOneUser} is available.`)
    }

});