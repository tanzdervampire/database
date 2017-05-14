var Crawler = require("crawler");
var moment = require("moment");
const util = require('util');

const DATE_FORMAT = "DD.MM.YYYY";

var data = {
    "roles": {},
    "actors": {},
    "shows": {}
};

/* A mapping of typo'd actor names to the correct one. */
const ACTORS = {
    "arc Bollmeyer": "Marc Bollmeyer",
    "Bollmeyer": "Marc Bollmeyer",
    "anni Viscusi": "Vanni Viscusi",
    "téphane Le Breton": "Stéphane Le Breton",
    "téphane le Breton": "Stéphane Le Breton",
    "téphan Le Breton": "Stéphane Le Breton",
    "N.N.": "",
    "ary Jackman": "Gary Jackman",
    "Gary Jachman": "Gary Jackman",
    "ary Jackmann": "Gary Jackman",
    "ric Thomé": "Eric Thomé",
    "Tarte": "Kevin Tarte",
    "poslovski": "Stefan Poslovski",
    "köhler": "Barbara Köhler",
    "sbano": "James Sbano",
    "boekema": "Debby Boekema",
    "preston": "Alyssa Preston",
    "mülner": "Thomas Mülner",
    "helm": "Kai Helm",
    "le breton": "Stéphane Le Breton",
    "büttner": "Dominik Büttner",
    "Thomé": "Eric Thomé",
    "doneda": "Tiziana Doneda",
    "Doneda": "Tiziana Doneda",
    "maynard": "Liane Maynard",
    "Berger": "Martin Berger",
    "Kohler": "Norbert Kohler",
    "shaki-pätzoldt": "Marjan Shaki-Pätzoldt",
    "jackman": "Gary Jackman",
    "tarte": "Kevin Tarte",
    "Köhler": "Barbara Köhler",
    "Sbano": "James Sbano",
    "Boekema": "Debby Boekema",
    "Preston": "Alyssa Preston",
    "Mülner": "Thomas Mülner",
    "Helm": "Kai Helm",
    "Büttner": "Dominik Büttner",
    "Huisman": "Margherita Huisman",
    "Werum": "Adrian Werum",
    "Jessie Roggeman": "Jessie Roggemann",
    "Rogemann", "Jessie Rogemann",
    "Klotz", "Thomas Klotz",
    "Bollmeyer", "Marc Bollmeyer",
    "Bowien", "Carsten Bowien",
    "Hill": "Natascha-Cecillia Hill",
    "Breton": "Stephané Le Breton",
    "Bourg": "Ian Jon Bourg",
    "Robert. D. Marx": "Robert D. Marx",
    "Marx": "Robert D. Marx",
    "Bulsing": "Rutger Bulsing",
    "Bühring": "Andreas Bühring",
    "Baltus": "Cornelius Baltus",
    "Arnold": "Fawn Arnold",
    "Merchant": "Jan Merchant",
    "Marx": "Robert D. Marx",
    "Büdenbender": "Stefan Büdenbender",
    "Moll": "Torsten Moll",
    "huisman": "Margherita Huisman",
    "pol": "Jacqueline van der Pol",
    "werum": "Adrian Werum",
    "Paumgarten": "Christian Paumgarten",
    "Furtner": "Marion Furtner",
    "Le Breton": "Stephané Le Breton",
    "Pol": "Jacqueline van der Pol",
    "Wünsch": "Bernhard Wünsch",
    "Wickerts": "Frederik Wickerts",
    "Loss": "Steven Loss",
    "Hudson": "Kevin Hudson",
    "Kienast": "Thomas Kienast",
    "hudson": "Kevin Hudson",
    "breton": "Stephané Le Breton",
    "Szymanska": "Dominika Szymanska",
    "Roggemann": "Jessie Roggemann",
    "Hill": "Natascha-Cecillia Hill",
    "Gressley": "Patricia Gressley",
    "Bowien": "Carsten Bowien",
    "Nowacki": "Espen Nowacki",
    "Husiman": "Margherita Huisman",
    "Dressel": "Matthias Dressel",
    "Maynard": "Liane Maynard",
    "Brückner": "Christina Brückner",
    "Stassen": "Peter Stassen",
    "Trauth": "Christoph Trauth",
    "bollmeyer": "Marc Bollmeyer",
    "wünsch": "Bernhard Wünsch",
    "Wegberg": "Carl van Wegberg",
    "Arnolds": "Fawn Arnold",
    "Edenborn": "Mathias Edenborn",
    "Lexfors": "Frederik Lexfors",
    "Klotz": "Thomas Klotz",
    "bowien": "Carsten Bowien",
    "Meder": "Nikolaus Meder",
    "Bühring": "Andreas Bühring",
    "Marx": "Robert D. Marx",
    "Kazlauskas": "Ben Kazlauskas",
    "Gerson": "Tzipporah Gerson",
    "Huson": "Kevin Hudson",
    "Nicholson": "Michael Nicholson",
    "Mezöfi": "Gabriella Mezöfi",
    "van der Pol": "Jacqueline van der Pol",
    "Margherita Huismann": "Margherita Huisman",
    "Veneman": "Danielle Veneman",
    "Biggs": "Jacquie Biggs",
    "Heim": "Oliver Heim",
    "Danielle Venemann": "Danielle Veneman",
    "AdrianWerum": "Adrian Werum",
    "Ben Kaslauskas": "Ben Kazlauskas",
    "Veenendaal": "Jurko van Veenendaal",
    "Reichwein": "Tim Reichwein",
    "Tscherne": "Gregor Tscherne",
    "Thrower": "John Thrower",
    "Thorén": "Anna Thorén",
    "Dtephanie Tschöppe": "Stephanie Tschöppe",
    "John  Thrower": "John Thrower",
    "Aleksander di Capri": "Alexander di Capri",
    "Jerzy Jezke": "Jerzy Jeszke",
    "Alexander Di Capri": "Alexander di Capri",
    "Kim Boysen": "Kym Boysen",
    "Stefan Poslovskik": "Stefan Poslovski",
    "Franziska Foster": "Franziska Forster"
};

var crawler = new Crawler({
    /* Delay in milliseconds between requests */
    rateLimit: 50,

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

            /* Let's normalize the role a bit. */
            if (role === "Solotänzerin" || role === "Solotänzerinnen") {
                role = "Solotänzer";
            }

            /* … and the same for actors due to a lot of typos */
            actors = actors.map((actor) => {
                return ACTORS[actor] || actor;
            });

            actors = actors.split(/\s*,\s*/);

            data["roles"][role] = (data["roles"][role] + 1) || 1;
            actors.forEach((actor) => {
                data["actors"][actor] = (data["actors"][actor] + 1) || 1;
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
