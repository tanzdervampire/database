const fs = require('fs');
const moment = require('moment');
const sql = require('sql.js');

const db = (function () {
    const buffer = fs.readFileSync('db.sqlite');
    return new sql.Database(buffer);
})();

const stmtShow = db.prepare(`
    SELECT
        DATE( "SHOW".DAY ) AS DAY,
        "SHOW".TIME AS TIME,
        "SHOW".TYPE AS TYPE,
        "PRODUCTION".ID AS PRODUCTION_ID,
        "PRODUCTION".LOCATION AS LOCATION,
        "PRODUCTION".THEATER AS THEATER
    FROM "SHOW"
    INNER JOIN "PRODUCTION" ON "PRODUCTION".ID = "SHOW".PRODUCTION_ID
    WHERE "SHOW".ID = :showId
`);

const stmtCast = db.prepare(`
    SELECT
        "CAST".ROLE,
        "PERSON".NAME
    FROM "CAST"
    INNER JOIN PERSON ON "CAST".PERSON_ID = "PERSON".ID
    WHERE "CAST".SHOW_ID = :showId
`);

const getShow = showId => {
    const show = stmtShow.getAsObject({ ':showId': showId });
    return {
        'day': show['DAY'],
        'time': show['TIME'],
        'type': show['TYPE'],
        'production': show['PRODUCTION_ID'],
        'location': show['LOCATION'],
        'theater': show['THEATER'],
    };
};

const getCast = showId => {
    let cast = {};
    stmtCast.bind({ ':showId': showId });
    while (stmtCast.step()) {
        let person = stmtCast.getAsObject();
        cast[person['ROLE']] = cast[person['ROLE']] || [];
        cast[person['ROLE']].push(person['NAME']);
    }

    return cast;
};

const showToJson = showId => {
    return Object.assign({}, getShow(showId), { 'cast': getCast(showId) });
};

const writeFile = show => {
    const dir = `.data/${show.location}`;
    const fn = `${dir}/${show.day}-${show.time.replace(/:/, '')}.json`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    const timestamp = moment(`${show.day} ${show.time}`, 'YYYY-MM-DD HH:mm').toDate();
    fs.writeFileSync(fn, JSON.stringify(show, null, 4), err => { if (err) { throw err; } });
    fs.utimesSync(fn, timestamp, timestamp);
};

(() => {
    try {
        const shows = db.exec(`SELECT ID FROM "SHOW" ORDER BY DATE( "SHOW".DAY ) ASC`);
        shows[0].values.forEach(row => {
            const showId = row[0];
            console.log(`Writing showId = ${showId}`);

            const show = showToJson(showId);
            writeFile(show);
        });
    } finally {
        stmtShow.free();
        stmtCast.free();
    }

    console.log(`Done!`);
})();