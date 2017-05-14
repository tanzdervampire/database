var Crawler = require("crawler");
var moment = require("moment");
const util = require('util');

const DATE_FORMAT = "DD.MM.YYYY";

var data = {
    "roles": {},
    "actors": {},
    "shows": {}
};

var crawler = new Crawler({
    /* Delay in milliseconds between requests */
    rateLimit: 100,

    callback: function (err, res, done) {
        if (err) {
            console.log(err);
            return done();
        }

        var showDate = res.request.headers["ShowDate"],
            show = ["Abend", "Nachmittag"][+res.request.headers["Show"]];

        console.log("Received response for " + showDate + " / " + show);
        if (res.body.includes("Zum gewählten Zeitpunkt lief")
            || res.body.includes("Für dieses Datum liegen leider keine Informationen zur Besetzung vor")
            || res.body.includes("An diesem Tag fand keine Vorstellung statt")) {

            return done();
        }

        var $ = res.$;
        
        var $castList = $("td[colspan='3']:contains('Besetzung am')").parent().parent();
        var lastRole;
        $castList.children().each(function (i, el) {
            var $el = $(el);

            /* Ignore if it doesn't have three <td>s */
            if ($el.children().length != 3) {
                return;
            }

            var role = $($el.children()[0]).text().trim() || lastRole,
                actors = $($el.children()[2]).text().trim();

            actors = actors.split(/\s*,\s*/);

            data["roles"][role] = data["roles"][role] + 1 || 0;
            actors.forEach((actor) => {
                data["actors"][actor] = data["actors"][actor] + 1 || 0;
            });

            data["shows"][showDate] = data["shows"][showDate] || {};
            data["shows"][showDate][show] = data["shows"][showDate][show] || {};
            data["shows"][showDate][show][role] = data["shows"][showDate][show][role] || [];

            data["shows"][showDate][show][role].push(actors);

            /* Memorize the last role we've seen as sometimes the role isn't repeated. */
            lastRole = role;
        });

        done();
    }
});

crawler.on("drain", function () {
    console.log(util.inspect(data, {
        showHidden: false,
        depth: null
    }));
});

function toUrl(date, show) {
    var url = "http://www.tanz-der-vampire.de/livecast.php4";
    url += "?day=" + date.format("D");
    url += "&mon=" + date.format("M");
    url += "&year=" + date.format("YYYY");
    url += "&time=" + show;
    /* livecast.php4 needs this, but doesn't actually evaluate the session */
    url += "&sess=x";

    return url;
}

const startDate = moment("17.03.2000", "DD.MM.YYYY");
const endDate = moment("01.01.2007", "DD.MM.YYYY");

var currentDate = startDate;
while (currentDate.diff(endDate) < 0) {
    crawler.queue([
        {
            uri: toUrl(currentDate, 0),
            headers: {
                "ShowDate": currentDate.format(DATE_FORMAT),
                "Show": 0
            }
        },
        {
            uri: toUrl(currentDate, 1),
            headers: {
                "ShowDate": currentDate.format(DATE_FORMAT),
                "Show": 1
            }
        }
    ]);

    currentDate = currentDate.add(1, "days");
}
