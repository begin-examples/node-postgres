let { Client } = require("pg");
let config = {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    port: process.env.POSTGRES_PORT,
  // ssl property below may be needed for development with some postgres providers like Heroku
  //  ssl: { rejectUnauthorized: false },
};

exports.handler = async function http(req) {
  let result;
  try {
    let client = new Client(config);
    await client.connect();
    result = await client.query('SELECT * FROM student;');
    await client.end();
  } catch (e) {
    console.log(e);
    return { statusCode: 400 };
  }
  let output = JSON.stringify(result);
  let html = /*html*/ `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Hi!</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
  </head>
  <body>

    <h1 class="center-text">
      <!-- ↓ Change "Hello world!" to something else and head on back to Begin! -->
      Hello world!
    </h1>

    <p class="center-text">
      Your <a href="https://begin.com" class="link" target="_blank">Begin</a> app is ready to go!
    </p>

    <pre>${output}</pre>

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
