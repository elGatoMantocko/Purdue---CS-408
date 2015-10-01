(function () {

    'use strict';

    module.exports = function () {
        this.Before(function () {
          server.call('addUser', {
            username: 'Phony'
          });
        });
    };

})();
