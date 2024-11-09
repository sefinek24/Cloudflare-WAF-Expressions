const { exec } = require('node:child_process');

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
		console.log(await executeCommand('pm2 restart app'));
	} catch (err) {
		console.error(err);
	}
};