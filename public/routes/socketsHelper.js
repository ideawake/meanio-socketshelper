'use strict';

angular.module('mean.socketshelper').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('socketsHelper example page', {
      url: '/socketsHelper/example',
      templateUrl: 'sockets-helper/views/index.html'
    });
  }
]);
