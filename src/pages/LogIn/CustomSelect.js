import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [text, setText] = React.useState("");
  const [meta] = useField(props);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={text}
          onChange={handleChange}
          className={meta.touched && meta.error ? "input-error" : ""}
          renderValue={(value) => `⚠️  - ${value}`}
        >
          <MenuItem value="">
            <em>Payment</em>
          </MenuItem>
          <MenuItem value="buy">Buy</MenuItem>
          <MenuItem value="donate">Donate</MenuItem>
          <MenuItem value="trade">Trade</MenuItem>
          <MenuItem value="sell">Sell</MenuItem>
          <MenuItem value="invest">Invest</MenuItem>
        </Select>
        <FormHelperText>*Required</FormHelperText>
        {meta.touched && meta.error && (
          <div className="error">{meta.error}</div>
        )}
      </FormControl>
    </>
  );
};

export default CustomSelect;
