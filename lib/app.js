const express = require('express');
const morgan = require('morgan');
const { resolve } = require('path');
const app = express();
const errorHandler = require('./util/error-handler');
const createEnsureAuth = require('./util/ensure-auth');
// add our mongoose plugins
require('./models/register-plugins');
const redirectHttp = require('./util/redirect-http');
const checkConnection = require('./util/check-connection');