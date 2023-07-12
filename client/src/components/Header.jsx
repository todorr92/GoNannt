// FONTAWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faUsers,
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 landing-text-container">
              <h1 className="landing-header header-color">
                How GoNanny <br /> works for parents
              </h1>
              <p className="landing-paragraph text-color">
                We’re making it easy to find local, trusted and recommended
                childcare professionals, for one-off events or long-term
                support. It’s free to join and post jobs.
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <img src="src/assets/images/nanny-kids.png" alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h3 className="text-center">Here's how it works</h3>
            <div className="col-md-4 col-sm-12">
              <div className="card" style={{ width: "18rem" }}>
                <FontAwesomeIcon
                  icon={faFileLines}
                  size="2xl"
                  style={{ color: "#7fd1de" }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Posting your first job is easy, simply sign up, create your
                    profile and you’re ready to tell us what you need. Add your
                    location, a job description, any special requirements and a
                    rate you’re willing to pay.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card" style={{ width: "18rem" }}>
                <FontAwesomeIcon
                  icon={faUsers}
                  size="2xl"
                  style={{ color: "#7fd1de" }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Once you’ve posted your job, we’ll smart-match sitters and
                    share their profiles with you. You can send direct invites
                    to these, and any other, sitters on SureSitter to apply for
                    your job. Sitters will also be able to search and apply
                    through the jobs board. Applications for your job will
                    appear in your dashboard, you can review, accept and reject
                    them.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card" style={{ width: "18rem" }}>
                <FontAwesomeIcon
                  icon={faPeopleRoof}
                  size="2xl"
                  style={{ color: "#7fd1de" }}
                />
                <div className="card-body">
                  <p className="card-text">
                    As applications come in, you can review their profiles and
                    start interviewing. This process is entirely up to you, most
                    parents arrange a call and then meet sitters before making a
                    decision. Once you’ve decided on a sitter for your job,
                    simply agree the terms and pay, and enjoy the support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
