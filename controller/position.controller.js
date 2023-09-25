const express = require("express")
const localisation = require("geolocation")
const openGeocoder = require('node-open-geocoder');

const router = express.Router()

router.get("/position/:lieu", (req, res) => {
    lieu = req.params.lieu
        // console.log(req)
    const position = openGeocoder()
        .geocode(lieu)
        .end((err, res) => {
            if (err) {
                console.log("le lieux specifier n'existe pas ")
            } else {
                console.log("longitude: ", res[0].lon, ",latitude: ", res[0].lat, ",Lieu: ", res[0].name, ",Pays: ", res[0].address.country, );

            }
        })
        //     // res.send(position)
})

router.get("/lieu", (req, res) => {

    console.log(req);

    // const lieu = openGeocoder()
    //     .reverse(-8.945406, 38.575078)
    //     .end((err, res) => {
    //         console.log(res);
    //     })


})
module.exports = router