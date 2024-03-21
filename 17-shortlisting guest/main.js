//Creating Guest List Array
var guestList = [
    "Mr & Mrs Farrukh",
    "Mr & Mrs.Anwer",
    "Mr.Munawwar",
    "Mr & Mrs Raheel",
];
// Making List for those who can't come
var notcoming = guestList[0];
console.log(notcoming, "are not coming");
// Add and Remove values from Guest List Array
guestList.splice(0, 1, "Mr.Danish");
// Message For Bigger Table
console.log("Good News! We have got a big table reservation");
//Adding new guest at starting
guestList.unshift("Sana");
//Adding new guest at ending
guestList.push("Tuba");
//Get a middle index for array
var middleIndex = Math.floor(guestList.length / 2);
// Adding new guest at middle
guestList.splice(middleIndex, 0, "Zoya");
console.log("Updating Guest List");
guestList.forEach(function (guest) {
    return console.log("".concat(guest, " you are invited to join us for dinner today."));
});
// Inviting only 2 guests;
console.log("Unfortunately, Big table is already reserved so, I just can invite 2 of you");
//Using while loop removing guests from array until 2 name remains;
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry!! ".concat(removedGuest, " You are not invited"));
}
//Invitation to last two names in array;
console.log("Invitation to remaining two guests");
guestList.forEach(function (remaining) {
    return console.log("".concat(remaining, " You are still invited for finner today."));
});
//Removing last two guests;
guestList.pop();
guestList.pop();
console.log("Empty List", guestList);
