import { body } from "express-validator";

const userValidationArray = [
  body("name", "Name does not exist")
    .exists()
    .trim()
    .isLength({ min: 1 })
    .withMessage("Name empty.")
    .isAlpha()
    .withMessage("Name must be alphabet letters."),
  body("username")
    .isString()
    .withMessage("username should be string")
    .trim()
    .isLength({ min: 3 })
    .withMessage("username is empty")
    .escape(),
  body("email", "Invalid email").exists().isEmail(),
  body("address", "Address should contain values").isObject(),
  body("address.street")
    .isString()
    .withMessage("address street should be string")
    .trim()
    .isLength({ min: 3 })
    .withMessage("address steet is empty")
    .escape(),
  body("address.suite")
    .isString()
    .withMessage("address suite should be string")
    .trim()
    .isLength({ min: 3 })
    .withMessage("address suite is empty")
    .escape(),
  body("address.city")
    .isString()
    .withMessage("address city should be string")
    .trim()
    .isLength({ min: 3 })
    .withMessage("addresscity is empty")
    .escape(),
  body("address.zipcode")
    .isString()
    .withMessage("address zipcode should be string")
    .trim()
    .isLength({ min: 3 })
    .withMessage("address zipcode is empty")
    .escape(),
  body("phone")
    .isString()
    .withMessage("phone should be string")
    .trim()
    .isLength({ min: 7 })
    .withMessage("Phone is empty")
    .escape(),
  body("website")
    .isString()
    .withMessage("website should be string")
    .trim()
    .isLength({ min: 3 })
    .withMessage("website is empty")
    .escape(),
  body("company", "Address should contain values").isObject(),
  body("company.name")
    .isString()
    .withMessage("company name should be string")
    .trim()
    .isLength({ min: 3 })
    .withMessage("company name is empty")
    .escape(),
  body("company.catchPhrase", "catchPhrase should be string")
    .isString()
    .withMessage("company catchPhrase should be string")
    .trim()
    .isLength({ min: 3 })
    .withMessage("company catchPhrase is empty")
    .escape(),
  body("company.bs", "bs should be string")
    .isString()
    .withMessage("company bs should be string")
    .trim()
    .isLength({ min: 3 })
    .withMessage("company bs is empty")
    .escape(),
].map((validation) => validation.optional());

export const updateUserValidation = () => {
  return userValidationArray;
  // return [...userValidationArray].map((validation) => validation.optional())
};
