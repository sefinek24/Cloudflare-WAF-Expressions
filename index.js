require('dotenv').config();
const { CronJob } = require('cron');
const simpleGit = require('simple-git');
const gitClient = simpleGit();

const executeWAFRuleUpdate = require('./jobs/updateWAFRules.js');

const pullAndUpdateWAFRules = async () => {
	try {
		const { summary } = await gitClient.pull();
		console.log(summary);

		await executeWAFRuleUpdate();
	} catch (error) {
		console.error(`Git pull failed: ${error.message}`);
	}
};

new CronJob('0 10,15,20 * * *', pullAndUpdateWAFRules, null, true, 'UTC');
(async () => pullAndUpdateWAFRules())();

const restartApp = require('./jobs/reloadApp.js');
new CronJob('5 10,15,20 * * *', restartApp, null, true, 'UTC');