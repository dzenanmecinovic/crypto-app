import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  firstname: yup.string().required("Required"),
  lastname: yup.string().required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: "Please create a strong passsword" })
    .required("Password is required"),
  confirmpassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter correct email address"),
  paymentPurchase: yup
    .string()
    .oneOf(["buy", "sell", "trade", "invest", "donate"], "Invalid Payment")
    .required("Please select Payment"),
});
