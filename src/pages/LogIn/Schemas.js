import * as yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  firstname: yup.string().required(
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="filled-error-helper-text"
          label="Try again"
          defaultValue=""
          placeholder="Please enter correct firstname"
          helperText="*Required"
          variant="filled"
        />
      </div>
    </Box>
  ),
  lastname: yup.string().required(
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="filled-error-helper-text"
          label="Try again"
          defaultValue=""
          placeholder="Please enter correct lastname"
          helperText="*Required"
          variant="filled"
        />
      </div>
    </Box>
  ),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: "Please create a strong passsword" })
    .required(
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            error
            id="filled-error-helper-text"
            label="Try again"
            defaultValue=""
            placeholder="Please enter correct password"
            helperText="*Required"
            variant="filled"
          />
        </div>
      </Box>
    ),
  confirmpassword: yup
    .string()
    .required(
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            error
            id="filled-error-helper-text"
            label="Try again"
            defaultValue=""
            placeholder="Please enter correct confirm-pass"
            helperText="*Required"
            variant="filled"
          />
        </div>
      </Box>
    )
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  email: yup.string().required(
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="filled-error-helper-text"
          label="Try again"
          defaultValue=""
          placeholder="Please enter correct email"
          helperText="*Required"
          variant="filled"
        />
      </div>
    </Box>
  ),
  paymentPurchase: yup
    .string()
    .oneOf(["buy", "sell", "trade", "invest", "donate"], "Invalid Payment")
    .required(""),
});
