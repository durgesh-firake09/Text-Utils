import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div className="container my-3">
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.heading} : </strong> {props.alert.msg}
        </div>
      </div>
    )
  );
}

export default Alert;
