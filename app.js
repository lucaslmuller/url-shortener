var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://"+process.env.IP+"/urls");

const app = new express();

const main = require("./routes/main");
const newUrl = require("./routes/new");
const redirect = require("./routes/redirect");

main(app);
newUrl(app);
redirect(app);

app.listen(process.env.PORT || 8080);