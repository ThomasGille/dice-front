const express = require('express');
const app = express();
const path = require('path');
var compression = require('compression');

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS

const forceSSL = function() {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
            ['https://', req.get('Host'), req.url].join('')
        );
        }
        next();
    }
}

const shouldCompress = function(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
  // fallback to standard filter function
  return compression.filter(req, res)
}

app.use(forceSSL());
app.use(compression({filter: shouldCompress}))

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default
// Heroku port

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});