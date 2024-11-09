const axios = require('../services/axios.js');
const fetchWAFCustomRules = require('./fetchWAFRules.js');
const log = require('../scripts/log.js');

module.exports = async zoneId => {
	log(0, 'Verifying the order of WAF parts for this zone...');

	try {
		const rules = await fetchWAFCustomRules(zoneId);
		const userDefinedRules = rules.filter(rule => !rule.description.match(/Part \d+/));
		const partRules = rules.filter(rule => rule.description && rule.description.match(/Part \d+/));

		if (userDefinedRules.length === 0 && partRules.length === 0) return log(2, 'No rules found to reorder.');

		const sortedPartRules = partRules.sort((a, b) => {
			const aIndex = parseInt(a.description.match(/Part (\d+)/)[1], 10);
			const bIndex = parseInt(b.description.match(/Part (\d+)/)[1], 10);
			return aIndex - bIndex;
		});

		const reorderedRules = [...userDefinedRules, ...sortedPartRules];
		for (let i = 0; i < reorderedRules.length; i++) {
			if (reorderedRules[i].priority !== i + 1) {
				log(2, `Rule '${reorderedRules[i].description}' is out of order. Updating priority...`);

				await axios.put(`/zones/${zoneId}/firewall/rules/${reorderedRules[i].id}`, {
					action: reorderedRules[i].action,
					description: reorderedRules[i].description,
					filter: { id: reorderedRules[i].filter.id },
					priority: i + 1,
				});

				log(1, `Updated priority for rule '${reorderedRules[i].description}' to ${i + 1}`);
			}
		}
	} catch (err) {
		log(3, `Failed to verify or reorder WAF parts - ${JSON.stringify(err.response?.data) || err.message}`);
	}
};