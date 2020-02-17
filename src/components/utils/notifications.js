import React from "react";
import "../../assetStyles/include.css";

const NotificationManager = ({ msg }) => {
  msg =
    msg === undefined
      ? {
          error: {
            type: "warning",
            details: "This is and error box",
            title: "Error head",
            display: false,
            delay: 5000
          }
        }
      : msg;

  return (
    <div
      className={`text-center alert alert-dismissible fade show font-12 p-2 alert-${
        msg.type
      }`}
      role="alert"
      style={msg.display ? { display: "block" } : { display: "none" }}
    >
      <strong style={{ textTransform: "uppercase" }}>{msg.title}</strong> <br />
      {msg.details}
      <button
        type="button"
        className="close"
        style={{ padding: ".1rem .2rem" }}
        data-dismiss="alert"
        aria-label="Close"
        onClick={() => {
          msg.self.setState({ error: { ...msg, display: false } });
        }}
      >
        <span aria-hidden="true" className="font-15">
          &times;
        </span>
      </button>
    </div>
  );
};

export default NotificationManager;
