//Making array of countries and printing in original order;
let countriesToVisit: string[] = ["China", "Brazil", "Argentina"];

console.log("Original Array", countriesToVisit);

//Copying array and printing in alphabetical order without modifying the original array list;
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//showing our original array is still unchanged;

console.log("Showing original array is undistrubed", countriesToVisit);

//Reverse Order without modifying actual array list;
console.log("Reversed Order", [...countriesToVisit].reverse());

//showing our original array is still unchanged;
console.log("Showing original array is undistrubed", countriesToVisit);

//Reversing order in original array;
console.log("Original Array Reversed", countriesToVisit.reverse());

//Again reversing to get back original order;
console.log("Back To Original Order", countriesToVisit.reverse());

//Making original array in alphabetical order and printing;
console.log("Sorted In Alphabetical Order:", countriesToVisit.sort());

//Again reversing the sorted list;
console.log("Again Reversed The Sorted List:", countriesToVisit.reverse());
