import React, { useState, useEffect } from "react";
import students from "./data.json";
import "./squares.css";
import OMHeader from './header.js'

const Squares = () => {
  const [selectedFamily, setSelectedFamily] = useState(null);
  const [familyDonationsArray, setFamilyDonationsArray] = useState([]);

  // הגדרת הנתונים בפעם הראשונה בלבד
  useEffect(() => {
    const familyDonations = {};
    students.forEach((item) => {
      if (!familyDonations[item.familyId]) {
        familyDonations[item.familyId] = {
          lastName: item.lastName,
          firstName: [item.firstName],
          totalDonation: item.donation,
        };
      } else {
        familyDonations[item.familyId].firstName.push(item.firstName);
        familyDonations[item.familyId].totalDonation += item.donation;
      }
    });

    const familyDonationsArray = Object.keys(familyDonations).map(
      (familyId) => ({
        familyId: familyId,
        familyName: `${familyDonations[familyId].lastName}`,
        childrenNames: `${familyDonations[familyId].firstName.join(", ")}`,
        totalDonation: familyDonations[familyId].totalDonation,
      })
    );
    setFamilyDonationsArray(familyDonationsArray);
  }, []);

  // הפעלת האנימציה כל 7 שניות
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedFamily(null); // בכל פעם מנקה את הבחירה הקודמת
      setTimeout(() => {
        const randomIndex = Math.floor(
          Math.random() * familyDonationsArray.length
        );
        setSelectedFamily(familyDonationsArray[randomIndex].familyId); // בוחר משפחה רנדומלית להגדלה
      }, 1000);
    }, 7000);

    return () => clearInterval(interval);
  }, [familyDonationsArray]);

  return (
    <div>
      <header>
        <OMHeader/>
      </header>
      <div className="squares-container">
        {familyDonationsArray.map((family, index) => (
          <div
            key={index}
            className={`square ${selectedFamily === family.familyId ? "selected" : ""}`}
          >
            <h2 className="family-square">{`משפחת ${family.familyName}`}</h2>
            <p>{`${family.childrenNames}`}</p>
            <p>:התרימו</p>
            <p>{`${family.totalDonation}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Squares;