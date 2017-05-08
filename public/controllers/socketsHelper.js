'use strict';

/* jshint -W098 */
angular.module('mean.socketshelper').controller('SocketsHelperController', ['$scope', 'Global', 'SocketsHelper',
  function($scope, Global, SocketsHelper) {
    $scope.global = Global;
    $scope.package = {
      name: 'socketshelper'
    };
  }
]);
