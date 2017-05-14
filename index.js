var Crawler = require("crawler");
var moment = require("moment");

const DATE_FORMAT = "DD.MM.YYYY";

var crawler = new Crawler({
    /* Delay in milliseconds between requests */
    rateLimit: 1000,

    callback: function (err, res, done) {
        if (err) {
            console.log(err);
            return done();
        }

        var showDate = moment(res.request.headers["ShowDate"], DATE_FORMAT),
            show = res.request.headers["Show"];

        if (res.body.includes("Zum gewählten Zeitpunkt lief")
            || res.body.includes("Für dieses Datum liegen leider keine Informationen zur Besetzung vor")
            || res.body.includes("An diesem Tag fand keine Vorstellung statt")) {

            console.log("No cast found for " + showDate.format(DATE_FORMAT) + " / " + show);
            return done();
        }

        var $ = res.$;
        
        var $castList = $("td[align='right']:contains('Graf von Krolock')").parent().parent();
        $castList.children().each(function (i, el) {
            var $el = $(el);
            if ($el.children().length != 3) {
                return;
            }

            var role = $($el.children()[0]).text(),
                actor = $($el.children()[2]).text();
            console.log(showDate.format(DATE_FORMAT) + " / " + show + " – " + role + " = " + actor);
        });

        done();
    }
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

// TODO FIXME
//const startDate = moment("17.03.2000", "DD.MM.YYYY");
//const endDate = moment("01.01.2007", "DD.MM.YYYY");

const startDate = moment("27.03.2001", DATE_FORMAT);
const endDate = moment("30.03.2001", DATE_FORMAT);

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
