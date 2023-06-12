import React from "react";
import ReactDOM from "react-dom";

const Modal = React.memo((props) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "16px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "12px"
  };

  const contentStyle = {
    fontSize: "16px"
  };
   console.log("modal component rendered") 
  return ReactDOM.createPortal(
    <div style={cardStyle}>
      <div style={titleStyle}>{props.title}</div>
      <div style={contentStyle}>{props.content}</div>
    </div>,
    document.getElementById("Portal-Modal")
  );
});

export default Modal;
