/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Account').controller('ProfileController', ['$scope', '$state', function ($scope, $state) {
        $scope.user = {name: '', username: '', email: ''};
    }]);

})();