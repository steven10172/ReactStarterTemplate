var combine = require('path').resolve;

module.exports = function() {

    var src = combine(__dirname, '..', 'src');

    return {
        'src': src
    }

};