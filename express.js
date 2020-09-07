const express = require('express')
const { Data1, Data2 } = require('./mongooseconnect')
const arrayOfCountry = require('./data')
const path = require('path')
const publicdirectory = path.join(__dirname, './public')
const app = express()
const completeData = {}

app.use(express.static(publicdirectory))
const port = 3000

app.get('/getData', (req, res) => {
    let searchKey = req.query.Country

    if (searchKey) {

        Data1.find({ 'Country/Region': searchKey }, (error, data) => {
            completeData.data1 = data

        })
        Data2.find({ 'Country/Region': searchKey }, (error, data) => {
            completeData.data2 = data
            console.log(data.length)
        })

        res.send(completeData)

    }
    else
        res.send(arrayOfCountry)


})

app.listen(port, () => {
    console.log('server is up and running on port ' + port)
})