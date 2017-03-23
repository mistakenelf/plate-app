var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new Schema({
  username: String,
  password: String,
  name: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", UserSchema, "users");
