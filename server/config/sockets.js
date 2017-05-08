'use strict';

module.exports = function(http) {

    var io = require('socket.io')(http);
    console.log('================================SOCKETS SERVER STARTED===========================');

    io.use(function(socket, next) {
        var data = socket.request;

        if (!data.headers.cookie) {
            console.log('No cookie transmitted.');
            return next(new Error('No cookie transmitted.'));
        }

        // console.log('data.headers.cookie:', data.headers.cookie);

        // var parsedCookie = cookie.parse(data.headers.cookie);
        // var sessionID = parsedCookie[config.sessionName];
        // var parsedSessionID = cookieParser.signedCookie(parsedCookie[config.sessionName], config.sessionSecret);

        // if (sessionID === parsedSessionID) {
        //     console.log('Cookie is invalid.');
        //     return next(new Error('Cookie is invalid.'));
        // }

        next();
    });

    return io;
};
