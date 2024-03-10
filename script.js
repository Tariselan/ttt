document.addEventListener("DOMContentLoaded", function () {
    var tableContainer = document.getElementById("table-container");
    if (!tableContainer)
        return; // Check if tableContainer exists
    var tableHTML = "<table>";
    // Adjust the number of rows and columns as per your requirement
    var rows = 14;
    var cols = 14;
    // Generate the table
    for (var i = 0; i < rows; i++) {
        tableHTML += "<tr>";
        for (var j = 0; j < cols; j++) {
            tableHTML += "<td></td>";
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";
    tableContainer.innerHTML = tableHTML;
});
var conversion = new Map([
    ['0', 'A'],
    ['1', 'B&#9839;'],
]);
var x = conversion.keys();
