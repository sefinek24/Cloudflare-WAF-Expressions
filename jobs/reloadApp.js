const { exec } = require('node:child_process');

module.exports = () => {
	exec('pm2 restart app', (err, stdout, stderr) => {
		if (err) return console.error(err);
		if (stderr) return console.error(stderr);
		console.log(stdout);
	});
};