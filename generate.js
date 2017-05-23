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
    {
        "date": "22.04.2016",
        "time": "19:30",
        "location": "Berlin",
        "cast": {
            "Dirigent": [
                "Robert Emery"
            ],
            "Graf von Krolock": [
                "Mark Seibert"
            ],
            "Sarah": [
                "Veronica Appeddu"
            ],
            "Alfred": [
                "Tom van der Ven"
            ],
            "Professor Abronsius": [
                "Victor Petersen"
            ],
            "Chagal": [
                "Nicolas Tenerani"
            ],
            "Magda": [
                "Merel Zeeman"
            ],
            "Rebecca": [
                "Yvonne Köstler"
            ],
            "Herbert": [
                "Milan van Waardenburg"
            ],
            "Koukol": [
                "Paolo Bianca"
            ],
            "Tanzsolisten": [
                "Kevin Schmid",
                "Máté Gyenei",
                "Alessandra Bizzarri"
            ],
            "Gesangssolisten": [
                "Sander van Wissen",
                "Kirill Zolygin"
            ],
            "Tanzensemble": [
                "Joe Nolan",
                "Stefan Mosonyi",
                "Nicola Trazzi",
                "Veronika Enders",
                "Katie Allday",
                "Vicki Douglas",
                "Nicole Ollio"
            ],
            "Gesangsensemble": [
                "Torsten Ankert",
                "Noah Wili",
                "Pascal Höwing",
                "Marina Maniglio",
                "Anja Wendzel",
                "Karolin Konert",
                "Fleur Alders",
                "Pamela Zottele"
            ]
        }
    },
    {
        "date": "23.04.2016",
        "time": "19:30",
        "location": "Berlin",
        "cast": {
            "Dirigent": [
                "Robert Emery"
            ],
            "Graf von Krolock": [
                "Mark Seibert"
            ],
            "Sarah": [
                "Veronica Appeddu"
            ],
            "Alfred": [
                "Tom van der Ven"
            ],
            "Professor Abronsius": [
                "Victor Petersen"
            ],
            "Chagal": [
                "Nicolas Tenerani"
            ],
            "Magda": [
                "Merel Zeeman"
            ],
            "Rebecca": [
                "Yvonne Köstler"
            ],
            "Herbert": [
                "Milan van Waardenburg"
            ],
            "Koukol": [
                "Paolo Bianca"
            ],
            "Tanzsolisten": [
                "Kevin Schmid",
                "Máté Gyenei",
                "Alessandra Bizzarri"
            ],
            "Gesangssolisten": [
                "Sander van Wissen",
                "Kirill Zolygin"
            ],
            "Tanzensemble": [
                "Joe Nolan",
                "Stefan Mosonyi",
                "Nicola Trazzi",
                "Veronika Enders",
                "Katie Allday",
                "Vicki Douglas",
                "Nicole Ollio"
            ],
            "Gesangsensemble": [
                "Torsten Ankert",
                "Noah Wili",
                "Pascal Höwing",
                "Marina Maniglio",
                "Anja Wendzel",
                "Karolin Konert",
                "Fleur Alders",
                "Pamela Zottele"
            ]
        }
    },
    {
        "date": "24.04.2016",
        "time": "18:00",
        "location": "Berlin",
        "cast": {
            "Dirigent": [
                "Robert Emery"
            ],
            "Graf von Krolock": [
                "Mark Seibert"
            ],
            "Sarah": [
                "Veronica Appeddu"
            ],
            "Alfred": [
                "Tom van der Ven"
            ],
            "Professor Abronsius": [
                "Victor Petersen"
            ],
            "Chagal": [
                "Nicolas Tenerani"
            ],
            "Magda": [
                "Merel Zeeman"
            ],
            "Rebecca": [
                "Yvonne Köstler"
            ],
            "Herbert": [
                "Milan van Waardenburg"
            ],
            "Koukol": [
                "Paolo Bianca"
            ],
            "Tanzsolisten": [
                "Kevin Schmid",
                "Máté Gyenei",
                "Alessandra Bizzarri"
            ],
            "Gesangssolisten": [
                "Sander van Wissen",
                "Kirill Zolygin"
            ],
            "Tanzensemble": [
                "Joe Nolan",
                "Stefan Mosonyi",
                "Nicola Trazzi",
                "Veronika Enders",
                "Katie Allday",
                "Vicki Douglas",
                "Nicole Ollio"
            ],
            "Gesangsensemble": [
                "Torsten Ankert",
                "Noah Wili",
                "Pascal Höwing",
                "Marina Maniglio",
                "Anja Wendzel",
                "Karolin Konert",
                "Fleur Alders",
                "Pamela Zottele"
            ]
        }
    },
    {"date":"26.04.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Rebecca":["Yvonne Köstler"],"Herbert":["Milan van Waardenburg"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Samantha Harris-Hughes","Astrid Gollob"]}},
    {"date":"27.04.2016","time":"18:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Rebecca":["Yvonne Köstler"],"Herbert":["Milan van Waardenburg"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Thomas Höfner","Noah Wili","Kevin Hudson","Marina Maniglio","Anja Wendzel","Karolin Konert","Samantha Harris-Hughes","Astrid Gollob"]}},
    {"date":"28.04.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Rebecca":["Yvonne Köstler"],"Herbert":["Milan van Waardenburg"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Thomas Höfner","Alex Hyne","Pascal Höwing","Marina Maniglio","Sanne Buskermolen","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"30.04.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Rebecca":["Yvonne Köstler"],"Herbert":["Milan van Waardenburg"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Kevin Hudson","Michael Anzalone","Marina Maniglio","Sanne Buskermolen","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"30.04.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Rebecca":["Yvonne Köstler"],"Herbert":["Milan van Waardenburg"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"01.05.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"03.05.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Noah Wili","Pascal Höwing","Marina Maniglio","Astrid Gollob","Karolin Konert","Fleur Alders","Samantha Harris-Hughes"]}},
    {"date":"04.05.2016","time":"18:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Andrew Chadwick","Thomas Höfner","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Samantha Harris-Hughes"]}},
    {"date":"05.05.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Andrew Chadwick","Thomas Höfner","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"06.05.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Thomas Höfner","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Noah Wili","Pascal Höwing","Sanne Buskermolen","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"07.05.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Noah Wili"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Pamela Zottele"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Andrew Chadwick","Thomas Höfner","Marina Maniglio","Samantha Harris-Hughes","Karolin Konert","Fleur Alders","Astrid Gollob"]}},
    {"date":"08.05.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Fleur Alders"],"Herbert":["Sander van Wissen"],"Rebecca":["Yvonne Köstler"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Astrid Gollob","Pamela Zottele"]}},
    {"date":"08.05.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Milan van Waardenburg","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"10.05.2016","time":"19:30","location":"","cast":{"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Milan van Waardenburg","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Sanne Buskermolen","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"11.05.2016","time":"18:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Anja Wendzel"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Sanne Buskermolen","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Samantha Harris-Hughes","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"12.05.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Thomas Höfner","Andrew Chadwick","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"14.05.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Thomas Höfner","Marina Maniglio","Anja Wendzel","Astrid Gollob","Fleur Alders","Pamela Zottele"]}},
    {"date":"14.05.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Astrid Gollob","Fleur Alders","Pamela Zottele"]}},
    {"date":"15.05.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Stefan Mosonyi","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Alex Hyne","Nicola Trazzi","Veronika Enders","Astrid Gollob","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Samantha Harris-Hughes","Fleur Alders","Pamela Zottele"]}},
    {"date":"15.05.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"17.05.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Pamela Zottele"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Alex Hyne","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Samantha Harris-Hughes"]}},
    {"date":"19.05.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Anja Wendzel"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Karolin Konert"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Alex Hyne","Torsten Ankert","Andrew Chadwick","Pascal Höwing","Marina Maniglio","Astrid Gollob","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"21.05.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Andrew Chadwick"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Pamela Zottele"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Samantha Harris-Hughes","Astrid Gollob"]}},
    {"date":"22.05.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Samantha Harris-Hughes"]}},
    {"date":"22.05.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Samantha Harris-Hughes"]}},
    {"date":"24.05.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Anja Wendzel"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Sanne Buskermolen","Karolin Konert","Astrid Gollob","Samantha Harris-Hughes"]}},
    {"date":"25.05.2016","time":"18:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Anja Wendzel"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Nicola Trazzi","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Milan van Waardenburg","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Thomas Höfner","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Sanne Buskermolen","Karolin Konert","Astrid Gollob","Samantha Harris-Hughes"]}},
    {"date":"26.05.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Anja Wendzel"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Astrid Gollob","Karolin Konert","Fleur Alders","Samantha Harris-Hughes"]}},
    {"date":"27.05.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Torsten Ankert"],"Sarah":["Anja Wendzel"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Noah Wili","Andrew Chadwick","Marina Maniglio","Astrid Gollob","Karolin Konert","Fleur Alders","Sanne Buskermolen"]}},
    {"date":"29.05.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Michael Anzalone","Pascal Höwing","Samantha Harris-Hughes","Anja Wendzel","Karolin Konert","Fleur Alders","Astrid Gollob"]}},
    {"date":"29.05.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Michael Anzalone","Pascal Höwing","Samantha Harris-Hughes","Anja Wendzel","Karolin Konert","Fleur Alders","Astrid Gollob"]}},
    {"date":"02.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Thomas Höfner","Andrew Chadwick","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"04.06.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Torsten Ankert"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Andrew Chadwick","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Alex Hyne","Thomas Höfner","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Michael Anzalone","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Samantha Harris-Hughes","Pamela Zottele"]}},
    {"date":"04.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Torsten Ankert"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Alex Hyne","Thomas Höfner","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Michael Anzalone","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Samantha Harris-Hughes","Pamela Zottele"]}},
    {"date":"05.06.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Andrew Chadwick"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Alex Hyne","Thomas Höfner","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Sanne Buskermolen","Pamela Zottele"]}},
    {"date":"05.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Robert Emery"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Alex Hyne","Thomas Höfner","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"07.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Alex Hyne","Thomas Höfner","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Noah Wili","Pascal Höwing","Astrid Gollob","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"08.06.2016","time":"18:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Alex Hyne","Thomas Höfner","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Noah Wili","Pascal Höwing","Astrid Gollob","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"09.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Anja Wendzel"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Alex Hyne","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Noah Wili","Pascal Höwing","Marina Maniglio","Samantha Harris-Hughes","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"10.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Mark Seibert"],"Graf von Krolock":["Marina Maniglio"],"Sarah":["Tom van der Ven"],"Alfred":["Victor Petersen"],"Professor Abronsius":["Nicolas Tenerani"],"Chagal":["Merel Zeeman"],"Magda":["Milan van Waardenburg"],"Herbert":["Yvonne Köstler"],"Rebecca":["Paolo Bianca"],"Koukol":["Kevin Schmid"],"Tanzsolisten":["Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Andrew Chadwick","Alex Hyne","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Noah Wili","Pascal Höwing","Sanne Buskermolen","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"11.06.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Marina Maniglio"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Pamela Zottele"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Alex Hyne","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Michael Anzalone","Pascal Höwing","Sanne Buskermolen","Anja Wendzel","Karolin Konert","Fleur Alders","Astrid Gollob"]}},
    {"date":"11.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Marina Maniglio"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Pamela Zottele"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Alex Hyne","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Michael Anzalone","Pascal Höwing","Sanne Buskermolen","Anja Wendzel","Karolin Konert","Fleur Alders","Astrid Gollob"]}},
    {"date":"12.06.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Anja Wendzel"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Fleur Alders"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Thomas Höfner","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Michael Anzalone","Pascal Höwing","Marina Maniglio","Sanne Buskermolen","Karolin Konert","Astrid Gollob","Pamela Zottele"]}},
    {"date":"14.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Marina Maniglio"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Karolin Konert"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Thomas Höfner","Alex Hyne","Veronika Enders","Astrid Gollob","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Kevin Hudson","Pascal Höwing","Anja Wendzel","Samantha Harris-Hughes","Fleur Alders","Pamela Zottele"]}},
    {"date":"15.06.2016","time":"18:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Anja Wendzel"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Karolin Konert"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Joe Nolan","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Alex Hyne","Thomas Höfner","Kevin Hudson","Veronika Enders","Astrid Gollob","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Pascal Höwing","Marina Maniglio","Samantha Harris-Hughes","Fleur Alders","Pamela Zottele"]}},
    {"date":"16.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Thomas Höfner","Alex Hyne","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Kevin Hudson","Astrid Gollob","Pamela Zottele"]}},
    {"date":"17.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Thomas Höfner","Alex Hyne","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Astrid Gollob","Pamela Zottele"]}},
    {"date":"18.06.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Alex Hyne","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Kevin Hudson","Astrid Gollob","Pamela Zottele"]}},
    {"date":"18.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Joe Nolan","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Alex Hyne","Nicola Trazzi","Kevin Hudson","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Astrid Gollob","Pamela Zottele"]}},
    {"date":"24.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Torsten Ankert"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Yvonne Köstler"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Astrid Gollob","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Noah Wili","Pascal Höwing","Samantha Harris-Hughes","Anja Wendzel","Sanne Buskermolen","Fleur Alders","Pamela Zottele"]}},
    {"date":"25.06.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Torsten Ankert"],"Sarah":["Anja Wendzel"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Yvonne Köstler"],"Koukol":["Michel Driesse"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Astrid Gollob","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Thomas Höfner","Noah Wili","Pascal Höwing","Marina Maniglio","Samantha Harris-Hughes","Fleur Alders","Pamela Zottele"]}},
    {"date":"26.06.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Yvonne Köstler"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Stefan Mosonyi","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Astrid Gollob","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Thomas Höfner","Andrew Chadwick","Noah Wili","Pascal Höwing","Samantha Harris-Hughes","Anja Wendzel","Fleur Alders","Pamela Zottele"]}},
    {"date":"26.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Yvonne Köstler"],"Koukol":["Michel Driesse"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Stefan Mosonyi","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Astrid Gollob","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Thomas Höfner","Andrew Chadwick","Noah Wili","Pascal Höwing","Samantha Harris-Hughes","Anja Wendzel","Fleur Alders","Pamela Zottele"]}},
    {"date":"28.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Anja Wendzel"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Joe Nolan","Alessandra Bizzarri"],"Gesangssolisten":["Stefan Mosonyi","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Astrid Gollob","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Kevin Hudson","Noah Wili","Pascal Höwing","Marina Maniglio","Samantha Harris-Hughes","Sanne Buskermolen","Fleur Alders","Pamela Zottele"]}},
    {"date":"29.06.2016","time":"18:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Astrid Gollob","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Andrew Chadwick","Pascal Höwing","Marina Maniglio","Anja Wendzel","Sanne Buskermolen","Fleur Alders","Samantha Harris-Hughes"]}},
    {"date":"30.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Pamela Zottele"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Michael Anzalone","Andrew Chadwick","Pascal Höwing","Marina Maniglio","Anja Wendzel","Astrid Gollob","Fleur Alders","Sanne Buskermolen"]}},
    {"date":"01.07.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Fleur Alders"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Joe Nolan","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Michael Anzalone","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Kevin Hudson","Sanne Buskermolen","Pamela Zottele"]}},
    {"date":"02.07.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Thomas Höfner","Noah Wili","Pascal Höwing","Marina Maniglio","Sanne Buskermolen","Kevin Hudson","Fleur Alders","Pamela Zottele"]}},
    {"date":"02.07.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Thomas Höfner","Noah Wili","Pascal Höwing","Marina Maniglio","Sanne Buskermolen","Kevin Hudson","Fleur Alders","Pamela Zottele"]}},
    {"date":"03.07.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Thomas Höfner","Noah Wili","Pascal Höwing","Marina Maniglio","Samantha Harris-Hughes","Kevin Hudson","Fleur Alders"]}},
    {"date":"06.07.2016","time":"18:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Thomas Höfner","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Alex Hyne","Pascal Höwing","Marina Maniglio","Anja Wendzel","Kevin Hudson","Sanne Buskermolen","Noah Wili"]}},
    {"date":"07.07.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Thomas Höfner","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Alex Hyne","Pascal Höwing","Marina Maniglio","Anja Wendzel","Samantha Harris-Hughes","Sanne Buskermolen","Noah Wili"]}},
    {"date":"08.07.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Andrew Chadwick","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Thomas Höfner","Pascal Höwing","Marina Maniglio","Anja Wendzel","Samantha Harris-Hughes","Sanne Buskermolen","Noah Wili"]}},
    {"date":"09.07.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Sander van Wissen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Michael Anzalone","Milan van Waardenburg"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Astrid Gollob","Veronika Enders","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Alex Hyne","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Samantha Harris-Hughes","Sanne Buskermolen","Kevin Hudson"]}},
    {"date":"10.07.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Alex Hyne","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Astrid Gollob","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Michael Anzalone","Noah Wili","Andrew Chadwick","Marina Maniglio","Anja Wendzel","Samantha Harris-Hughes","Sanne Buskermolen","Kevin Hudson"]}},
    {"date":"10.07.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Mark Seibert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Michael Anzalone"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Alex Hyne","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Astrid Gollob","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Noah Wili","Andrew Chadwick","Marina Maniglio","Anja Wendzel","Samantha Harris-Hughes","Sanne Buskermolen"]}},
    {"date":"12.07.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Andrew Chadwick"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Michael Anzalone"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Thomas Höfner","Noah Wili","Alex Hyne","Marina Maniglio","Anja Wendzel","Kevin Hudson","Samantha Harris-Hughes","Pamela Zottele"]}},
    {"date":"13.07.2016","time":"18:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Andrew Chadwick"],"Professor Abronsius":["Sander van Wissen"],"Chagal":["Michael Anzalone"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Stefan Mosonyi","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Thomas Höfner","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"14.07.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Noah Wili"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Michael Anzalone"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Pamela Zottele"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Joe Nolan","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Andrew Chadwick","Alex Hyne","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Sanne Buskermolen"]}},
    {"date":"16.07.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Anja Wendzel"],"Alfred":["Andrew Chadwick"],"Professor Abronsius":["Sander van Wissen"],"Chagal":["Michael Anzalone"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Milan van Waardenburg","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Thomas Höfner","Noah Wili","Pascal Höwing","Marina Maniglio","Kevin Hudson","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"16.07.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Noah Wili"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Michael Anzalone"],"Magda":["Karolin Konert"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Thomas Höfner","Andrew Chadwick","Alex Hyne","Marina Maniglio","Anja Wendzel","Kevin Hudson","Fleur Alders","Pamela Zottele"]}},
    {"date":"17.07.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Marina Maniglio"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Thomas Höfner","Andrew Chadwick","Pascal Höwing","Samantha Harris-Hughes","Anja Wendzel","Karolin Konert","Kevin Hudson","Pamela Zottele"]}},
    {"date":"17.06.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Jan Ammann"],"Graf von Krolock":["Veronica Appeddu"],"Sarah":["Andrew Chadwick"],"Alfred":["Victor Petersen"],"Professor Abronsius":["Michael Anzalone"],"Chagal":["Merel Zeeman"],"Magda":["Milan van Waardenburg"],"Herbert":["Yvonne Köstler"],"Rebecca":["Paolo Bianca"],"Koukol":["Kevin Schmid"],"Tanzsolisten":["Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Thomas Höfner","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"20.07.2016","time":"18:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Thomas Höfner","Nicola Trazzi","Sanne Buskermolen","Astrid Gollob","Vicki Douglas","Samantha Harris-Hughes"],"Gesangsensemble":["Alex Hyne","Noah Wili","Andrew Chadwick","Kevin Hudson","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"23.07.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Karolin Konert"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Andrew Chadwick","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Sanne Buskermolen"],"Gesangsensemble":["Noah Wili","Thomas Höfner","Alex Hyne","Samantha Harris-Hughes","Anja Wendzel","Kevin Hudson","Fleur Alders","Pamela Zottele"]}},
    {"date":"24.07.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Thomas Höfner","Nicola Trazzi","Veronika Enders","Astrid Gollob","Vicki Douglas","Sanne Buskermolen"],"Gesangsensemble":["Alex Hyne","Noah Wili","Andrew Chadwick","Samantha Harris-Hughes","Anja Wendzel","Karolin Konert","Kevin Hudson","Pamela Zottele"]}},
    {"date":"28.07.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Yvonne Köstler"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Samantha Harris-Hughes","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Noah Wili","Pascal Höwing","Sanne Buskermolen","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"29.07.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Yvonne Köstler"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Samantha Harris-Hughes","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Noah Wili","Andrew Chadwick","Sanne Buskermolen","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"30.07.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Yvonne Köstler"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Andrew Chadwick","Stefan Mosonyi","Nicola Trazzi","Sanne Buskermolen","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Thomas Höfner","Noah Wili","Astrid Gollob","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"31.07.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Yvonne Köstler"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Stefan Mosonyi"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Samantha Harris-Hughes","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Thomas Höfner","Kevin Hudson","Andrew Chadwick","Noah Wili","Astrid Gollob","Anja Wendzel","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"31.07.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Fleur Alders"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Samantha Harris-Hughes","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Andrew Chadwick","Noah Wili","Astrid Gollob","Anja Wendzel","Karolin Konert","Sanne Buskermolen","Pamela Zottele"]}},
    {"date":"03.08.2016","time":"18:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Sander van Wissen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Kirill Zolygin"],"Rebecca":["Fleur Alders"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Nicola Trazzi","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Michael Anzalone","Stefan Mosonyi"],"Tanzensemble":["Thomas Höfner","Joe Nolan","Stefan Mosonyi","Samantha Harris-Hughes","Veronika Enders","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Sanne Buskermolen","Noah Wili","Marina Maniglio","Anja Wendzel","Karolin Konert","Astrid Gollob","Pamela Zottele"]}},
    {"date":"04.08.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Pamela Zottele"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Nicola Trazzi","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Joe Nolan","Stefan Mosonyi","Samantha Harris-Hughes","Veronika Enders","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Sanne Buskermolen","Noah Wili","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Astrid Gollob"]}},
    {"date":"05.08.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Pamela Zottele"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Nicola Trazzi","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Joe Nolan","Stefan Mosonyi","Samantha Harris-Hughes","Veronika Enders","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Michael Anzalone","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Sanne Buskermolen"]}},
    {"date":"06.08.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Pamela Zottele"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Stefan Mosonyi","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Andrew Chadwick","Thomas Höfner","Veronika Enders","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Michael Anzalone","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Samantha Harris-Hughes"]}},
    {"date":"07.08.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Pamela Zottele"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Stefan Mosonyi","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Thomas Höfner","Nicola Trazzi","Veronika Enders","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Michael Anzalone","Andrew Chadwick","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Samantha Harris-Hughes"]}},
    {"date":"10.08.2016","time":"18:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Stefan Mosonyi","Joe Nolan","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Alex Hyne","Thomas Höfner","Nicola Trazzi","Veronika Enders","Katie Allday","Astrid Gollob","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Michael Anzalone","Pascal Höwing","Marina Maniglio","Sanne Buskermolen","Karolin Konert","Fleur Alders","Samantha Harris-Hughes"]}},
    {"date":"11.08.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Joe Nolan","Alessandra Bizzarri"],"Gesangssolisten":["Stefan Mosonyi","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Nicola Trazzi","Veronika Enders","Katie Allday","Astrid Gollob","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Andrew Chadwick","Pascal Höwing","Marina Maniglio","Samantha Harris-Hughes","Karolin Konert","Sanne Buskermolen"]}},
    {"date":"12.08.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Andrew Chadwick"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Joe Nolan","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Samantha Harris-Hughes","Nicole Ollio"],"Gesangsensemble":["Noah Wili","Pascal Höwing","Kevin Hudson","Astrid Gollob","Karolin Konert","Sanne Buskermolen","Pamela Zottele"]}},
    {"date":"13.08.2016","time":"14.30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Andrew Chadwick","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Samantha Harris-Hughes","Nicole Ollio"],"Gesangsensemble":["Michael Anzalone","Thomas Höfner","Pascal Höwing","Kevin Hudson","Astrid Gollob","Karolin Konert","Sanne Buskermolen","Pamela Zottele"]}},
    {"date":"13.08.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Andrew Chadwick","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Samantha Harris-Hughes","Nicole Ollio"],"Gesangsensemble":["Michael Anzalone","Thomas Höfner","Pascal Höwing","Kevin Hudson","Astrid Gollob","Karolin Konert","Sanne Buskermolen","Pamela Zottele"]}},
    {"date":"14.08.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Andrew Chadwick"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Joe Nolan","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Sanne Buskermolen","Nicole Ollio"],"Gesangsensemble":["Michael Anzalone","Noah Wili","Pascal Höwing","Kevin Hudson","Samantha Harris-Hughes","Karolin Konert","Astrid Gollob","Pamela Zottele"]}},
    {"date":"16.08.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Andrew Chadwick","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Thomas Höfner","Pascal Höwing","Samantha Harris-Hughes","Anja Wendzel","Karolin Konert","Sanne Buskermolen","Pamela Zottele"]}},
    {"date":"18.08.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Karolin Konert"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Joe Nolan","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Michael Anzalone","Pascal Höwing","Samantha Harris-Hughes","Anja Wendzel","Sanne Buskermolen","Fleur Alders","Pamela Zottele"]}},
    {"date":"20.08.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Joe Nolan","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Noah Wili","Pascal Höwing","Samantha Harris-Hughes","Anja Wendzel","Karolin Konert","Astrid Gollob","Pamela Zottele"]}},
    {"date":"20.08.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Joe Nolan","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Milan van Waardenburg"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Alex Hyne","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Astrid Gollob","Pamela Zottele"]}},
    {"date":"21.08.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Karolin Konert"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Sanne Buskermolen","Fleur Alders","Pamela Zottele"]}},
    {"date":"21.08.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Karolin Konert"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Astrid Gollob","Fleur Alders","Pamela Zottele"]}},
    {"date":"25.08.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Karolin Konert"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Stefan Mosonyi","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Alex Hyne","Thomas Höfner","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Noah Wili","Pascal Höwing","Sanne Buskermolen","Anja Wendzel","Samantha Harris-Hughes","Fleur Alders","Pamela Zottele"]}},
    {"date":"27.08.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Karolin Konert"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Stefan Mosonyi","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Alex Hyne","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Thomas Höfner","Michael Anzalone","Kevin Hudson","Pascal Höwing","Astrid Gollob","Anja Wendzel","Samantha Harris-Hughes","Fleur Alders","Pamela Zottele"]}},
    {"date":"27.08.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Karolin Konert"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Thomas Höfner","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Alex Hyne","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Michael Anzalone","Kevin Hudson","Pascal Höwing","Astrid Gollob","Anja Wendzel","Samantha Harris-Hughes","Fleur Alders","Pamela Zottele"]}},
    {"date":"28.08.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Stefan Mosonyi","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Thomas Höfner","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Michael Anzalone","Noah Wili","Pascal Höwing","Samantha Harris-Hughes","Anja Wendzel","Karolin Konert","Astrid Gollob","Pamela Zottele"]}},
    {"date":"31.08.2016","time":"18:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Noah Wili","Pascal Höwing","Samantha Harris-Hughes","Anja Wendzel","Karolin Konert","Fleur Alders","Astrid Gollob"]}},
    {"date":"01.09.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Noah Wili","Pascal Höwing","Sanne Buskermolen","Anja Wendzel","Karolin Konert","Fleur Alders","Astrid Gollob"]}},
    {"date":"02.09.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders","Astrid Gollob"]}},
    {"date":"03.09.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Andrew Chadwick","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Pascal Höwing","Sanne Buskermolen","Anja Wendzel","Samantha Harris-Hughes","Astrid Gollob","Pamela Zottele"]}},
    {"date":"03.09.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Shay Cohen"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Andrew Chadwick","Pascal Höwing","Sanne Buskermolen","Anja Wendzel","Samantha Harris-Hughes","Astrid Gollob","Pamela Zottele"]}},
    {"date":"04.09.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Alexandros Diamantis"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Anja Wendzel"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Joe Nolan","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Andrew Chadwick","Pascal Höwing","Marina Maniglio","Samantha Harris-Hughes","Astrid Gollob","Sanne Buskermolen","Pamela Zottele"]}},
    {"date":"06.09.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Robert Paul"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Torsten Ankert"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Andrew Chadwick","Pascal Höwing","Sanne Buskermolen","Anja Wendzel","Samantha Harris-Hughes","Noah Wili","Pamela Zottele"]}},
    {"date":"08.09.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Anja Wendzel"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Sanne Buskermolen","Karolin Konert","Fleur Alders","Pamela Zottele"]}},
    {"date":"09.09.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Sander van Wissen","Milan van Waardenburg"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Sanne Buskermolen","Veronika Enders","Vicki Douglas","Astrid Gollob"],"Gesangsensemble":["Alex Hyne","Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Samantha Harris-Hughes","Fleur Alders","Pamela Zottele"]}},
    {"date":"10.09.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Robert Paul"],"Graf von Krolock":["Torsten Ankert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Samantha Harris-Hughes"],"Gesangsensemble":["Alex Hyne","Thomas Höfner","Pascal Höwing","Sanne Buskermolen","Anja Wendzel","Noah Wili","Fleur Alders","Pamela Zottele"]}},
    {"date":"11.09.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Kirill Zolygin"],"Sarah":["Anja Wendzel"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Sander van Wissen","Milan van Waardenburg"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Thomas Höfner","Pascal Höwing","Andrew Chadwick","Kevin Hudson","Sanne Buskermolen","Astrid Gollob","Fleur Alders","Pamela Zottele"]}},
    {"date":"13.09.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Robert Paul"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Nicola Trazzi","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Sander van Wissen","Stefan Mosonyi"],"Tanzensemble":["Joe Nolan","Thomas Höfner","Veronika Enders","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Samantha Harris-Hughes","Fleur Alders","Pamela Zottele"]}},
    {"date":"14.09.2016","time":"18:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Torsten Ankert"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Sander van Wissen","Stefan Mosonyi"],"Tanzensemble":["Joe Nolan","Alex Hyne","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Kevin Hudson","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Sanne Buskermolen","Fleur Alders","Pamela Zottele"]}},
    {"date":"15.09.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Torsten Ankert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Karolin Konert"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Sander van Wissen","Stefan Mosonyi"],"Tanzensemble":["Joe Nolan","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Andrew Chadwick","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Sanne Buskermolen","Fleur Alders","Pamela Zottele"]}},
    {"date":"16.09.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Torsten Ankert"],"Magda":["Karolin Konert"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Sander van Wissen","Stefan Mosonyi"],"Tanzensemble":["Thomas Höfner","Alex Hyne","Nicola Trazzi","Veronika Enders","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Samantha Harris-Hughes","Fleur Alders","Pamela Zottele"]}},
    {"date":"17.09.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Samantha Harris-Hughes","Pamela Zottele"]}},
    {"date":"17.09.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Thomas Höfner","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Sanne Buskermolen","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Andrew Chadwick","Pascal Höwing","Marina Maniglio","Anja Wendzel","Noah Wili","Samantha Harris-Hughes","Pamela Zottele"]}},
    {"date":"18.09.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Robert Paul"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Karolin Konert"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Sander van Wissen","Stefan Mosonyi"],"Tanzensemble":["Andrew Chadwick","Thomas Höfner","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Alex Hyne","Pascal Höwing","Marina Maniglio","Anja Wendzel","Sanne Buskermolen","Fleur Alders","Pamela Zottele"]}},
    {"date":"18.09.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Robert Paul"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Sander van Wissen"],"Chagal":["Michael Anzalone"],"Magda":["Karolin Konert"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Katie Allday"],"Gesangssolisten":["Milan van Waardenburg","Stefan Mosonyi"],"Tanzensemble":["Andrew Chadwick","Thomas Höfner","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Sanne Buskermolen","Fleur Alders","Pamela Zottele"]}},
    {"date":"20.09.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Robert Paul"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Torsten Ankert"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Pamela Zottele"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Alex Hyne","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Andrew Chadwick","Thomas Höfner","Pascal Höwing","Noah Wili","Anja Wendzel","Karolin Konert","Samantha Harris-Hughes","Sanne Buskermolen"]}},
    {"date":"22.09.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Anja Wendzel"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Kirill Zolygin"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Nicola Trazzi","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Stefan Mosonyi"],"Tanzensemble":["Thomas Höfner","Joe Nolan","Stefan Mosonyi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Sanne Buskermolen","Karolin Konert","Samantha Harris-Hughes","Pamela Zottele"]}},
    {"date":"23.09.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Kirill Zolygin"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Stefan Mosonyi"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Sanne Buskermolen","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Thomas Höfner","Pascal Höwing","Anja Wendzel","Karolin Konert","Kevin Hudson","Pamela Zottele"]}},
    {"date":"24.09.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Anja Wendzel"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Kirill Zolygin"],"Rebecca":["Yvonne Köstler"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Thomas Höfner","Marina Maniglio","Kevin Hudson","Sanne Buskermolen","Fleur Alders","Pamela Zottele"]}},
    {"date":"24.09.2016","time":"19:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Kirill Zolygin"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Thomas Höfner","Pascal Höwing","Noah Wili","Anja Wendzel","Sanne Buskermolen","Fleur Alders","Pamela Zottele"]}},
    {"date":"25.09.2016","time":"14:30","location":"Berlin","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Jan Ammann"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Pascal Höwing","Marina Maniglio","Anja Wendzel","Samantha Harris-Hughes","Fleur Alders","Pamela Zottele"]}},
    {"date":"05.10.2016","time":"19:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders"]}},
    {"date":"06.10.2016","time":"19:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders"]}},
    {"date":"08.10.2016","time":"14:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Fleur Alders"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Merel Zeeman"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Astrid Gollob"]}},
    {"date":"08.10.2016","time":"19:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders"]}},
    {"date":"09.10.2016","time":"14:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Marina Maniglio"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Samantha Harris-Hughes","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Pascal Höwing","Sanne Buskermolen","Anja Wendzel","Karolin Konert","Fleur Alders"]}},
    {"date":"11.10.2016","time":"19:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Andrew Chadwick"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders"]}},
    {"date":"12.10.2016","time":"19:30","location":"München","cast":{"Dirigent":["Krisztian Balassa"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Michael Anzalone"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Noah Wili","Kirill Zolygin"],"Tanzensemble":["Alex Hyne","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Astrid Gollob","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Andrew Chadwick","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders"]}},
    {"date":"13.10.2016","time":"19:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Marina Maniglio"],"Alfred":["Andrew Chadwick"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Alex Hyne","Nicola Trazzi","Vicki Douglas","Katie Allday","Astrid Gollob","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Sanne Buskermolen","Anja Wendzel","Karolin Konert","Fleur Alders"]}},
    {"date":"14.10.2016","time":"19:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Stefan Mosonyi","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Andrew Chadwick","Kevin Hudson","Vicki Douglas","Katie Allday","Veronika Enders","Sanne Buskermolen"],"Gesangsensemble":["Torsten Ankert","Michael Anzalone","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders"]}},
    {"date":"15.10.2016","time":"14:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Stefan Mosonyi","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Andrew Chadwick","Nicola Trazzi","Astrid Gollob","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Michael Anzalone","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders"]}},
    {"date":"16.10.2016","time":"14:30","location":"München","cast":{"Dirigent":["Krisztian Balassa"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Anja Wendzel"],"Alfred":["Andrew Chadwick"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Fleur Alders"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Nicola Trazzi","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Alex Hyne","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Noah Wili","Marina Maniglio","Samantha Harris-Hughes","Astrid Gollob","Sanne Buskermolen"]}},
    {"date":"16.10.2016","time":"19:00","location":"München","cast":{"Dirigent":["Krisztian Balassa"],"Graf von Krolock":["Torsten Ankert"],"Sarah":["Anja Wendzel"],"Alfred":["Andrew Chadwick"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Fleur Alders"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Nicola Trazzi","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Alex Hyne","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Noah Wili","Marina Maniglio","Samantha Harris-Hughes","Astrid Gollob","Sanne Buskermolen"]}},
    {"date":"20.10.2016","time":"19:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Sander van Wissen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Nicola Trazzi","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Alex Hyne","Astrid Gollob","Samantha Harris-Hughes","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Pascal Höwing","Sanne Buskermolen","Anja Wendzel","Karolin Konert","Fleur Alders"]}},
    {"date":"21.10.2016","time":"19:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Anja Wendzel"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Astrid Gollob"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Marina Maniglio","Samantha Harris-Hughes","Karolin Konert","Fleur Alders"]}},
    {"date":"22.10.2016","time":"19:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Astrid Gollob","Anja Wendzel","Karolin Konert","Fleur Alders"]}},
    {"date":"26.10.2016","time":"19:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Torsten Ankert"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Alex Hyne","Kevin Hudson","Karolin Konert","Astrid Gollob","Fleur Alders","Anja Wendzel"]}},
    {"date":"27.10.2016","time":"19:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Anja Wendzel"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Pascal Höwing"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Alex Hyne"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Marina Maniglio","Samantha Harris-Hughes","Karolin Konert","Sanne Buskermolen"]}},
    {"date":"28.10.2016","time":"19:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Noah Wili"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Fleur Alders"],"Herbert":["Kirill Zolygin"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Michael Anzalone","Sander van Wissen"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Pascal Höwing","Marina Maniglio","Anja Wendzel","Samantha Harris-Hughes","Sanne Buskermolen"]}},
    {"date":"29.10.2016","time":"14:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Kirill Zolygin","Sander van Wissen"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Fleur Alders","Marina Maniglio","Anja Wendzel","Noah Wili","Samantha Harris-Hughes"]}},
    {"date":"29.10.2016","time":"19:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Noah Wili","Marina Maniglio","Anja Wendzel","Samantha Harris-Hughes","Fleur Alders"]}},
    {"date":"30.10.2016","time":"14:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Fleur Alders"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Kirill Zolygin","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Alex Hyne","Marina Maniglio","Anja Wendzel","Sanne Buskermolen","Samantha Harris-Hughes"]}},
    {"date":"30.10.2016","time":"19:00","location":"München","cast":{"Dirigent":["Krisztian Balassa"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Fleur Alders"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Alex Hyne","Marina Maniglio","Anja Wendzel","Samantha Harris-Hughes","Sanne Buskermolen"]}},
    {"date":"31.10.2016","time":"19:30","location":"München","cast":{"Dirigent":["Krisztian Balassa"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Karolin Konert"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Merel Zeeman"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Kevin Schmid","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Nicola Trazzi","Samantha Harris-Hughes","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Michael Anzalone","Pascal Höwing","Marina Maniglio","Anja Wendzel","Sanne Buskermolen","Fleur Alders"]}},
    {"date":"04.11.2016","time":"19:30","location":"München","cast":{"Dirigent":["Krisztian Balassa"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Torsten Ankert"],"Magda":["Merel Zeeman"],"Herbert":["Kirill Zolygin"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Nicola Trazzi","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Stefan Mosonyi"],"Tanzensemble":["Joe Nolan","Alex Hyne","Stefan Mosonyi","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Noah Wili","Pascal Höwing","Kevin Hudson","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders"]}},
    {"date":"05.11.2016","time":"14:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Stefan Mosonyi","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Alex Hyne","Nicola Trazzi","Veronika Enders","Katie Allday","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Pascal Höwing","Marina Maniglio","Anja Wendzel","Karolin Konert","Fleur Alders"]}},
    {"date":"05.11.2016","time":"19:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Anja Wendzel"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Milan van Waardenburg"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Stefan Mosonyi","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Milan van Waardenburg","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Alex Hyne","Nicola Trazzi","Veronika Enders","Katie Allday","Nicole Ollio"],"Gesangsensemble":["Torsten Ankert","Pascal Höwing","Marina Maniglio","Astrid Gollob","Karolin Konert","Fleur Alders"]}},
    {"date":"06.11.2016","time":"14:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Marina Maniglio"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Nicolas Tenerani"],"Magda":["Merel Zeeman"],"Herbert":["Sander van Wissen"],"Rebecca":["Yvonne Köstler"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Nicola Trazzi","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Michael Anzalone"],"Tanzensemble":["Joe Nolan","Stefan Mosonyi","Alex Hyne","Veronika Enders","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Kevin Hudson","Noah Wili","Pascal Höwing","Samantha Harris-Hughes","Anja Wendzel","Karolin Konert","Fleur Alders"]}},
    {"date":"08.11.2016","time":"19:30","location":"München","cast":{"Dirigent":["Leif Klinkhardt"],"Graf von Krolock":["Thomas Borchert"],"Sarah":["Veronica Appeddu"],"Alfred":["Tom van der Ven"],"Professor Abronsius":["Victor Petersen"],"Chagal":["Michael Anzalone"],"Magda":["Fleur Alders"],"Herbert":["Sander van Wissen"],"Rebecca":["Merel Zeeman"],"Koukol":["Paolo Bianca"],"Tanzsolisten":["Stefan Mosonyi","Máté Gyenei","Alessandra Bizzarri"],"Gesangssolisten":["Sander van Wissen","Kirill Zolygin"],"Tanzensemble":["Joe Nolan","Kevin Hudson","Nicola Trazzi","Samantha Harris-Hughes","Katie Allday","Vicki Douglas","Nicole Ollio"],"Gesangsensemble":["Noah Wili","Pascal Höwing","Sanne Buskermolen","Marina Maniglio","Anja Wendzel","Karolin Konert","Astrid Gollob"]}},
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

        let startDate = moment(production[_('START')], 'YYYY-MM-DD HH:mm:ss.SSS');
        const endDate = moment(production[_('END')], 'YYYY-MM-DD HH:mm:ss.SSS');

        if (location) {
            /* If we know the location, allow for preview / premiere */
            startDate = startDate.subtract(2, 'days');
        }

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
