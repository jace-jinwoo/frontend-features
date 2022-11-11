const { createProxyMiddleware } = require("http-proxy-middleware");

const options = {
    target: "http://localhost:5000",
    changeOrigin: true
}

module.exports = function (app) {
    app.use(
        createProxyMiddleware(["/my-uploads", "/upload"], options)
    )
}