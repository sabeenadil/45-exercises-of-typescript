var userNames = ["Umar", "Usman", "Arham", "Admin", "Ahmed"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, " would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, " Thankyou for logging in again."));
    }
});
