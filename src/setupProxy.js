const proxy = require( "http-proxy-middleware" )

module.exports = function(app) {
    app.use(
        proxy("/pfa", {
            target: "http://localhost:8099",
            changeOrigin: true
        })
    );

    app.use(
        proxy("/pft", {
            target: "http://localhost:8099",
            changeOrigin: true
        })
    );

};