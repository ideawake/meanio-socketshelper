'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(SocketsHelper, app, circles, database, io) {

  // app.get('/api/socketsHelper/example/anyone', function(req, res, next) {
  //   res.send('Anyone can access this');
  // });

  // app.get('/api/socketsHelper/example/auth', auth.requiresLogin, function(req, res, next) {
  //   res.send('Only authenticated users can access this');
  // });

  // app.get('/api/socketsHelper/example/admin', auth.requiresAdmin, function(req, res, next) {
  //   res.send('Only users with Admin role can access this');
  // });

  // app.get('/api/socketsHelper/example/render', function(req, res, next) {
  //   SocketsHelper.render('index', {
  //     package: 'sockets-helper'
  //   }, function(err, html) {
  //     //Rendering a view from the Package server/views
  //     res.send(html);
  //   });
  // });


  io.on('connection', function(socket) {
    // console.log(socket);

    console.log('Socket Server: user connected');

    /**
    * disconnect
    */
    socket.on('disconnect', function() {
        console.log('Socket Server: user disconnected');
    });

  });
};
