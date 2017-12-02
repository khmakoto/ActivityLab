const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
				activityNetId: String,
        annotations: [{
					label: String,
					segment: []
				}],
        duration   : Number,
        resolution : String,
        subset     : String,
				url        : String
}, { timestamps: true });
taskSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) { delete ret._id  }
});
module.exports = mongoose.model("Task", taskSchema);
