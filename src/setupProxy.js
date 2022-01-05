const proxy = require( "http-proxy-middleware" )

module.exports = function(app) {

    app.use(
        proxy("/pfa", {
            target: "http://localhost:8099",
            // target: "http://ec2-3-134-108-35.us-east-2.compute.amazonaws.com:8911",
            changeOrigin: true
        })
    );

    app.use(
        proxy("/pft", {
            target: "http://localhost:8099",
            // target: "http://ec2-3-134-108-35.us-east-2.compute.amazonaws.com:8911",
            changeOrigin: true
        })
    );

};