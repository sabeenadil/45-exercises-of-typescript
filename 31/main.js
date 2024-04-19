var userNames = ["Umar", "Usman", "Arham", "Admin", "Ahmed"];
userNames = [];
if (userNames.length === 0) {
    console.log("You need to find some users as array is empty.");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, " would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, " Thankyou for logging in again."));
        }
    });
}
;
