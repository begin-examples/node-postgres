const { Client } = require("pg");
const pgclient = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
});
pgclient.connect();

const table =
    "CREATE TABLE student(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL, age INT, address VARCHAR(80), email VARCHAR(40))";
const text = "INSERT INTO student(firstname, lastname, age, address, email) VALUES($1, $2, $3, $4, $5) ";
const values = ['John', 'Smith', 21, '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States', 'johnsmith@example.com'];
pgclient.query(table, (err, res) => {
    if (err) throw err;
});
pgclient.query(text, values, (err, res) => {
    if (err) throw err;
    pgclient.end();
});



// pgclient.query("SELECT * FROM student", (err, res) => {
//     if (err) throw err;
//     console.log(err, res.rows); // Print the data in student table
//     pgclient.end();
// });
// pgclient.query("SELECT * FROM student", (err, res) => {
//     if (err) throw err;
//     console.log(err, res.rows); // Print the data in student table
//     pgclient.end();
// });