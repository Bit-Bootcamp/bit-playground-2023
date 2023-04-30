import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "fullname is required"],
      lowercase: true,
      unique: false,
    },
    isActive: { type: Boolean, default: true },
    age: { type: Number, required: true, min: 7 },
    startDate: { type: Date, default: Date.now() }, //unix time "1234535657"
    image: {
      type: String,
      required: true,
    },
    documents: [String],
    address: {
      city: String,
      street: String,
      houseNumber: Number,
    },
    gender: { type: String, enum: ["male", "female"], required: true },
    phoneNumber: { type: String, required: true },
    stage: { type: Number, default: 1 },

    classes: [{ type: mongoose.Types.ObjectId, ref: "class" }],
    marks: [{ type: mongoose.Types.ObjectId, ref: "mark" }],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

studentsSchema.virtual("bio").get(function () {
  return `my name is ${this.fullName}, I'm ${this.age} years old, I live in ${this.address.city}`;
});

const student = mongoose.model("student", studentsSchema);
export default student;
