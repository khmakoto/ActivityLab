const mongoose = require("mongoose");
const User = require("../schema/user");
const router = require("express").Router();

router.get('/', all);
router.get('/add', add);
router.route("/me").get(me)
router.route("/:id").get(single)

function all(req, res) {
}

function single(req, res) {
	console.log(req.user)
	console.log(req.isAuthenticated())
	User.findById(req.user._id, function (err, user) {
    if (err) {
      console.log('GET Error: There was a problem retrieving: ' + err);
    } else {
      console.log('GET Retrieving ID: ' + user._id);
      res.json(user);
    }
	});
}

function add(req, res) {
  const user = new User();
  user.save(function (err) {
      if (err)
          res.send(err);
      else
          res.json(user);
  });
}

function me(req, res) {
	console.log(req.user)
	console.log(req.isAuthenticated())
	User.findById(req.user._id, function (err, user) {
    if (err) {
      console.log('GET Error: There was a problem retrieving: ' + err);
    } else {
      console.log('GET Retrieving ID: ' + user._id);
			console.log(user);
      res.json(user);
    }
	});
}
/*

// route middleware to validate :id
router.param('id', function(req, res, next, id) {
    User.findById(id, function (err, user) {
        if (err) {
            console.log(id + ' was not found');
            res.status(404)
            var err = new Error('Not Found');
            err.status = 404;
            res.json({message : err.status  + ' ' + err});
        } else {
            req.id = id;
            next();
        }
    });
});
*/
module.exports = router;
