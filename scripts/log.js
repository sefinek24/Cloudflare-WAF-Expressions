const levels = {
	0: '[INFO   ]',
	1: '[SUCCESS]',
	2: '[WARN   ]',
	3: '[ERROR  ]',
	4: '[DEBUG  ]',
};

module.exports = (level, message) => {
	const logFunction = level === 2 ? console.warn : level >= 3 ? console.error : console.log;
	logFunction(`${levels[level] || '[UNKNOWN LEVEL]'} ${message}`);
};