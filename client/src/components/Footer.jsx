import "../assets/styles.css";
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
        <FontAwesomeIcon icon={faFacebookSquare} style={{ color: "#ffffff" }} />
        <FontAwesomeIcon icon={faTwitterSquare} style={{ color: "#ffffff" }} />
        <FontAwesomeIcon
          icon={faInstagramSquare}
          style={{ color: "#ffffff" }}
        />
        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff" }} />
      </footer>
    </>
  );
}

export default Footer;
