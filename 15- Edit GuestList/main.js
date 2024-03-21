var GuestList = ["Mr & Mrs Farrukh", "Mr & Mrs.Anwer", "Mr.Munawwar", "Mr & Mrs Raheel"];
var NotComing = GuestList[0];
console.log(NotComing, "are not coming.");
GuestList.splice(0, 1, "Mr. Danish");
GuestList.forEach(function (guet) { return console.log("".concat(guet, " are cordially invited to join us for dinner today.")); });
