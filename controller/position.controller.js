const express = require("express")


//calcule de distance entre deux position
const geolib = require("geolib")

//donne les information liee a un lieux
const openGeocoder = require('node-open-geocoder');
let geolocation = require('geolocation');
const { distanceConversion } = require("geolib");
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

    const lieu = openGeocoder()
        .reverse(-8.945406, 38.575078)
        .end((err, res) => {
            console.log(res);
        })


})

router.get("/localiser", (req, res) => {

    //calcule de la distance entre deux lieux
    distance = geolib.getPreciseDistance(
        //depart
        {
            latitude: 51.5203,
            longitude: 7.49347
        },
        //arriver
        { latitude: "51° 31' N", longitude: "7° 28' E" })

    //renvoi les coordonnes du centre d'un lieu
    centre = geolib.getCenter([
        { latitude: 52.516272, longitude: 13.377722 },
        { latitude: 51.515, longitude: 7.453619 },
        { latitude: 51.503333, longitude: -0.119722 },
    ])

    console.log(distance / 1000, 'Km')
    console.log(centre)

    //renvoi le nom de la ville 
    const lieu = openGeocoder()
        .reverse(centre.longitude, centre.latitude)
        .end((err, res) => {
            console.log(res.name);
        })

})
module.exports = router