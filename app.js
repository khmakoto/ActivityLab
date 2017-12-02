const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const expressSession = require('express-session');
const path = require("path");
//const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');



const facebookController = require("./server/controllers/facebookController");
const taskController = require("./server/controllers/taskController");
const userController = require("./server/controllers/userController");






//Express request pipeline
const app = express();
//app.use(favicon(path.join(__dirname,"../public/assets/images/favicon.ico")));
app.use(express.static(path.join(__dirname,"./dist")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));




//passport
app.use(facebookController.passport.initialize());
app.use(facebookController.passport.session());
//mongoose
mongoose.connect('mongodb://localhost/activityLab');
//webpack
const compiler = webpack(webpackConfig);
//webpack-hot-middleware
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));





app.use("/auth/facebook", facebookController.router);
app.use("/api/users", userController);
app.use("/api/tasks", taskController);


app.get('/*', function(req, res) {
  res.sendFile("index.html", {root: path.join(__dirname, "./dist")});
});


app.listen(7777,function(){
    console.log("Started listening on port", 7777);
})
