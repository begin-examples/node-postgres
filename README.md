## Begin Postgres Example
This example demonstrates a simple query to an externally hosted Postgres Database. 

## Deploy your own

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/node-postgres)

Deploy your own clone of this app to Begin!

## Getting started
To deploy to staging on Begin set environment variables for your hosted Database:
  - Set `DATABASE_URI`
   -or-
  - Set `DB_NAME`, `DB_HOST`, `DB_PASSWORD` , `DB_PORT`, and `DB_USER`

For local testing point to a hosted testing database by setting environment variables for the sandbox. See the example in `preferences.arc.example` and save as `preferences.arc`. To start the sandbox run `npm start`. Alternatively you can install Postgres locally or use a Postgres Docker container for local development. 
## Managing Connections
Postgres and most other relational databases have a limit to the number of open connections they can support. Since your serverless application can scale up quickly it is possible overload those connections. There are several approaches to managing this:
1. Set a concurrency limit for any function in your app that may attempt to query the database. This can be done in the `config.arc` file in the `src` directory for each endpoint. 
2. Use a service to manage connections such as [AWS RDS Proxy](https://aws.amazon.com/rds/proxy/).
3. Host your own connection pooling server like `pg-bouncer`.
4. Or try DynamoDB (available with Begin Data) that does not have this limitation.

## Reference

-   [Quickstart](https://docs.begin.com/en/guides/quickstart/) - basics on working locally, project structure, deploying, and accessing your Begin app
-   [Creating new routes](https://docs.begin.com/en/functions/creating-new-functions) - basics on expanding the capabilities of your app

Head to [docs.begin.com](https://docs.begin.com/) to learn more!
