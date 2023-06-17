import React from "react";
import { useField } from "formik";

export default function CustomCheckBox({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="checkbox">
        <input
          style={{ margin: "60px 0px 50px 180px", padding: "10px" }}
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span style={{ paddingLeft: "10px" }}>
          I accept the terms of service
        </span>
      </div>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}
