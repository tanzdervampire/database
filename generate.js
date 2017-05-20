const fs = require('fs');
const moment = require('moment');
const sql = require('sql.js');

const db = (function () {
    const buffer = fs.readFileSync('crawled.sqlite');
    return new sql.Database(buffer);
})();

const entries = [
    {
        'date': '20.05.2017',
        'time': '14:30',
        'type': 'Matinée',
        'location': 'Stuttgart',
        'cast': {
            'Graf von Krolock': ['Jan Ammann'],
            'Sarah': ['Veronica Appeddu'],
            'Alfred': ['Tom van der Ven'],
            'Professor Abronsius': ['Victor Petersen'],
            'Chagal': ['Michael Anzalone'],
            'Magda': ['Merel Zeeman'],
            'Rebecca': ['Yvonne Köstler'],
            'Herbert': ['Max Meister'],
            'Koukol': ['Paolo Bianca'],
            'Tanzsolisten': ['Kevin Schmid', 'Csaba Nagy', 'Alessandra Bizzarri'],
            'Gesangssolisten': ['Sander van Wissen', 'Kirill Zolygin'],
            'Tanzensemble': ['Joe Nolan', 'Stefan Mosonyi', 'Jacob Fearey', 'Sanne Buskermolen', 'Katie Allday', 'Lynsey Reid', 'Astrid Gollob'],
            'Gesangsensemble': ['Gonzalo Campos', 'Pascal Höwing', 'Marina Maniglio', 'Anja Wendzel', 'Karolin Konert', 'Fleur Alders'],
            'Dirigent': ['Leif Klinkhardt'],
        },
    },
    /*
    {
        'date': '',
        'time': '',
        'type': '',
        'location': '',
        'cast': {
            'Graf von Krolock': [''],
            'Sarah': [''],
            'Alfred': [''],
            'Professor Abronsius': [''],
            'Chagal': [''],
            'Magda': [''],
            'Rebecca': [''],
            'Herbert': [''],
            'Koukol': [''],
            'Tanzsolisten': [''],
            'Gesangssolisten': [''],
            'Tanzensemble': [''],
            'Gesangsensemble': [''],
            'Dirigent': [''],
        },
    },
    */
];

const dbProductions = db.exec('SELECT * FROM PRODUCTION');
const dbPersons = db.exec('SELECT ID, NAME FROM PERSON');

let getProductionId = function (date, location) {
    const showDate = moment(date, 'DD.MM.YYYY');
    let _ = (column) => {
        return dbProductions[0]['columns'].indexOf(column);
    };

    for (let i = 0; i < dbProductions[0]['values'].length; i++) {
        const production = dbProductions[0]['values'][i];

        if (production[_('LOCATION')] !== location) {
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

/* Cache all persons so we don't have to query everytime. */
let persons = (() => {
    let out = {};
    dbPersons[0]['values'].forEach((entry) => {
        /* Name → ID */
        out[entry[1]] = entry[0];
    });

    return out;
})();

entries.forEach((entry) => {
    /* First we check if there's any new person. */
    Object.keys(entry['cast']).forEach((role) => {
        entry['cast'][role].forEach((actor) => {
            if (!actor || typeof persons[actor] !== 'undefined') {
                return;
            }

            db.run('INSERT INTO PERSON (NAME) VALUES (?);', [actor]);
            const id = db.exec('SELECT ID FROM PERSON ORDER BY ID DESC')[0]['values'][0][0];
            persons[actor] = id;
        });
    });

    /* Now we insert the show. */
    db.run('INSERT INTO SHOW (PRODUCTION_ID, DAY, TIME, TYPE) VALUES (?, ?, ?, ?);', [
        getProductionId(entry['date'], entry['location']),
        moment(entry['date'], 'DD.MM.YYYY').format('YYYY-MM-DD 00:00:00.0000'),
        entry['time'],
        entry['type'],
    ]);
    const showId = db.exec('SELECT ID FROM SHOW ORDER BY ID DESC')[0]['values'][0][0];

    /* Now we insert the cast. */
    Object.keys(entry['cast']).forEach((role) => {
        entry['cast'][role].forEach((actor) => {
            if (!actor) {
                return;
            }

            if (typeof persons[actor] === 'undefined') {
                throw {
                    'error': 'Person unknown; this should not happen!',
                };
            }

            db.run('INSERT INTO CAST (SHOW_ID, ROLE, PERSON_ID) VALUES (?, ?, ?);', [
                showId,
                role,
                persons[actor],
            ]);
        });
    });
});


(function () {
    const data = db.export();
    const buffer = new Buffer(data);

    fs.writeFileSync('db.sqlite', buffer, (err) => {
        if (err) {
            throw err;
        }
    });
})();
