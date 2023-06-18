import React from "react";
import { useField } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label={label}
          variant="filled"
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        {meta.touched && meta.error && (
          <div className="error">{meta.error}</div>
        )}
      </Box>
    </>
  );
};

export default CustomInput;
