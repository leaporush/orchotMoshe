import React, { useState, useEffect } from 'react';
import "./donationDetailsDesign.css";

function PopupMessage({ message, duration }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
      <div style={{ display: visible ? 'block' : 'none' }}
      className='popup'>
      {message}
    </div>
  );
}

export default PopupMessage;