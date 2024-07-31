import React from "react";

function Login() {
  return (
    <>
      <section className="Login">
        <div className="Login_container">
          <div className="Bg">npm run dev
            <div className="overlay"></div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/de5aa17a-29b6-4167-8c39-834aae8f328e/PK-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_8056b691-2a93-40af-add4-ca200ba1151b_small.jpg"
              alt=""
            />
          </div>
          <div className="Login_content">
            <div className="Login_box">
              <h2>Sign In</h2>
              <input
                className="inpOne"
                type="text"
                placeholder="Email or mobile number"
              />
              <input
                className="inpTwo"
                type="password"
                placeholder="Password"
              />

              <div className="button_area">
                <button className="buttOne">Sign In</button>
                <p>OR</p>
                <button className="buttonTwo">Use a Sign-In Code</button>
                <a href="#">Forgot password?</a>
              </div>

              <div className="bref">
                <div className="check_box">
                  <input type="checkbox" />
                  <h4>Remember me</h4>
                </div>
                <h5>
                  New to Netflix? <span>Sign up now.</span>
                </h5>
                <p>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. <span> Learn more.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
