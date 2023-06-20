import React from "react";
import "./LogIn.css";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { basicSchema } from "./Schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import buySell from "../../assets/buy-sell-removebg-preview.png";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export default function LogIn() {
  return (
    <div className="body">
      <div className="buySell">
        <img
          src={buySell}
          alt="img1"
          style={{
            transform: "rotate(45deg)",
            zIndex: "-1",
            marginTop: "100px",
          }}
        ></img>
      </div>
      <h1
        style={{
          margin: "40px",
          padding: "30px",
          color: "midnightblue",
          textDecoration: "underline",
        }}
      >
        Buy&Donate.org CryptoApp
      </h1>
      <div className="uvod">
        <h1 style={{ fontSize: "3rem" }}>Grow your non-cash revenue.</h1>
        <h2>
          Request a demo to see how The Giving Block can help your nonprofit:
        </h2>

        <section>
          <CheckCircleIcon style={{ paddingRight: "10px" }} />
          Diversify revenue by accepting crypto and stock donations
        </section>
        <section>
          <CheckCircleIcon style={{ paddingRight: "10px" }} />
          Engage a new donor demographic with more ways to give
        </section>
        <section>
          <CheckCircleIcon style={{ paddingRight: "10px" }} />
          Tap into our platform’s giving campaigns and client-only resources
        </section>
        <h3>
          Learn how to integrate crypto and stock donations into your
          fundraising strategy today.
        </h3>
      </div>
      <div className="row">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmpassword: "",
            paymentpurchase: "",
            acceptedTos: false,
          }}
          validationSchema={basicSchema}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form>
              <h2 style={{ marginLeft: "20px" }}>Register</h2>
              <hr></hr>
              <CustomInput
                label="First name"
                name="firstname"
                type="text"
                placeholder="Enter your first name"
              />
              <div className="lastname">
                <CustomInput
                  label="Last name"
                  name="lastname"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="password">
                <CustomInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="confirm">
                <CustomInput
                  label="Confirm password"
                  name="confirmpassword"
                  type="password"
                  placeholder="Enter your confirmpassword"
                />
              </div>
              <div className="payment">
                <CustomSelect label="Payment" name="paymentpurchase">
                  <option value="buy">Buy</option>
                  <option value="donate">Donate</option>
                  <option value="sell">Sell</option>
                  <option value="trade">Trade</option>
                  <option value="invest">Invest</option>
                </CustomSelect>
              </div>
              <div className="checkbox">
                <CustomCheckBox name="acceptedTos" type="checkbox" />
              </div>
              <hr></hr>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ alignSelf: "center" }}
                >
                  Log in
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
