const express = require("express")
const uuid = require("uuid")

const app = express()


app.listen(3001, () => {
    console.log(uuid.v4());
})