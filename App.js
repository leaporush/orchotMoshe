// import React, { useState, useEffect } from "react";
// import DonationDetails from "./donationDetails";
// import BarScreen from "./barChart";
// import "./App.css";
// import SplitBarChart from "./splitBarChart";
// import Squares from "./squares";
// import MainPage from "./MainPage"
// import OMHeader from './header.js'

// function App() {
//   const [currentPage, setCurrentPage] = useState(0); // משתנה סטייט לאיתור דף הנוכחי
//   const [showDonationDetails, setShowDonationDetails] = useState(false);
//   const [showRender, setShowRender] = useState(false);

//   const handleShowDonationDetails = () => {
//     setShowDonationDetails(true);
//   };
//   const handleShowRender = () => {
//     setShowRender(true);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowDonationDetails(false);
//       setCurrentPage((prevPage) => (prevPage + 1) % 4); // מחזיר ערך חדש של דף בתור הדף הבא
//     }, 1000); // מתבצע כל 10 שניות

//     return () => clearInterval(interval); // מנקה את האינטרוול כאשר הקומפוננטה מסיימת את החיים שלה
//   }, []);

//   const renderPage = () => {
//     switch (currentPage) {
//       case 0:
//         return <BarScreen />;
//       case 1:
//         return <SplitBarChart />;
//       case 2:
//         return <Squares />;
//       default:
//         return <BarScreen />; // במקרה של סוף המערך, נחזיר את המסך הראשון
//     }
//   };

//   return (
//     <div className="App">
//       <OMHeader></OMHeader>
//       <div className="center-button-container">
//         {showDonationDetails ? <DonationDetails /> : (
//           <React.Fragment>
//             <button className="cool-button" onClick={handleShowDonationDetails}>להזנת נתוני תרומות</button>
//             <br />
//           </React.Fragment>
//         )}
//       </div>
//       <div className="center-button-container">
//         {showRender ? renderPage()
//           : (
//             <React.Fragment>
//               <button className="cool-button" onClick={handleShowRender}>למתרימים</button>
//               <br />
//             </React.Fragment>
//           )}
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import DonationDetails from "./donationDetails";
import BarScreen from "./barChart";
import "./App.css";
import SplitBarChart from "./splitBarChart";
import Squares from "./squares";
import MainPage from "./MainPage"
import OMHeader from './header.js'
import HomePage from "./home.js";
import Dashboard from "./dashboard.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter >
            <Routes>
                    <Route path="/" exact={true} index element={<HomePage />} />
                    <Route path="/dashboard" element={<Dashboard />} /> 
                    <Route path="/donationDetails" element={<DonationDetails />} />                     
            </Routes>
        </BrowserRouter >
    </div>
  );
}

export default App;
