import React from "react";

const About = () => {
  return (
    <>
      About
      <div className="container-fluid">
        <div className="container">
          <div className="col-6">
            <h1>Our Story</h1>
            <p>
              Why few frustrated parents set out to solve the problem of
              accessing trusted childcare.
            </p>
          </div>
          <div className="col-6">
            <img src="src/assets/images/people.png" alt="People" />
          </div>
        </div>
        <div className="container">
          <h4>Welcome to GoNanny!</h4>
          <p>
            GoNanny was founded by couple of busy working parents. Since having
            children we realised how difficult it can be to find trusted, local
            childminders and babysitters when you need them. It is
            time-consuming, incredibly expensive and often times options like
            creches just don’t work for lots of families. We also know from
            personal experience the stress it can cause trying to juggle work
            and childcare! We are passionate about making these connections. Our
            mission is to help parents and childcarers find each other with the
            aim of creating long lasting relationships. We hope you find your
            perfect childcarer! Created by parents, for parents.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
