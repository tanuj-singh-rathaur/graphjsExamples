const data1 = require('./mongooseconnect').Data1
const arrayOfCountry = []
data1.find({}, (err, data) => {
    data.forEach(function (item) {
        arrayOfCountry.push(item['Country/Region'])
    })

})
module.exports = arrayOfCountry