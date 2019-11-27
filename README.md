# Oiva app backend


## Install

To install Oiva app backend, run the following command:


 IF **Node.js** is **NOT installed**


```console
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh && sudo bash nodesource_setup.sh && sudo apt-get install nodejs
```

When **Node.js** is **installed** or already exists, install Oiva app using `npm`:


```console
npm install
```

Install TypeScript with `npm`:

```console
npm install typescript --save-dev
```


### Configure app

To be able to connect to database, you need to set connection string for `pg-promise` in `crendentials.json` file. The file can be found from `src` directory from the software root. Rename the file from `credentials.sample.json` to `credentials.json` by removing ".sample" from the filename. Change the value from line where key is `pgpPromise` and the value is `postgres://` and replace the connection string with the right one. The documentation for `pg-promise` library is available from [here](https://vitaly-t.github.io/pg-promise/Database.html). 

In expample below the app is using port `5432` which is default port for PostgreSQL and name of the database is `oiva`. Feel free to use different database name.

```json
{
    "pgpPromise": "postgres://username:password@host:5432/oiva"
}
```
