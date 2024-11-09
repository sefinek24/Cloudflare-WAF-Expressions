require('dotenv').config();
const { CronJob } = require('cron');

const updateWAFRules = require('./jobs/updateWAFRules.js');
new CronJob('0 10,15,20 * * *', updateWAFRules, null, true, 'UTC');

const reloadApp = require('./jobs/reloadApp.js');
new CronJob('5 10,15,20 * * *', reloadApp, null, true, 'UTC');