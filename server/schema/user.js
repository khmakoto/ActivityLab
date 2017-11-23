
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  facebook    			 : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
  }
}, { timestamps: true });
userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) { delete ret._id  }
});
module.exports = mongoose.model("User", userSchema);
