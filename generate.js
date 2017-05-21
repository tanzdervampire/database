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
    {
        'date': '02.01.2007',
        'time': '19:30',
        'type': null,
        'location': null,
        'cast': {
            'Graf von Krolock': ['Mathias Edenborn'],
            'Sarah': ['Lucy Scherer'],
            'Alfred': ['Alexander Klaws'],
            'Professor Abronsius': ['Mathias Schlung'],
            'Chagal': ['Ulrich Wiggers'],
            'Magda': ['Katja Berg'],
            'Rebecca': ['Maike Katrin Schmidt'],
            'Herbert': ['Haldor Laegreid'],
            'Koukol': ['Stefan Büdenbender'],
            'Tanzsolisten': [
                'Kym Boyson',
                'Kevin Hudson',
                'Vanni Viscusi',
            ],
            'Gesangssolisten': [
                'Philipp Hägeli',
                'Patric Scott',
            ],
            'Tanzensemble': [
                'Milena Alaze',
                'Hannah Carter',
                'Andrew Chadwick',
                'Tiziana Doneda',
                'Silvia Lambertoni',
                'Silvano Marraffa',
                'Florian Theiler'
            ],
            'Gesangsensemble': [
                'Kati Heidebrecht',
                'Schirin Kazemi',
                'Svenja Kühl',
                'Christina Ogink',
                'Jessica Oisson-Lantto',
                'Matthias Stockinger',
                'Christopher Tölle',
                'Jakub Wocial'
            ],
            'Dirigent': ['Ulrich Talle'],
        },
    },
    {
        'date': '15.10.2011',
        'time': '19:30',
        'type': null,
        'location': 'Stuttgart',
        'cast': {
            'Graf von Krolock': ['Kevin Tarte'],
            'Sarah': ['Antje Eckermann'],
            'Alfred': ['Krisha Dalke'],
            'Professor Abronsius': ['Christian Stadlhofer'],
            'Chagal': ['Christoph Leszczynski'],
            'Magda': ['Linda Veenhuizen'],
            'Rebecca': ['Juliane Bischoff'],
            'Herbert': ['Jakub Wocial'],
            'Koukol': ['Stefan Büdenbender'],
            'Tanzsolisten': [
                'Pierre Damen',
                'Paula Ferreira',
                'Toby Poole'
            ],
            'Gesangssolisten': [
                'Christopher Busse',
                'Florian Soyka'
            ],
            'Tanzensemble': [
                'Brett Hibberd',
                'Alan Kelly',
                'Anna Lopusny',
                'Sandra Milly',
                'Judit Szoboszlay',
                'Lucas Theisen',
                'Gemma West'
            ],
            'Gesangsensemble': [
                'Laura Greer',
                'Zoltán Fekete',
                'Joana Henrique',
                'Dennis Jankowiak',
                'Miriam Lotz',
                'Helen Morris',
                'Raphaela Pekovsek',
                'Thomas Schwein'
            ],
            'Dirigent': ['Boris Ritter'],
        },
    },
    {
        'date': '10.11.2012',
        'time': '19:30',
        'type': null,
        'location': 'Berlin',
        'cast': {
            'Graf von Krolock': ['Thomas Borchert'],
            'Sarah': ['Amélie Dobler'],
            'Alfred': ['Michael Heller'],
            'Professor Abronsius': ['Veit Schäfermeier'],
            'Chagal': ['Jerzy Jeszke'],
            'Magda': ['Linda Veenhuizen'],
            'Rebecca': ['Claudie Reinhard'],
            'Herbert': ['Marc Liebisch'],
            'Koukol': ['Stefan Büdenbender'],
            'Tanzsolisten': [
                'Pierre Damen',
                'Paula Ferreira',
                'Csaba Nagy'
            ],
            'Gesangssolisten': [
                'Dennis Jankowiak',
                'Vanni Viscusi'
            ],
            'Tanzensemble': [
                'Kym Boyson',
                'Zoltán Fekete',
                'Brett Hibberd',
                'Alan Kelly',
                'Anna Lopusny',
                'Sandra Milly',
                'Judit Szoboszlay'
            ],
            'Gesangsensemble': [
                'Elke Buyle',
                'Franz Frickel',
                'Laura Greer',
                'Judith Jandl',
                'Angelina Markiefka',
                'Silvano Marraffa',
                'Helen Morris',
                'Sven Prüwer'
            ],
            'Dirigent': ['Christoph Bönecker'],
        },
    },
    {
        'date': '16.05.2013',
        'time': '19:30',
        'type': null,
        'location': 'Berlin',
        'cast': {
            'Graf von Krolock': ['Ivan Ozhogin'],
            'Sarah': ['Mercedesz Csampai'],
            'Alfred': ['Tibor Heger'],
            'Professor Abronsius': ['Jens Janke'],
            'Chagal': ['Jerzy Jeszke'],
            'Magda': ['Goele de Raedt'],
            'Rebecca': ['Anja Wessel'],
            'Herbert': ['Marc Liebisch'],
            'Koukol': ['Stefan Büdenbender'],
            'Tanzsolisten': [
                'Tibor Nagy',
                'Judit Szoboszlay',
                'Matteo Vigna'
            ],
            'Gesangssolisten': [
                'Christopher Busse',
                'Dennis Jankowiak',
            ],
            'Tanzensemble': [
                'Yves Adang',
                'Kym Boyson',
                'Joseph Dockree',
                'Silvano Marraffa',
                'Sandra Milly',
                'Vicky Riddoch',
                'Nina Ungerer',
            ],
            'Gesangsensemble': [
                'Dorothea Baumann',
                'Conny Braun',
                'Franz Frickel',
                'Stéphane Le Breton',
                'Anna Lopusny',
                'Angelina Markiefka',
                'Sven Prüwer',
                'Claudie Reinhard',
            ],
            'Dirigent': ['Bernd Steixner'],
        },
    },
    {
        "date": "25.08.2013",
        "time": "14:30",
        "type": null,
        "location": "Berlin",
        "cast": {
            "Dirigent": [
                "Bernd Steixner"
            ],
            "Graf von Krolock": [
                "Ivan Ozhogin"
            ],
            "Sarah": [
                "Mercedesz Csampai"
            ],
            "Alfred": [
                "Michael Heller"
            ],
            "Professor Abronsius": [
                "Veit Schäfermeier"
            ],
            "Chagal": [
                "Jerzy Jeszke"
            ],
            "Magda": [
                "Goele de Raedt"
            ],
            "Rebecca": [
                "Anja Wessel"
            ],
            "Herbert": [
                "Marc Liebisch"
            ],
            "Koukol": [
                "Stefan Büdenbender"
            ],
            "Tanzsolisten": [
                "Paula Ferreira",
                "Csaba Nagy",
                "Tibor Nagy"
            ],
            "Gesangssolisten": [
                "Christopher Busse",
                "Florian Soyka"
            ],
            "Tanzensemble": [
                "Yves Adang",
                "Kym Boyson",
                "Joseph Dockree",
                "Zoltán Fekete",
                "Anna Lopusny",
                "Silvano Marraffa",
                "Sandra Milly",
                "Helen Morris",
                "Vicky Riddoch",
                "Judit Szoboszlay",
                "Nina Ungerer",
                "Matteo Vigna"
            ],
            "Gesangsensemble": [
                "Dorothea Baumann",
                "Conny Braun",
                "Udo Eckelmann",
                "Franz Frickel",
                "Tibor Heger",
                "Judith Jandl",
                "Dennis Jankowiak",
                "Stéphane Le Breton",
                "Angelina Markiefka",
                "Sven Prüwer",
                "Claudie Reinhard",
                "Linda Veenhuizen"
            ]
        }
    },
    /*
    {
        'date': '',
        'time': '',
        'type': null,
        'location': null,
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
            'Tanzsolisten': [
                '',
            ],
            'Gesangssolisten': [
                '',
            ],
            'Tanzensemble': [
                '',
            ],
            'Gesangsensemble': [
                '',
            ],
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

    let options = [];
    for (let i = 0; i < dbProductions[0]['values'].length; i++) {
        const production = dbProductions[0]['values'][i];

        if (location && production[_('LOCATION')] !== location) {
            continue;
        }

        const startDate = moment(production[_('START')], 'YYYY-MM-DD HH:mm:ss.SSS');
        const endDate = moment(production[_('END')], 'YYYY-MM-DD HH:mm:ss.SSS');

        if (!showDate.isBefore(startDate) && !showDate.isAfter(endDate)) {
            /* If a location was specified we have checked it, so return immediately. */
            if (location) {
                return production[_('ID')];
            }

            /* If no location was specified, let's first see how many matches we get. */
            options.push(production[_('ID')]);
        }
    }

    /* If no location was specified, only return a unique match and reject all other cases. */
    if (!location) {
        if (options.length !== 1) {
            console.log('Could not get production ID for date = ' + date);
            throw {};
        }

        return options[0];
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

    if (!entry['type']) {
        entry['type'] = ((+entry['time'].split(/:/)[0]) < 18) ? 'Matinée' : 'Soirée';
    }

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
