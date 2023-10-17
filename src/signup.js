import React, { useState } from "react";
import img from "./Assest/img.png";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [showFirstStep, setShowFirstStep] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [userType, setUserType] = useState("");
  const setTypeStudent = "student";
  const setTypeCompany = "company";

  const handleStudentButtonClick = () => {
    setShowFirstStep(false);
    setUserType(setTypeStudent);
    console.log(setTypeStudent);
  };

  const handleCompanyButtonClick = () => {
    setShowFirstStep(false);
    setUserType(setTypeCompany);
    console.log(setTypeCompany);
  };

  const navigate = useNavigate();

  const [userData, setuserData] = useState({
    fullname: "",
    email: "",
    password: "",
    Contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    const { fullname, email, password, Contact } = userData;

    if (fullname && email && password && Contact && userType) {
      setIsSaving(true);
      const db = getDatabase(app);
      const auth = getAuth();

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        const userRef =ref(db, `user/${user.uid}`);
          
        const userDataWithUserType = { uid: user.uid, userType, ...userData };

        set(userRef, userDataWithUserType)
          .then(() => {
            navigate("/login")
            console.log("User Signup successfully!");
            toast.success(`${email} Signup Successfully.`);
          })
          .catch((error) => {
            console.error(
              "Error adding user data to Firebase Realtime Database: ",
              error
            );
          });
        setTimeout(() => {
          setIsSaving(false);
        }, 2000);
      } catch (error) {
        console.error("Error creating user:", error);
      }
    } else {
      toast.error("Please fill in all the fields");
    }
  };

  const firebaseConfig = {
    apiKey: "AIzaSyA94tTiDEPq1krr9HFALAKU-Eg4B2VCYM4",
    authDomain: "practice-host-auth0.firebaseapp.com",
    databaseURL: "https://practice-host-auth0-default-rtdb.firebaseio.com",
    projectId: "practice-host-auth0",
    storageBucket: "practice-host-auth0.appspot.com",
    messagingSenderId: "1058475595172",
    appId: "1:1058475595172:web:5b980a9756ae3d849cdd31",
  };

  const app = initializeApp(firebaseConfig);

  return (
    <div className="signup_page">
      <div className="main-page">
        <h1 className="signup_heading">SignUp</h1>
        <div
          className="first_step"
          style={{ display: showFirstStep ? "flex" : "none" }}
        >
          <div className="image_right">
            <img src={img} alt="image" />
          </div>
          <div className="left_buttons">
            <div className="buttons_left">
              <button className="form_btn">Admin</button>
              <button className="form_btn" onClick={handleStudentButtonClick}>
                Student
              </button>
              <button className="form_btn" onClick={handleCompanyButtonClick}>
                Comapny
              </button>
            </div>
          </div>
        </div>
        <div
          className="second_step"
          style={{ display: showFirstStep ? "none" : "flex" }}
        >
          <div className="image_right">
            <img src={img} alt="image" />
          </div>
          <div className="left_form">
            <div className="sign-from">
              <div className="form-sign">
                <div className="sign">
                  <label htmlFor="forEveryone">Full Name:</label>
                  <input
                    type="text"
                    name="fullname"
                    id="foreveryone"
                    placeholder="Your Name"
                    value={userData.fullname}
                    onChange={handleChange}
                  />
                </div>
                <div className="sign">
                  <label htmlFor="forEmail">Email:</label>
                  <input
                    type="text"
                    name="email"
                    id="forEmail"
                    placeholder="example@gmail.com"
                    value={userData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="sign">
                  <label htmlFor="forPassword">Password:</label>
                  <input
                    type="text"
                    name="password"
                    id="forPassword"
                    placeholder="**********"
                    value={userData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="sign">
                  <label htmlFor="forContact">Contact</label>
                  <input
                    type="number"
                    name="Contact"
                    id="forContact"
                    placeholder="+92 1234567890"
                    value={userData.Contact}
                    onChange={handleChange}
                  />
                </div>
                <div className="sign">
                  <button
                    className="submit"
                    type="submit"
                    onClick={handleSignup}
                  >
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isSaving && <div className="loader">Saving...</div>}
      </div>
    </div>
  );
}

export default Signup;
