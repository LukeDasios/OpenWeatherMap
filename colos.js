const unirest = require("unirest")
const express = require("express")
const app = express()
const RAPID_APP_ID = process.env.RAPID_APP_ID
const RAPID_API_KEY = process.env.RAPID_API_KEY
const PORT = process.env.PORT || 3000

app.get("/", function (req, res) {
  unirest
    .get("https://community-open-weather-map.p.rapidapi.com/weather")
    .header("X-RapidAPI-Key", RAPID_API_KEY)
    .header("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
    .query({
      appid: RAPID_APP_ID,
      lon: "12.4924",
      lat: "41.8902",
      units: "metric",
      mode: "html",
    })

    .end(function (result) {
      res.writeHead(200, { "Content-Type": "text/html" })
      res.write(result.body)
      console.log("Colosseum, I am coming!")
    })
})

app.listen(PORT, function () {
  console.log(`Server running at https://127.0.0.1:${PORT}/`)
})
