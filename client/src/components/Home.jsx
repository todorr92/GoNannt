import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const [isActiveParents, setActiveParents] = useState(true);
  const [isActiveSitters, setActiveSitters] = useState(false);
  const toggleClassParents = () => {
    setActiveParents(!isActiveParents);
    setActiveSitters(false);
  };
  const toggleClassSitters = () => {
    setActiveSitters(!isActiveSitters);
    setActiveParents(false);
  };
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container-fluid home">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6 landing-text-container">
              <h1 className="landing-header header-color fw-bold">
                Find Trusted Childcare in Ireland
              </h1>
              <h3>Founded by Irish parents, for parents.</h3>
              <p className="landing-paragraph text-color">
                If you need a nanny, childminder, au pair or babysitter we
                provide you with the tools to empower <br /> you to find the
                care you need.
              </p>
              <Link className="button" to="/parents/how-it-works">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid home-works">
          <div className="container pt-5">
            <div className="row text-center">
              <h2 className="fw-bold">How GoNanny works</h2>
              <p className="text-color">
                Whether you’re a parent or a childcare professional, we’ve made
                childcare as easy as 1, 2, 3
              </p>
              <div className="col-sm-12">
                <button
                  className={
                    isActiveParents
                      ? "button d-inline-block active"
                      : "button d-inline-block"
                  }
                  onClick={toggleClassParents}
                  disabled={isActiveParents}
                  id="round-parents"
                >
                  For Parents
                </button>

                <button
                  className={
                    isActiveSitters
                      ? "button d-inline-block active"
                      : "button d-inline-block"
                  }
                  id="round-sitters"
                  onClick={toggleClassSitters}
                  disabled={isActiveSitters}
                >
                  For Sitters
                </button>
              </div>
            </div>
            <div className="row text-center">
              <div className={isActiveParents ? "row" : "row d-none"}>
                <div className="col-6">
                  <img
                    className="img-fluid"
                    src="src/assets/images/parent.png"
                    alt="Parent"
                  />
                </div>
                <div className="col-6">
                  <h3 className="fw-bold mt-5 mb-3">For Parents</h3>
                  <ul className="parent">
                    <li className="position-relative">
                      <div className="number">1</div>
                      <h5 className="fw-bold">Post a job</h5>
                      <p>Tell us what you need</p>
                    </li>
                    <li className="position-relative">
                      <div className="number">2</div>
                      <h5 className="fw-bold">Connect with carers</h5>
                      <p>
                        View smart-matched profiles and invite carers to apply
                      </p>
                    </li>
                    <li className="position-relative mb-5">
                      <div className="number">3</div>
                      <h5 className="fw-bold">Interview and select</h5>
                      <p>Choose a carer, agree terms, enjoy the support</p>
                    </li>
                    <Link className="button me-5" to="/parents/how-it-works">
                      Learn More
                    </Link>
                    <Link className="button" to="/jobs-board">
                      Post a job
                    </Link>
                  </ul>
                </div>
              </div>
              <div
                className={
                  isActiveSitters ? "row text-center" : "row text-center d-none"
                }
              >
                <div className="col-6">
                  <img
                    className="img-fluid"
                    src="src/assets/images/nanny-kids.png"
                    alt="Sitter"
                  />
                </div>
                <div className="col-6">
                  <h3 className="fw-bold mb-3 mt-5">For Sitters</h3>
                  <ul className="sitter">
                    <li className="position-relative">
                      <div className="number">1</div>
                      <h5 className="fw-bold">Create your profile</h5>
                      <p>
                        Share your personality, your experience and your passion
                        for childcare.
                      </p>
                    </li>
                    <li className="position-relative">
                      <div className="number">2</div>
                      <h5 className="fw-bold">Search and apply</h5>
                      <p>
                        Search and apply for jobs and respond to parent/carer
                        invites.
                      </p>
                    </li>
                    <li className="position-relative mb-5">
                      <div className="number">3</div>
                      <h5 className="fw-bold">Do what you love</h5>
                      <p>
                        Interview, agree a rate and earn money doing what you
                        love.
                      </p>
                    </li>
                    <Link className="button me-5" to="/sitters/how-it-works">
                      Learn More
                    </Link>
                    <Link className="button" to="/jobs-board">
                      Find Jobs
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row text-center">
            <h2 className="fw-bold mt-5">Why GoNanny?</h2>
            <p className="fw-bold fst-italic purple">Sign-up.Select.Sorted.</p>
            <p className="text-wrap">
              We’re parents, we know the stress of finding childcare. That’s why
              we created SureSitter, to make it easy to find trusted local
              childminders, nannies, and au pairs all recommended by parents and
              carers in your area.
            </p>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-6">
              <h4 className="purple mb-3">Supporting Parents</h4>
              <ul className="checkbox-list">
                <li>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#aea0ff" }}
                    className="me-3"
                  />
                  Find local trusted nannies and childminders
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#aea0ff" }}
                    className="me-3"
                  />
                  Message carers directly
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#aea0ff" }}
                    className="me-3"
                  />
                  Ready to book
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#aea0ff" }}
                    className="me-3"
                  />
                  Easily see if sitter is ID verified and Garda-vetted
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h4 className="text-color mb-3">Empowering Sitters</h4>
              <ul className="checkbox-list">
                <li>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#4c79b9" }}
                    className="me-3"
                  />
                  Create a profile to share your expertise
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#4c79b9" }}
                    className="me-3"
                  />
                  Find local childcare jobs
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#4c79b9" }}
                    className="me-3"
                  />
                  Get smart-matched based on your location and the jobs you want
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#4c79b9" }}
                    className="me-3"
                  />
                  Receive invites from parents
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <h2 className="fw-bold text-center mb-5">
            What some of our happy Parents & Sitters are saying
          </h2>
          <div className="row justify-content-center">
            <div className="col-4">
              <article>
                <div>
                  <p>
                    “I love SureSitter. We recently moved to Ireland from abroad
                    and we have no family here. We put up a job looking for an
                    occasional babysitter and we found a fantastic babysitter
                    who lives a few streets away from us. Some more text Some
                    more text Some more text Some more text”
                  </p>
                  <i>Laura</i>
                </div>
              </article>
            </div>
            <div className="col-4">
              <article>
                <div>
                  <p>
                    “A friend had recommended the site to me and I was a little
                    sceptical at first. However I decided to give it a go and
                    happily surprised to find a great of suitable childminders
                    in my area. Within a few days we found a great childminder.
                    Thanks SureSitter.”
                  </p>
                  <i>Doris</i>
                </div>
              </article>
            </div>
            <div className="col-4">
              <article>
                <div>
                  <p>
                    “Within a few hours of posting my job I had responses from 5
                    excellent babysitters. Would definitely use again. Some more
                    more more more more more more text. Another line of text.
                    Within a few hours of posting my job I had responses from 5
                    excellent babysitters. ”
                  </p>
                  <i>Anna</i>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <h2 className="fw-bold text-center mb-5">Why We're Different</h2>
          <div className="row">
            <div className="col-6 mb-5">
              <img
                src="src/assets/images/people.png"
                alt="People"
                className="img-fluid people-image"
              />
            </div>
            <div className="col-6 mt-5">
              <h4>Created for Parents by Parents</h4>
              <p>
                As parents, we understand how difficult it is to find trusted
                childcare. We are bringing word of mouth online by smart
                matching you with childminders and babysitters that have been
                recommended by your friends and parents in your local area. We
                want to deliver a home-grown personal touch to childcare, giving
                you access to trusted providers all over Ireland, so that you
                can feel confident booking qualified, local carers in a flash.
              </p>
              <Link className="button" to="/about">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
