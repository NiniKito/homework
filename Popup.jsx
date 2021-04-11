import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
const Popup = () => {
  const [popup, setPopup] = useState(false);
  const popupRef = useRef();
  useEffect(() => {
    let clickHandler = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        if (popup) setPopup(false);
      }
    };
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  });
  return (
    <div className="main_container">
      <div className="container">
        <button className="button" onClick={() => setPopup(true)}>
          Open Popup
        </button>
      </div>
      {popup && (
        <div className="popup" ref={popupRef}>
          <div className="closepopup" onClick={() => setPopup(false)}>
            Close Popup
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
