const mongoose = require('mongoose');
module.exports = {
    connect: DB_HOST => {
        try {
            // Connect to the MongoDB cluster
            mongoose.connect(
                DB_HOST,
                {useNewUrlParser: true, useUnifiedTopology: true},
                () => console.log(" Mongoose is connected"),
            );
        } catch (e) {
            console.log("could not connect");
        }
    },
    close: () => {
        mongoose.connection.close();
    }
};