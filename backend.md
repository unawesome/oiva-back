# Oiva app backend


## Install

To install Oiva app backend, run the following command:


 IF **Node.js** is **NOT installed**


```console
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh && sudo bash nodesource_setup.sh && sudo apt-get install nodejs
```

When **Node.js** is **installed** or already exists, make sure that you are in app's root directory (`oiva-back/`) and then install Oiva app using `npm`:

```console
npm install
```


### Configure app

To be able to connect to database, you need to set connection string for `pg-promise` in `crendentials.json` file. The file can be found from `src` directory from the software root. Rename the file from `credentials.sample.json` to `credentials.json` by removing ".sample" from the filename. Change the value from line where key is `pgpPromise` and the value is `postgres://` and replace the connection string with the right one. The documentation for `pg-promise` library is available from [here](https://vitaly-t.github.io/pg-promise/Database.html). 

Below the app is using port `5432` which is default port for PostgreSQL and name of the database is `oiva`, but feel free to use different database name.

```json
{
    "pgpPromise": "postgres://username:password@host:5432/oiva"
}
```

You may need to create firewall rule to allow incoming connections to port `3000` using command: `ufw allow 3000`. Please note that you may also have to make inbound port rule for the port `3000` from your server provider's control panel.

Finally you can run Oiva app from software's root directory:

```console
npm run oiva
```
It should return the similar lines if the command is succeed:

```console
> Oiva-app@1.0.0 oiva /path/to/app
> tsc && node dist/app.js

Oiva app back-end listening on port 3000!
```

The backend part of the software can be now accessed by navigating with browser to the address `YOUR_HOSTNAME:3000`.
