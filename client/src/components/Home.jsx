import React from "react";
// FONTAWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faUsers,
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 landing-text-container">
              <h1 className="landing-header header-color">
                Find Trusted Childcare in Ireland
              </h1>
              <h3>Founded by Irish parents, for parents.</h3>
              <p className="landing-paragraph text-color">
                If you need a nanny, childminder, au pair or babysitter we
                provide you with the tools to empower you to find the care you
                need.
              </p>
              <button>Learn More</button>
            </div>
            <div className="col-sm-12 col-md-6">
              <img src="src/assets/images/nanny-kids.png" alt="Nanny" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row text-center d-flex">
            <h2>How GoNanny works</h2>
            <p>
              Whether you’re a parent or a childcare professional, we’ve made
              childcare as easy as 1, 2, 3
            </p>
            <button>For Parents</button>
            <button>For Sitters</button>
          </div>
          <div className="row text-center">
            <div className="col-6">
              <img src="src/assets/images/parent.png" alt="Parent" />
            </div>
            <div className="col-6">
              <ul className="parent">
                <li>
                  <div>1</div>
                  <h5>Post a job</h5>
                  <p>Tell us what you need</p>
                </li>
                <li>
                  <div>2</div>
                  <h5>Connect with carers</h5>
                  <p>View smart-matched profiles and invite carers to apply</p>
                </li>
                <li>
                  <div>3</div>
                  <h5>Interview and select</h5>
                  <p>Choose a carer, agree terms, enjoy the support</p>
                </li>
                <button>Learn More</button>
                <button>Find Jobs</button>
              </ul>
              <ul className="sitter d-none">
                <li>
                  <div>1</div>
                  <h5>Create your profile</h5>
                  <p>
                    Share your personality, your experience and your passion for
                    childcare.
                  </p>
                </li>
                <li>
                  <div>2</div>
                  <h5>Search and apply</h5>
                  <p>
                    Search and apply for jobs and respond to parent/carer
                    invites.
                  </p>
                </li>
                <li>
                  <div>3</div>
                  <h5>Do what you love</h5>
                  <p>
                    Interview, agree a rate and earn money doing what you love.
                  </p>
                </li>
                <button>Learn More</button>
                <button>Find Jobs</button>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row text-center">
            <h2>Why GoNany?</h2>
            <p>Sign-up.Select.Sorted.</p>
            <p>
              We’re parents, we know the stress of finding childcare. That’s why
              we created SureSitter, to make it easy to find trusted local
              childminders, nannies, and au pairs all recommended by parents and
              carers in your area.{" "}
            </p>
            <div className="col-6">
              <h4>Supporting Parents</h4>
              <ul>
                <li>Find local trusted nannies and childminders</li>
                <li>Message carers directly</li>
                <li>Ready to book</li>
                <li>Easily see if sitter is ID verified and Garda-vetted</li>
              </ul>
            </div>
            <div className="col-6">
              <h4>Empowering Sitters</h4>
              <ul>
                <li>Create a profile to share your expertise</li>
                <li>Find local childcare jobs</li>
                <li>
                  Get smart-matched based on your location and the jobs you want
                </li>
                <li>Receive invites from parents</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <h2>What some of our happy Parents & Sitters are saying</h2>
          <div className="row justify-content-center">
            <div className="col-4">
              <article>
                <div>
                  <p>
                    “I love SureSitter. We recently moved to Ireland from abroad
                    and we have no family here. We put up a job looking for an
                    occasional babysitter and we found a fantastic babysitter
                    who lives a few streets away from us”
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
                    more more more more more more text. Another line of text”
                  </p>
                  <i>Anna</i>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Why We're Different</h2>
          <div className="row">
            <div className="col-6">
              <img src="src/assets/images/people.png" alt="People" />
            </div>
            <div className="col-6">
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
              <button>Learn More About Us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
