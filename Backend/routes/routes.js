/** @format */

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signup } = require("../controllers/auth_controller");

router.post(
  "/signup",
  [
    check("name", "name is required").isLength({ min: 3 }),
    check("password", "password should be at least 6 character").isLength({
      min: 6,
    }),
  ],
  signup
);

module.exports = router;
