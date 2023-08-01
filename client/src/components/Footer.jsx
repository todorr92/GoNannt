// FONTAWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row mb-5 justify-content-around">
            <div className="col-4 mt-5 parents">
              <h4 className="text-light fw-bold mb-3">For Parents</h4>
              <ul>
                <li>
                  <Link to="/parents/FAQ's">FAQ's for Parents</Link> <br />
                </li>
                <li>
                  <Link to="/signup">Signup as a Parent</Link> <br />
                </li>
                <li>
                  <Link to="">Trust on GoNanny</Link>
                </li>
              </ul>
            </div>
            <div className="col-4 mt-5 sitters">
              <h4 className="text-light fw-bold mb-3">For sitters</h4>
              <ul>
                <li>
                  <Link to="/sitters/FAQ's">FAQ's for Sitters</Link> <br />
                </li>
                <li>
                  <Link to="/jobs-board">Jobs Board</Link> <br />
                </li>
                <li>
                  <Link to="/signup">Signup as a Sitter</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ color: "#4c79b9" }}
                size="2xl"
                className="me-1"
              />
              <FontAwesomeIcon
                icon={faTwitterSquare}
                style={{ color: "#4c79b9" }}
                size="2xl"
                className="me-1"
              />
              <FontAwesomeIcon
                icon={faInstagramSquare}
                style={{ color: "#4c79b9" }}
                size="2xl"
                className="me-1"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#4c79b9" }}
                size="2xl"
                className="me-1"
              />
            </div>
          </div>
          <div className="row">
            <p className="text-center">Used for educational purposes only.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
