mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/kiray';
if (process.env.NODE_ENV === 'production') {
    dbUrl = 'mongodb://kalab:tedros.1@ds235788.mlab.com:35788/kiray';

}
mongoose.connect(dbUrl);


// CONNECTION EVENTS
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbUrl);
});
mongoose.connection.on('errorho', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

var mainFilterPointesSchema = mongoose.Schema({
    place : String,
    numberOfBedRoom : Number,
    monthlyrent : Number,
    availability : Number,
    Flour : Number,
    shower : Number,
    approval: Boolean,
    GuestHouse: Boolean,
    myphonenumber: Number,
    userphonenumber: Number

});

var delalaDataSchema = mongoose.Schema({
    delalaUsername : String,
    password : String
});

    mongoose.model('delalaDatas', delalaDataSchema);
mongoose.model('mainFilterPointes', mainFilterPointesSchema);


