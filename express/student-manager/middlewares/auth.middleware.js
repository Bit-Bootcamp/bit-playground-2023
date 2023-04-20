import passport from "passport";

export const signUpMiddleware = passport.authenticate("signup", {
  session: false,
});
