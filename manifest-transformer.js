
import lodash from 'lodash';

const { cloneDeepWith } = lodash;

import fs from 'fs';

export const manifestTransformer = {
	src: 'manifest.json',
	dest: '.',
	transform: (content) => {
		const packageJson = JSON.parse(fs.readFileSync('package.json',{encoding:'utf-8'}));
		const jsonContent = JSON.parse(content);
		jsonContent.version = packageJson.version;

		if (process.env.STRIP_CONFIGURATION && jsonContent.config) {
			jsonContent.config = cloneDeepWith(jsonContent.config, (value) => {
				if (typeof value === 'string')
				    return '%CONFIGURATION_VALUE%';
				if (typeof value === 'number')
				    return 999999999999;
			});
		}

		return JSON.stringify(jsonContent,null,2);
	}
};