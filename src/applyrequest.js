// import React from "react";
// import { useLocation } from "react-router-dom";

// function ApplyRequest() {
//   const location = useLocation();
//   const { studentData } = location.state;

//   return (
//     <div>
//       <h1>Student CV Data</h1>
//       {studentData && Object.values(studentData).length > 0 ? (
//           <ul className="grid" style={{color: "black"}}>
//           {Object.values(studentData).map((student, index) => (
//               <div key={index}>
//               <h3>Full Name: {student.fullName}</h3>
//               <p>Location: {student.location}</p>
//               <p>qualification: {student.qualification}</p>
//               <p>passingYear: {student.passingYear}</p>
//               <p>percentage: {student.percentage}</p>
//               <p>facebook: {student.facebook}</p>
//               <p>twitter: {student.twitter}</p>
//               <p>googlePlus: {student.googlePlus}</p>
//               <p>site: {student.site}</p>
//               <p>Bio: {student.bio}</p>
//             </div>
//           ))}
//         </ul>
//       ) : (
//           <p>No student data available.</p>
//           )}
//     </div>
//   );
// }

// export default ApplyRequest;

import React from 'react'

function applyrequest() {
  return (
    <div>applyrequest</div>
  )
}

export default applyrequest