import mongoose, {
    Schema
} from 'mongoose';

const UserSchema = new Schema({
    role: {
        type: String,
        default: "user",
    },
    first_name: {
        type: String,
        required: "Please enter first name."
    },
    last_name: {
        type: String,
        required: "Please enter last name."
    },
    email: {
        type: String,
        required: "Please enter email."
    },
    password: {
        type: String,
        required: "Password required."
    },
    verified_email: {
        type: Boolean,
        default: False
    }
});

UserSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    config.get('myprivatekey')
  ); //get the private key from the config file -> environment variable
  return token;
}

const User = mongoose.model('User', UserSchema);

//function to validate user
function validateUser(user) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(3).max(255).required()
  };
  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
