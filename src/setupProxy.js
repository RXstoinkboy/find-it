const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/geo/**', { target: 'https://wft-geo-db.p.rapidapi.com/v1', changeOrigin: true }));
    app.use(proxy('/v3/**', { target: 'https://api.yelp.com', changeOrigin: true }));
    app.use(proxy('/Miserlou/**', { target: 'https://gist.githubusercontent.com/', changeOrigin: true }));
};

// have to add changeOrigin: true in order to make it work. Without it ERR_TLS_CERT_ALTNAME_INVALID error occures