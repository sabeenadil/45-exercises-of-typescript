let GuestList = ["Mr & Mrs Farrukh", "Mr & Mrs.Anwer", "Mr.Munawwar", "Mr & Mrs Raheel"];
let NotComing = GuestList[0];
console.log(NotComing, "are not coming.");

GuestList.splice(0,1, "Mr. Danish");

GuestList.forEach(guet => console.log(`${guet} are cordially invited to join us for dinner today.`));