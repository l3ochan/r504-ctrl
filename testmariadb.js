const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '172.52.0.10',
    user: 'r504',
    password: 'r504',
    connectionLimit: 5
});
pool.getConnection()
    .then(conn => {

        conn.query("SELECT * FROM countries")
            .then((rows) => {
                console.log('countries : ', rows);
            })
            .catch(err => {
                //handle error
                console.log(err);
                conn.end();
            })

    }).catch(err => {
        //not connected
    });