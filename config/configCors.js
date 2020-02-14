var corsOptions = {
    "origin": 'https://frequencyficr.firebaseapp.com/',
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
}

module.exports = corsOptions;