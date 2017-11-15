const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const path = require("path");
//const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
const videoController = require("./server/controllers/videoController");
//mongoose
mongoose.connect('mongodb://localhost/portfolio');
//Express request pipeline
const app = express();


//webpack-hot-middleware
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));


//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname,"../client/views"));
//app.use(favicon(path.join(__dirname,"../public/assets/images/favicon.ico")));
app.use(express.static(path.join(__dirname,"./dist")));
// configure app to use bodyParser()
// this will let us get the data from a POST

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api", videoController);

app.get('/*', function(req, res) {
  res.send("index.html");
});


app.listen(7777,function(){
    console.log("Started listening on port", 7777);
})
