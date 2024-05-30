const mongoose = require("mongoose");

mongoose
    .connect(
        
    )
    .then(() => console.log("conectados a la base de datos"))
    .catch((err) => console.log(err));