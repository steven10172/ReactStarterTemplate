module.exports = function(grunt) {
	grunt.registerTask('build-dev-test', [
		'build-dev',
		'karma:unit'
	]);
};
