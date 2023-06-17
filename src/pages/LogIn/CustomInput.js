import React from "react";
import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label style={{ margin: "30px 0px 30px 50px", padding: "10px" }}>
        {label}
      </label>
      <input
        style={{ margin: "0px 15px 30px", padding: "10px" }}
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default CustomInput;
