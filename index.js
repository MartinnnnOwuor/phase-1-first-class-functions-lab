// Code your solution in this file!

//declare a global scope array called names;

const names = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// define function returnFirstTwoDrivers and assign it to ();

const returnFirstTwoDrivers = function (names) {

    return names.slice (0, 2);
}

console.log (returnFirstTwoDrivers(names));

// declare a function returnLastTwoDrivers and assign ();

const returnLastTwoDrivers = (names) => {

    return names.slice(-2);
}
console.log (returnLastTwoDrivers(names));

// since the 1 and 2 parent functions were declared, add them in array selectingDrivers as items;

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// declare createFareMultiplier;

const createFareMultiplier = fareNumber => {

    //should return another function, in this case fareNumber2
    // fareNumber2 will be multiplied by the integer fareNumber
    return fareNumber2 => fareNumber * fareNumber2;
    

}
// can store createFareMultiplier so whenever it's called it will execute in console.log
// can be stored in new variable;

let result = createFareMultiplier(4);
console.log (result);

// create a function that doubles the fare;

const fareDoubler = createFareMultiplier(2);

// create a function that tripples the fare;
const fareTripler = createFareMultiplier(3);

// creating a function and assigning it 2 parameters/ arguments and returning 1;

const selectDifferentDrivers = (names, selectingDrivers) => selectingDrivers(names);

console.log (selectDifferentDrivers(names, returnFirstTwoDrivers));
console.log (selectDifferentDrivers(names, returnLastTwoDrivers));

