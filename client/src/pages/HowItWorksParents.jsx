import React from "react";
import { Link } from "react-router-dom";

// FONTAWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faUsers,
  faPeopleRoof,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

const HowItWorksParents = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid light-blue-background">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 landing-text-container">
                <h1 className="landing-header fw-bold">
                  How GoNanny <br /> works for parents
                </h1>
                <p className="landing-paragraph text-color">
                  We’re making it easy to find local, trusted and recommended
                  childcare professionals, for one-off events or long-term
                  support. It’s free to join and post jobs.
                </p>
              </div>
              <div className="col-sm-12 col-md-6">
                <img
                  src="src/assets/images/nanny-kids.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <h2 className="text-center fw-bold mt-5 mb-5">
              Here's how it works
            </h2>
          </div>
          <div className="row gx-5">
            <div className="col-md-4 col-sm-12 shadow">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faFileLines}
                  size="2xl"
                  style={{ color: "#7fd1de" }}
                  className="icons mb-3"
                />
                <h4 className="fw-bold">Step 1. Post a job</h4>
              </div>
              <p>
                Posting your first job is easy, simply sign up, create your
                profile and you’re ready to tell us what you need. Add your
                location, a job description, any special requirements and a rate
                you’re willing to pay.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 shadow">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faUsers}
                  size="2xl"
                  style={{ color: "#7fd1de" }}
                  className="icons mb-3"
                />
                <h4 className="fw-bold">Step 2. Connect with sitters</h4>
              </div>

              <p>
                Once you’ve posted your job, we’ll smart-match sitters and share
                their profiles with you. You can send direct invites to these,
                and any other, sitters on SureSitter to apply for your job.
                Sitters will also be able to search and apply through the jobs
                board. Applications for your job will appear in your dashboard,
                you can review, accept and reject them.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 shadow">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faPeopleRoof}
                  size="2xl"
                  style={{ color: "#7fd1de" }}
                  className="icons mb-3"
                />
                <h4 className="fw-bold">Step 3. Interview and select</h4>
              </div>
              <p>
                As applications come in, you can review their profiles and start
                interviewing. This process is entirely up to you, most parents
                arrange a call and then meet sitters before making a decision.
                Once you’ve decided on a sitter for your job, simply agree the
                terms and pay, and enjoy the support.
              </p>
            </div>
          </div>
        </div>
        <div className="container light-blue-background text-center p-5 mb-5">
          <Link className="button" to="/signup">
            Sing Up and Post a Job
          </Link>
        </div>
        <div className="container tips-container shadow mb-5 w-50">
          <div className="row">
            <div className="col-12 tips">
              <h3 className="fw-bold text-center mb-3">
                Top tips to find a sitter
              </h3>
              <ul>
                <li className="mb-3">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#aea0ff" }}
                    className="me-3"
                  />
                  Send sitters direct invites to your job to increase your
                  chances of finding the perfect professional.
                </li>
                <li className="mb-3">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#aea0ff" }}
                    className="me-3"
                  />
                  If you’re looking for long-term support, add as much
                  information as you can to begin building the parent-sitter
                  relationship.
                </li>
                <li className="mb-3">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#aea0ff" }}
                    className="me-3"
                  />
                  Add a photograph, feel free to smile, no Passport restrictions
                  apply here!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorksParents;
