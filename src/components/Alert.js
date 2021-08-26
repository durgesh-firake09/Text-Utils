import React from "react";

function Alert(props) {
  return (
    <div style={{ height: "60px" }}>
      {props.alert && (
          <div
            className={`alert container alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{props.alert.heading} : </strong> {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
