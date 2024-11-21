const { create } = require('axios');

module.exports = create({
	baseURL: 'https://api.cloudflare.com/client/v4',
	headers: {
		'Authorization': `Bearer ${process.env.CF_API_TOKEN}`,
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Accept-Encoding': 'gzip, deflate, br',
		'Accept-Language': 'pl;q=0.9',
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
	},
	timeout: 40000,
});