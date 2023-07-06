import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid">
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
