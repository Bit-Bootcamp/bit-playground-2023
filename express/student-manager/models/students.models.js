import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "fullname is required"],
    lowercase: true,
    unique: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    // match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  isActive: { type: Boolean, default: true },
  age: { type: Number, required: true, min: 7 },
  startDate: { type: Date }, //unix time "1234535657"
  image: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTricwoZPkUPa0Axlr3RXO5X9hy6UmUe6WWzKvq0IYzYQ&s",
  },
  documents: [String],
  address: {
    city: String,
    street: String,
    houseNumber: Number,
  },
  contact: Map,
  gender: { type: String, enum: ["male", "female"] },
  birthYear: {
    type: Number,
    validate: {
      validator: function (v) {
        const currentYear = parseInt(new Date().getFullYear().toString());
        return currentYear > v;
      },
      message: (props) => `${props.value} is not a valid year!`,
    },
  },
  grade: { type: Number },
});

const student = mongoose.model("student", studentsSchema);
export default student;
