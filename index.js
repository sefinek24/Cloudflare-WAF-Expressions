require('dotenv').config();
const axios = require('./services/axios.js');
const log = require('./scripts/log.js');
const expressionParser = require('./scripts/expressionParser.js');
const fetchWAFRules = require('./cloudflare/fetchWAFRules.js');
const verifyAndReorderParts = require('./cloudflare/verifyAndReorderParts.js');

const { CF_API_TOKEN } = process.env;
if (!CF_API_TOKEN) throw new Error('CF_API_TOKEN is missing. Check the .env file.');

const getZones = async () => {
	try {
		log(0, 'Retrieving all zones from your Cloudflare account...');
		const res = await axios.get('/zones');
		if (!res.data.success) throw new Error(`Failed to fetch zones. ${JSON.stringify(res.data?.errors)}`);

		const zones = res.data.result;
		log(0, `Successfully retrieved ${zones.length} zone(s): ${zones.map(zone => zone.name).join(', ')}`);
		return zones;
	} catch (err) {
		log(3, `Failed to fetch zones: ${JSON.stringify(err.response?.data) || err.stack}`);
		throw err;
	}
};

const verifyFilterUpdate = async (zoneId, filterId, expression) => {
	try {
		log(0, 'Verifying if the update was completed successfully...');
		const res = await axios.get(`/zones/${zoneId}/filters/${filterId}`);
		if (!res.data.success) throw new Error(`Verification failed. ${res.data?.errors}`);

		if (res.data.result.expression !== expression) log(2, 'Verification failed. Expression mismatch!');
	} catch (err) {
		log(3, `Filter ${filterId}: Failed to verify - ${JSON.stringify(err.response?.data) || err.stack}`);
	}
};

const updateFilter = async (zoneId, filterId, expression, oldExpression) => {
	try {
		if (oldExpression === expression) return log(0, 'No update needed. Rule is already up-to-date.');

		log(0, 'Discrepancy detected, updating rule...');
		const res = await axios.put(`/zones/${zoneId}/filters/${filterId}`, { id: filterId, expression });
		if (!res.data.success) throw new Error(`Update failed. Details: ${res.data?.errors}`);

		await verifyFilterUpdate(zoneId, filterId, expression);
	} catch (err) {
		log(3, `Update failed - ${JSON.stringify(err.response?.data) || err.message || err.stack}`);
	}
};

const createNewRule = async (zoneId, description, action, expression, index) => {
	try {
		log(0, `Creating new WAF rule '${description}' (action ${action})...`);
		const filterResponse = await axios.post(`/zones/${zoneId}/filters`, [{ expression }]);
		if (!filterResponse.data.success) throw new Error(`Failed to create filter. ${filterResponse.data?.errors}`);

		const res = await axios.post(`/zones/${zoneId}/firewall/rules`, [{
			filter: { id: filterResponse.data.result[0].id },
			action,
			description,
			priority: (index || 0) + 1,
		}]);

		if (!res.data.success) throw new Error(`Failed to create rule. ${res.data?.errors}`);
		log(1, `WAF rule '${description}' created successfully`);
	} catch (err) {
		log(3, `Failed to create new rule for zone ${zoneId} - ${JSON.stringify(err.response?.data) || err.stack}`);
	}
};

const updateWAFCustomRulesForZone = async (expressions, zone) => {
	try {
		log(0, `=================== CHECKING THE ZONE ${zone.name.toUpperCase()} (${zone.id}) ===================`);

		const rules = await fetchWAFRules(zone.id);
		if (rules.length === 0) return log(0, '-> No WAF rules available for the specified zone. Ensure rules are available for modification.');

		for (const [indexString, block] of Object.entries(expressions)) {
			const index = parseInt(indexString);
			const { name, action, expressions: part } = block;
			const matchingRule = rules.find(rule => rule.description && rule.description.includes(`Part ${index}`));

			if (part && matchingRule) {
				const filterId = matchingRule.filter.id;
				log(0, `-> Checking '${matchingRule.description}' (${filterId})...`);
				await updateFilter(zone.id, filterId, part, matchingRule.filter.expression);
			} else if (part) {
				log(2, `-> No matching rule found for part ${index}`);
				await createNewRule(zone.id, name, action, part, index);
			}
		}

		await verifyAndReorderParts(zone.id);
	} catch (err) {
		log(3, `-> Error during update: ${err.message}`);
	}
};

const updateWAFCustomRules = async () => {
	try {
		const expressions = await expressionParser();
		if (!expressions || Object.keys(expressions).length === 0) return log(0, 'No expressions found.');

		const zones = await getZones();
		for (const zone of zones) {
			await updateWAFCustomRulesForZone(expressions, zone);
		}

		log(1, 'Successfully!');
	} catch (err) {
		log(3, `Error during update for all zones: ${err.message}`);
	}
};

updateWAFCustomRules();
