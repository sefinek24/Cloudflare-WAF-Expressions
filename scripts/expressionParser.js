const fs = require('node:fs/promises');
const log = require('./log');
const PATTERN = /(## [^\n]*\n> \*\*Action:\*\* ([^\n]*)\n?)```([\s\S]*?)```/gi;

const expressionParser = text => {
	return [...text.matchAll(PATTERN)].map(match => {
		const name = match[1].split('\n')[0].replace(/^##\s*/, '').trim();
		const action = match[2].trim().toLowerCase().replace(/\s+/g, '_');
		const expressions = match[3].replace(/[\n\r]+/g, ' ').trim();
		return { name, action, expressions };
	});
};

module.exports = async () => {
	log(0, 'Parsing expressions from the markdown file...');

	try {
		const data = await fs.readFile('markdown/expressions.md', 'utf8');
		const codeBlocks = expressionParser(data);
		if (!codeBlocks.length) {
			console.log('Failed! No code blocks found.');
			return null;
		}

		return Object.fromEntries(codeBlocks.map((block, index) => [index + 1, block]));
	} catch (err) {
		console.error('Error reading the file:', err.message);
	}
};
