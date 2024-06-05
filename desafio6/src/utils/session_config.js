const MongoStore = require("connect-mongo");

const config = {
    secret: "secretcoder",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
    store: MongoStore.create({
        
    }),
}

module.exports = config;