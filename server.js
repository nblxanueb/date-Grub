const express = require("express");
"use strict";
const yelp = require("yelp-fusion");
const app = express();
const path = require('path');
const apiKey = 'JKgB-qTngBxCtMm5bd8DcAk01DzWVwqdfi-cjbs5LYcfvWMNLdlY0sh7Y07KUP1_LFgpUUzCokpdqvmO4D8vN81Jy9bMijA8txuG2xLnSsihHKSa9_xH7d3dt3RDW3Yx';

const PORT = process.env.PORT || 4567;

// const restaurant = (request, response, next) => {
  // const searchRequest = {
  //   term:'dinner',
  //   location: '10019',
  //   price: '4',
  //   open_now: 'true',
  //   radius: 1000,
  // };

const client = yelp.client(apiKey);

app.use("/", express.static("./build/"));


// client
  // .search(searchRequest)
// .then(response => {
//   const name = response.jsonBody.businesses[0].name;
//   const address = response.jsonBody.businesses[0].location.address1;

//   console.log(name);
//   console.log(address);

//   next();
// })
// .catch(e => {
//   console.log(e);
//   next(e);
// });

app.get("/yelp-proxy.json", (request, response) => {
  // response.json(response.restaurant);
  console.log(request.query);
    const searchRequest = request.query;
  client.search(searchRequest)
    .then(data => {
      const name = data.jsonBody.businesses[0].name;
      const address = data.jsonBody.businesses[0].location.address1;
      response.json(data.jsonBody.businesses);
    });
});

if (process.env.NODE_ENV == "production") {
  app.get("/*", function(request, response) {
    response.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Connected now on port ${PORT}`);
});

