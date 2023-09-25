const express = require("express")
const uuid = require("uuid")
const geolocation = require("geolocation");
const app = express()
const position = require("./controller/position.controller")


app.use(position)
    // const getAddress = async (latitude, longitude) => {
    //   const options = {
    //     latlng: { latitude, longitude },
    //   };
    //   const address = await openstreetmap.geocode(options);
    //   return address.results[0].formatted_address;
    // };

// const address = await getAddress(37.7833, -122.4167);
// console.log(address);



app.listen(3001, () => {
    console.log(uuid.v4());
    // console.log(location);
})