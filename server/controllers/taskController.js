const mongoose = require("mongoose");
const Task = require("../schema/task");
const router = require("express").Router();
module.exports = router;

router.get('/', all);
router.route("/single").get(single)

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
