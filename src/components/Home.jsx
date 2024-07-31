import React from "react";

function Home() {


  return (
    <>
      <section className="Home">
        <div className="home_container">
          <div className="home_bg">
            <img
              src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/de5aa17a-29b6-4167-8c39-834aae8f328e/PK-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_8056b691-2a93-40af-add4-ca200ba1151b_medium.jpg"
              alt=""
            />
            <div className="overlay"></div>
          </div>
          <div className="home_box">
            <div className="home_content">
              <h1>Unlimited movies, TV shows, and more</h1>
              <p className="Pone">Watch anywhere. Cancle anytime</p>
              <p className="Ptwo">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="Email">
                <input type="text" placeholder="Enter address"/>
                <button>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="qna">
        <div className="qna_container">
          <div className="qna-content">
            <div className="qna_heading"></div>
            <div className="qna_context">
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
