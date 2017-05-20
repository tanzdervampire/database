const fs = require('fs');
const moment = require('moment');
const sql = require('sql.js');

var raw = JSON.parse(fs.readFileSync('crawled.json', 'utf8'));
let db;

/* Set up tables */
(function () {
    db = new sql.Database();

    db.run('CREATE TABLE PRODUCTION (ID INTEGER PRIMARY KEY AUTOINCREMENT, START DATE DEFAULT NULL, END DATE DEFAULT NULL, LOCATION TEXT NOT NULL, THEATER TEXT DEFAULT NULL);');
    db.run('CREATE TABLE PERSON (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AVATAR TEXT DEFAULT NULL);');
    db.run('CREATE TABLE CAST (SHOW_ID INTEGER NOT NULL, ROLE TEXT NOT NULL, PERSON_ID INTEGER NOT NULL);');
    db.run('CREATE TABLE SHOW (ID INTEGER PRIMARY KEY AUTOINCREMENT, PRODUCTION_ID INTEGER NOT NULL, DAY DATE NOT NULL, TIME TEXT NOT NULL, TYPE TEXT NOT NULL);');
})();


/* Write productions */
const productions = [
    [
        '1997-10-04' + ' 00:00:00.000',
        '2000-01-15' + ' 00:00:00.000',
        'Wien',
        'Raimund Theater',
    ],
    [
        '2000-03-31' + ' 00:00:00.000',
        '2003-08-31' + ' 00:00:00.000',
        'Stuttgart',
        'Apollo-Theater',
    ],
    [
        '2003-12-07' + ' 00:00:00.000',
        '2006-01-22' + ' 00:00:00.000',
        'Hamburg',
        'Theater Neue Flora',
    ],
    [
        '2006-12-10' + ' 00:00:00.000',
        '2008-03-30' + ' 00:00:00.000',
        'Berlin',
        'Theater des Westens',
    ],
    [
        '2008-11-07' + ' 00:00:00.000',
        '2010-01-31' + ' 00:00:00.000',
        'Oberhausen',
        'Metronom-Theater',
    ],
    [
        '2009-09-16' + ' 00:00:00.000',
        '2011-06-25' + ' 00:00:00.000',
        'Wien',
        'Ronacher',
    ],
    [
        '2010-02-25' + ' 00:00:00.000',
        '2011-10-16' + ' 00:00:00.000',
        'Stuttgart',
        'Palladium-Theater',
    ],
    [
        '2011-11-14' + ' 00:00:00.000',
        '2013-08-25' + ' 00:00:00.000',
        'Berlin',
        'Theater des Westens',
    ],
    [
        '2016-04-24' + ' 00:00:00.000',
        '2016-09-25' + ' 00:00:00.000',
        'Berlin',
        'Theater des Westens',
    ],
    [
        '2016-10-28' + ' 00:00:00.000',
        '2017-01-15' + ' 00:00:00.000',
        'München',
        'Deutsches Theater München',
    ],
    [
        '2017-01-26' + ' 00:00:00.000',
        '2017-09-03' + ' 00:00:00.000',
        'Stuttgart',
        'Palladium-Theater',
    ],
];

productions.forEach((production) => {
    db.run('INSERT INTO PRODUCTION (START, END, LOCATION, THEATER) VALUES (?, ?, ?, ?);', production);
});

/* Write persons */
Object.keys(raw['actors']).forEach((actor) => {
    if (!actor.trim()) {
        return;
    }

    db.run(
        'INSERT INTO PERSON (NAME) VALUES (?);', [actor]
    );
});

const dbProductions = db.exec('SELECT * FROM PRODUCTION');
const dbPersons = db.exec('SELECT * FROM PERSON');

let getProductionId = function (date) {
    const showDate = moment(date, 'DD.MM.YYYY');
    let _ = (column) => {
        return dbProductions[0]['columns'].indexOf(column);
    };

    for (let i = 0; i < dbProductions[0]['values'].length; i++) {
        const production = dbProductions[0]['values'][i];

        if (production[_('LOCATION')] === 'Wien') {
            /* This database contains nothing from Wien. */
            continue;
        }

        const startDate = moment(production[_('START')], 'YYYY-MM-DD HH:mm:ss.SSS');
        const endDate = moment(production[_('END')], 'YYYY-MM-DD HH:mm:ss.SSS');

        if (!showDate.isBefore(startDate) && !showDate.isAfter(endDate)) {
            return production[_('ID')];
        }
    }

    console.log('Could not get production ID for date = ' + date);
    throw {};
};

let getPersonId = function (name) {
    let _ = (column) => {
        return dbPersons[0]['columns'].indexOf(column);
    };

    for (let i = 0; i < dbPersons[0]['values'].length; i++) {
        if (dbPersons[0]['values'][i][_('NAME')] === name) {
            return dbPersons[0]['values'][i][_('ID')];
        }
    }

    return null;
};

/* Write entries */
let shows = raw['shows'];
Object.keys(shows).forEach((i) => {
    let date = moment(i, 'DD.MM.YYYY').format('YYYY-MM-DD 00:00:00.0000');

    Object.keys(shows[i]).forEach((type) => {
        const cast = shows[i][type];

        db.run('INSERT INTO SHOW (PRODUCTION_ID, DAY, TIME, TYPE) VALUES (?, ?, ?, ?);', [
            getProductionId(i),
            date,
            raw['times'][i][type],
            (type == 'Abend') ? 'Soirée' : 'Matinée',
        ]);

        const id = db.exec('SELECT ID FROM SHOW ORDER BY ID DESC')[0]['values'][0][0];

        Object.keys(cast).forEach((role) => {
            cast[role].forEach((person) => {
                if (!person) {
                    return;
                }

                db.run('INSERT INTO CAST (SHOW_ID, ROLE, PERSON_ID) VALUES (?, ?, ?);', [
                    id,
                    role,
                    getPersonId(person),
                ]);
            });
        });
    });
});


/* Write to file */
(function () {
    let data = db.export();
    let buffer = new Buffer(data);

    fs.writeFileSync('crawled.sqlite', buffer, (err) => {
        if (err) {
            throw err;
        }
    });
})();
