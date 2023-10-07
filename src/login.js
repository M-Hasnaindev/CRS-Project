import React from 'react'
import img from './Assest/img.png'
import { useNavigate } from 'react-router-dom'; 

function Login() {
    const navigate = useNavigate();

        const handleSignin = () => {
            navigate('/student-dashboard')
          };
  return (
    <>
    <h1 className="signup_heading">
                Login
            </h1>
    <div className="third_step">
                    <div className="image_right">
                        <img src={img} alt="image" />
                    </div>
                    <div className="left_form">
                        <div className="sign-from">
                            <div className="form-sign">
                                <div className="sign">
                                    <label htmlFor="forEmail">Email:</label>
                                    <input type="text" name="email" id="forEmail" placeholder='https://www.example.com' />
                                </div>
                                <div className="sign">
                                    <label htmlFor="forPassword">Password:</label>
                                    <input type="text" name="password" id="forPassword" placeholder='**********' />
                                </div>
                                <div className="sign">
                                   <button className='submit' type='submit' onClick={handleSignin}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
  )
}

export default Login