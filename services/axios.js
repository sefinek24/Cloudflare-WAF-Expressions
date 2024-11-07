const { create } = require('axios');

module.exports = create({
	baseURL: 'https://api.cloudflare.com/client/v4',
	headers: {
		'Authorization': `Bearer ${process.env.CF_API_TOKEN}`,
		'Content-Type': 'application/json',
	},
	timeout: 45000,
});