const { exec } = require('node:child_process');
const ecosystem = require('../ecosystem.config.js');

const executeCommand = cmd =>
	new Promise((resolve, reject) => {
		exec(cmd, (err, stdout, stderr) => {
			if (err || stderr) reject(err || stderr);
			else resolve(stdout);
		});
	});

module.exports = async () => {
	try {
		console.log(await executeCommand('npm install --omit=dev'));
		console.log(await executeCommand(`pm2 restart ${ecosystem.apps[0].name}`));
	} catch (err) {
		console.error(err);
	}
};