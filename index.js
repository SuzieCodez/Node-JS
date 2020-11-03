var xlsx = require("xlsx");
var rf = xlsx.readFile("SampleData.xlsx");
var ws = rf.Sheets["SalesOrders"];
var data = xlsx.utils.sheet_to_json(ws);
//console.log(data);
var newData = data.map(function(rec) {
    if (rec.Units < 50)
        rec.UnitsLessThan50 = rec.Units;
    delete rec.Region;
    return rec;
});
var newWB = xlsx.utils.book_new();
var newWS = xlsx.utils.json_to_sheet(newData);
xlsx.utils.book_append_sheet(newWB, newWS, "New Data added");
xlsx.writeFile(newWB, "New SampleData.xlsx");