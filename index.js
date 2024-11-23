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
	} catch (err) {
		console.error('Git pull failed:', err.message);
	}
};

new CronJob(process.env.RULES_UPDATE_SCHEDULE || '0 11,14,16,18,20 * * *', pullAndUpdateWAFRules, null, true, 'UTC'); // At minute 0 past hour 11, 14, 16, 18, and 20.
(async () => pullAndUpdateWAFRules())();

if (process.env.NODE_ENV === 'production') {
	const restartApp = require('./jobs/reloadApp.js');
	new CronJob(process.env.APP_RESTART_SCHEDULE || '0 15 */2 * *', restartApp, null, true, 'UTC'); // At 15:00 on every 2nd day-of-month.
}