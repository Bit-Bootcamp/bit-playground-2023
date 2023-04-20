import Users from "../models/user.model.js";
import passport from "passport";
import jwt from "jsonwebtoken";

// export const createUser = async (req, res) => {
//   try {
//     const user = await Users.create(req.body);
//     res.json({ status: "success", data: user });
//   } catch (err) {
//     res.status(400).json({ status: "error", data: err });
//   }
// };

export const signup = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: req.user,
    });
  } catch (err) {
    res.status(500).json({ status: "error", data: err });
  }
};

export const getUser = async (req, res) => {
  try {
    const classes = await Users.find().populate("studentId", "fullName");

    res.json({ status: "success", results: classes.length, data: classes });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "error", data: err });
  }
};

export const login = async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error("no user found");
        next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        const body = { sub: user._id, email: user.email };
        const token = jwt.sign({ user: body }, process.env.JWT_SECRET);

        res.json({ token });
      });
    } catch (err) {}
  })(req, res, next);
};
