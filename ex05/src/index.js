// Only change code below this line
var myNestedArray = [
    ["Toblerone", 5],
    ["Milka", 3]
];
myNestedArray[0];

function myNestedFunction(arr) {
    var myNestedArray = [...arr];
    var myNestedArray = [
        ["Toblerone", 5],
        ["Milka", 3]
    ];

    return myNestedArray;
}
// Only change code above this line
console.log(myNestedFunction(myNestedArray)); // Change this line
module.exports = myNestedFunction;