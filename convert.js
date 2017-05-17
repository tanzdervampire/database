var fs = require("fs");

const MAPPING = {
    "Abend": "Soirée",
    "Nachmittag": "Matinée",
};

var data = fs.readFileSync("./data.log", "utf8");
var shows = JSON.parse(data)["shows"];

var out = {};
Object.keys(shows).forEach((date) => {
    if(typeof out[date] === "undefined") {
        out[date] = [];
    }

    Object.keys(shows[date]).forEach((show) => {
        out[date].push({
            "date": date,
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
