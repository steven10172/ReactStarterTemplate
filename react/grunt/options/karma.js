/**
 * Unit testing tasks.
 */

'use strict';

module.exports = {
	karma: {
        unit: {
            configFile: process.cwd() + "/config/karma.conf.js",
            browsers: ['PhantomJS'],
			basePath: process.cwd() + "/react"
        },
		"unit-all-browsers": {
			configFile: process.cwd() + "/config/karma.conf.js",
			basePath: process.cwd() + "/config/"
		}
	}
};
