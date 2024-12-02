const log = require('../scripts/log.js');
const { axios } = require('../services/axios.js');

module.exports = async zoneId => {
	log(0, 'Fetching WAF rules...');

	try {
		const res = await axios.get(`/zones/${zoneId}/firewall/rules`);
		if (!res.data.success) {
			throw new Error(`Failed to fetch rules: ${res.data?.errors}`);
		}

		return res.data.result;
	} catch (err) {
		log(3, JSON.stringify(err.response?.data) || err.message);
		throw err;
	}
};