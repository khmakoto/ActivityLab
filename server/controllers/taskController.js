const mongoose = require("mongoose");
const Task = require("../schema/task");
const User = require("../schema/user");
const router = require("express").Router();
module.exports = router;

router.get('/', all);
router.get("/single", single);
router.post("/add", add);

function all(req, res) {
}

function single(req, res) {
		Task.count().exec(function (err, count) {
			// Get a random entry
			var random = Math.floor(Math.random() * count)

			// Again query all users but only fetch one offset by our random #
			Task.findOne().skip(random).exec(
				function (err, task) {
					res.json({task: task });
			})
		})
/*
	Task.findById(req.id, function (err, task) {
    if (err) {
    } else {
      res.json(task);
    }
	});
*/
}

function add(req, res) {

	User.findById(req.user._id, function (err, user) {
	  if (err) return handleError(err);
		req.body.annotations.forEach( seg  => {
			user.annotations.push(seg);
		});
	  user.save(function (err, updatedUser) {
	    if (err) return handleError(err);

			//TODO Benny
	    res.json({ok: 'ok' });
	  });
	});

}


/*
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
});*/
