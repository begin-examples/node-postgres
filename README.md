## Begin Postgres Example
This example demonstrates a simple query to an externally hosted Postgres Database. 

## Getting started
- Copy `preferences.arc.example` to `preferences.arc`
- Start the local dev server: `npm start`
- To Deploy set environment variables for your Database in Begin
  - Set `DATABASE_URL`
  -  -OR-
  - Set `POSTGRES_DATABASE`, `POSTGRES_HOST`, `POSTGRES_PASSWORD` , `POSTGRES_PORT`, and `POSTGRES_USER`

## Managing Connections
Postgres and most other relational databases have a limit to the number of open connections that can be made. Since your serverless application can scale up quickly it is possible overload the database. There are several approaches to managing this:
1. Set a concurrency limit for any function in your app that may attempt to query the database. This can be done in the `config.arc` file in the `src` directory. 
2. Use an external service to manage connections such as AWS RDS.
3. Host your own connection pooling server like `pg-bouncer`.
4. Or try DynamoDB (available with Begin Data) that does not have this limitation.

## Local Development
This example is set up to run a local version of Postgres using Docker Compose. If you would like to remove this dependance on Docker you can remove the `@sandbox-startup` script from the `preferences.arc` file and change the environment variables in `preferences.arc` under testing to point at your hosted database for local development also.
## Deploy your own

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/node-postgres)

Deploy your own clone of this app to Begin!

## Reference

-   [Quickstart](https://docs.begin.com/en/guides/quickstart/) - basics on working locally, project structure, deploying, and accessing your Begin app
-   [Creating new routes](https://docs.begin.com/en/functions/creating-new-functions) - basics on expanding the capabilities of your app

Head to [docs.begin.com](https://docs.begin.com/) to learn more!
