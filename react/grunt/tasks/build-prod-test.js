module.exports = function(grunt) {
    grunt.registerTask('build-prod-test', [
        'build-prod',
        'karma:unit'
    ]);
};
