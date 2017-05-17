var fs = require("fs");
var moment = require("moment");

const MAPPING = {
    "Abend": "Soirée",
    "Nachmittag": "Matinée",
};

var data = fs.readFileSync("./data.log", "utf8");
var shows = JSON.parse(data)["shows"];

var out = {};
Object.keys(shows).forEach((date) => {
    var unix = moment(date, "DD.MM.YYYY").unix();

    if(typeof out[unix] === "undefined") {
        out[unix] = [];
    }

    Object.keys(shows[date]).forEach((show) => {
        out[unix].push({
            "date": date,
            "unix": unix,
            "place": "Stuttgart",
            "time": MAPPING[show],
            "cast": shows[date][show],
        });
    });
});

fs.writeFile("data.log.converted", JSON.stringify(out, null, 4), (err) => {
    if (err) {
        throw err;
    }
});
