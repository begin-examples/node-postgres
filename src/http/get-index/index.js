let { Client } = require("pg");
let config
// full Database URI will be used first if supplied
if (process.env.DB_URI) {
  config = {
    connectionString: process.env.DB_URI,
    // ssl property may be needed (i.e. Heroku)
    ssl: { rejectUnauthorized: false },
  }
} else {
  config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    //  ssl: { rejectUnauthorized: false },
  }
};

exports.handler = async function http() {
  let dbQuery;
  try {
    console.time('postgres query')
    let client = new Client(config);
    await client.connect();
    dbQuery = await client.query('SELECT * FROM student LIMIT 1;');
    await client.end();
    console.timeEnd('postgres query')
  } catch (e) {
    console.log(e);
  }
  let firstRecord = dbQuery.rows[0].firstname + ' ' + dbQuery.rows[0].lastname 
  let html = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Postgres Example</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
  </head>
  <body>

    <h1 class="center-text">
      Postgres Query Results
    </h1>

    <p class="center-text">
      The first record in the table belongs to: ${firstRecord}
    </p>

  </body>
</html>`;

  return {
    statusCode: 200,
    headers: {
      "content-type": "text/html; charset=utf8",
      "cache-control": "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
    },
    body: html,
    
  }
}
