
import React, { useState } from "react";
import axios from "axios";
import OMHeader from "./header.js";

function DonationDetails() {
  const [idNumber, setIdNumber] = useState("");
  const [amount, setAmount] = useState(0);

  const handleIdNumberChange = (e) => {
    setIdNumber(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSaveButtonClick = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3001/write-to-json',
        { id: idNumber, donation: amount },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer your-token-here' // ערוך את 'your-token-here' ל-Token המתאים לשרת שלך
          }
        }
      );
      debugger
      console.log(response.data);
      window.alert("התרומה התעדכנה בהצלחה");
    } catch (error) {
      console.error('שגיאה בשמירת הנתונים:', error);
      window.alert("שגיאה בשמירת הנתונים");
    }
  };

  return (
    <div>
      <header><OMHeader /></header>
      <div>
      <div className="centered-input">
        <div>
          <label>
            מספר זהות:
            <input type="text" value={idNumber} onChange={handleIdNumberChange} />
          </label>
        </div>
        <br /><br />
        <div>
          <label>
            סכום התרומה:
            <input type="number" value={amount} onChange={handleAmountChange} />
          </label>
        </div>
        <br /><br />
        <div>
          <button onClick={handleSaveButtonClick} className="button">
            שמירה
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default DonationDetails;

