// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
monitorsListArray[0];
var monitorsList = [];
// End of monitorsListArray here

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    // Only change code below this line
    var newMonitorsList = [
        ["Apple"],
        ["Peach"],
        ["Berry"]
    ];

    return newMonitorsList;
    // Only change code above this line
}

console.log(myMonitorsFunction(monitorsList)); // Change this line
module.exports = myMonitorsFunction;