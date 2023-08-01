import React from "react";

const HowItWorksSitters = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid light-blue-background">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 landing-text-container">
                <h1 className="landing-header fw-bold">
                  How Does GoNanny Work?
                </h1>
              </div>
              <div className="col-sm-12 col-md-6">
                <img
                  src="src/assets/images/sitter.png"
                  alt="Sitter"
                  className="img-fluid mt-5 mb-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container w-50 mt-5 mb-5">
          <h3 className="fw-bold">
            How does GoNanny work for childminders and babysitters?
          </h3>
          <p className="mb-5">
            GoNanny connects parents to trusted sitters, like you! We’re
            providing an easy, safe and trusted way for you to do what you love
            and build a great income. Getting set up is easy – as you’d expect,
            there’ll be checks to make sure you’ll provide a professional
            service, but we’ve made process simple and quick. Here’s how it
            works.
          </p>
          <h3 className="fw-bold">1. Create your profile</h3>
          <p className="mb-5">
            Your profile is how you’ll be smart-matched to jobs.
          </p>
          <h3 className="fw-bold">2. Apply for jobs</h3>
          <p className="mb-5">
            Apply for jobs and respond to direct invites from parents.
          </p>
          <h3 className="fw-bold">3. Do what you love</h3>
          <p>
            Meet up and interview, agree a rate and earn money doing what you
            love.
          </p>
        </div>
      </div>
    </>
  );
};

export default HowItWorksSitters;
