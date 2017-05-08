'use strict';
angular.module('mean.socketshelper')
.factory('Socket', ['$timeout', function ($timeout) {
  var socket = io.connect(); // jshint ignore:line
  return {
    on: function (eventName, callback) {
      function wrapper() {
        var args = arguments;
        $timeout(function () {
          callback.apply(socket, args);
        });
      }
      socket.on(eventName, wrapper);
      return function () {
        socket.removeListener(eventName, wrapper);
      };
    },

    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $timeout(function () {
          if(callback) {
            callback.apply(socket, args);
          }
        });
      });
    },

    off: function (eventName, callback) {
      function wrapper() {
        var args = arguments;
        $timeout(function () {
          callback.apply(socket, args);
        });
      }
      socket.off(eventName);
      return function () {
        socket.removeListener(eventName, wrapper);
      };
    },

    removeAllListeners: function (eventName) {
      socket.removeAllListeners(eventName);
      return function () {
        socket.removeAllListeners(eventName);
      };
    },

    addListener: function (eventName, callback) {
      function wrapper() {
        var args = arguments;
        $timeout(function () {
          callback.apply(socket, args);
        });
      }
      socket.on(eventName, wrapper);
      return function () {
        socket.on(eventName, wrapper);
      };
    },

  };
}]);
