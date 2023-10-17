import React, { useState } from "react";
import img from "./Assest/img.png";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignin = async () => {
    const { email, password } = userData;

    if (email && password) {
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
      const auth = getAuth(app);
      const db = getDatabase(app);

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        const userId = user.uid;
        console.log("user id:", userId)
        const userRef = ref(db,`user/${userId}`);
        console.log("ref path:", userRef);
        
    
        get(userRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const userData = snapshot.val();
            console.log("User data:", userData);
              if (userData.userType === "student") {
                navigate("/student-dashboard");
              } else if (userData.userType === "company") {
                navigate("/company-dashboard");
              }
              toast.success(`${email} Welcome Back.`);
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error("Error retrieving user data: ", error);
            toast.error("Error retrieving user data. Please try again.");
          });
      } catch (error) {
        console.error("Error signing in: ", error);
        toast.error("Invalid email or password. Please try again.");
      }
    } else {
      toast.error("Please fill in all the fields");
    }
  };
  return (
    <>
      <h1 className="signup_heading">Login</h1>
      <div className="third_step">
        <div className="image_right">
          <img src={img} alt="image" />
        </div>
        <div className="left_form">
          <div className="sign-from">
            <div className="form-sign">
              <div className="sign">
                <label htmlFor="forEmail">Email:</label>
                <input
                  type="text"
                  name="email"
                  id="forEmail"
                  placeholder="https://www.example.com"
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
                <button className="submit" type="submit" onClick={handleSignin}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
