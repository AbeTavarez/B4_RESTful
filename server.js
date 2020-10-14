`use strict`;
const express = require('express');
const morgan = require('morgan');
const nconf = require('nconf');
const pkg = require('./package.json');

//* nconf should load arg vars first, then env vars.
//two underscores to denote obj hierarchy should be use when reading env vars
nconf.argv().env('__');
// sets default values for conf param
nconf.defaults({ conf: `${__dirname}/config.json` });
// will filled any value not pass-in from the command line
nconf.file(nconf.get('conf'));

//*
const app = express();
app.use(morgan('dev'));
app.get('/api/version', (req, res) => res.status(200).send(pkg.version));

app.listen(nconf.get('port'), () => console.log(`Server running...`));
