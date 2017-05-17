'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var SocketsHelper = new Module('socketshelper');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
SocketsHelper.register(function(app, http) {
  var io = require('./server/config/sockets')(http);
  SocketsHelper.io = io;

  //We enable routing. By default the Package Object is passed to the routes
  SocketsHelper.routes(app, io);
  return SocketsHelper;
});
