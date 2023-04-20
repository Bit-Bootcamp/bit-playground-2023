import passport from "passport";
import { Strategy as localStrategy } from "passport-local";

import Users from "../models/user.model.js";
// bcrypt passport jsonwebtoken passport-jwt passport-local
passport.use(
  "signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const user = await Users.create({
          email,
          password,
          username: req.body.username,
        });

        return done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await Users.findOne({ email });

        if (!user) return done(null, false, { message: "invalid credentials" });

        const validate = await user.isValidPassword(password);

        console.log("user");

        if (!validate)
          return done(null, false, { message: "invalid credentials" });

        return done(null, user, { message: "Logged in Successfully" });
      } catch (err) {
        console.log(err);
        return done(err);
      }
    }
  )
);
