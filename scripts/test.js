const expressionParser = require('../scripts/expressionParser.js');

(async () => {
	const expressions = await expressionParser();
	console.log(expressions);
})();