import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="card" style={{ width: "18rem" }}>
                <h2>For Parents</h2>
                <div className="card-body">
                  <Link to="/parents/FAQ's">FAQ's for Parents</Link> <br />
                  <Link to="/sign-up">Signup as a Parent</Link> <br />
                  <Link to="">Trust on GoNanny</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card" style={{ width: "18rem" }}>
                <h2>For sitters</h2>
                <div className="card-body">
                  <Link to="/sitters/FAQ's">FAQ's for Sitters</Link> <br />
                  <Link to="/jobs-board">Jobs Board</Link> <br />
                  <Link to="/sign-up">Signup as a Sitter</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ color: "#ffffff" }}
                size="2xl"
              />
              <FontAwesomeIcon
                icon={faTwitterSquare}
                style={{ color: "#ffffff" }}
                size="2xl"
              />
              <FontAwesomeIcon
                icon={faInstagramSquare}
                style={{ color: "#ffffff" }}
                size="2xl"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#ffffff" }}
                size="2xl"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
