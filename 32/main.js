//creating array for current users
var currentUsers = ["Danish", "Sana", "Tuba", "Zoya"];
//creating array for new users
var newUsers = ["SANA", "Farrukh", "Usman", "Tuba"];
//loop for new users to check availability
newUsers.forEach(function (newOneUser) {
    var ourCondition = currentUsers.some(function (currentOneUser) { return currentOneUser.toLowerCase() === newOneUser.toLowerCase(); });
    if (ourCondition) {
        console.log("Sorry ".concat(newOneUser, " already exist."));
    }
    else {
        console.log("User name ".concat(newOneUser, " is available."));
    }
});
