const mongoose = require('mongoose')

const mongodburl = process.env.MONGODB_URL
mongoose.connect(mongodburl, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
var schema = mongoose.Schema
var Data1 = mongoose.model('Data1', new schema({
    'Country/Region': String,
    Confirmed: Number,
    Deaths: Number,
    Recovered: Number,
    Active: Number,
    Newcases: Number,
    NewDeaths: Number,
    NewRecovered: Number,
    Deaths100: Number,
    Recovered100: Number,
    Deaths100Recovered: Number,
    ConfirmedLastWeek: Number,
    oneWeekChange: Number,
    oneWeekIncreased: Number,
    WHORegion: String
}), 'data1')


var Data2 = mongoose.model('Data2', new schema({
    'Province/State': String,
    'Country/Region': String,
    Lat: Number,
    Long: Number,
    Date: Date,
    Confirmed: Number,
    Deaths: Number,
    Recovered: Number,
    Active: Number,
    WHORegion: String
}), 'data2')

module.exports = {
    Data1,
    Data2
}