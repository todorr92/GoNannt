import { useJobsContext } from "../hooks/useJobsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faEuroSign,
  faLocationDot,
  faClock,
  faComment,
  faPen,
  faPaperPlane,
  faArrowRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const JobDetails = ({ job }) => {
  const { dispatch } = useJobsContext();
  const { user } = useAuthContext();
  if (!user) {
    return;
  }
  // Apply modal
  const exampleModal = document.getElementById("exampleModal");
  if (exampleModal) {
    exampleModal.addEventListener("show.bs.modal", (event) => {
      // Button that triggered the modal
      const button = event.relatedTarget;
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute("data-bs-whatever");
      // If necessary, you could initiate an Ajax request here
      // and then do the updating in a callback.

      // Update the modal's content.
      const modalTitle = exampleModal.querySelector(".modal-title");
      const modalBodyInput = exampleModal.querySelector(".modal-body input");

      modalTitle.textContent = `New message to ${recipient}`;
      modalBodyInput.value = recipient;
    });
  }

  const handleDeleteClick = async () => {
    const response = await fetch("/api/jobs-board/" + job._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_JOB", payload: json });
    }
  };

  return (
    <>
      <div className="container mb-5 shadow">
        <div className="row">
          <div className="col-3 placeholder-img">
            <img
              src="src/assets/images/placeholder.png"
              alt=""
              className="img-thumbnail"
            />
          </div>
          <div className="col-9">
            {user.userName == job.postedBy && (
              <span>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  size="2xl"
                  style={{ color: "red" }}
                  onClick={handleDeleteClick}
                  className="float-end"
                />
              </span>
            )}
            <h4 className="fw-bold">{job.title}</h4>
            <p>
              <FontAwesomeIcon
                icon={faLocationDot}
                size="sm"
                style={{ color: "#aea0ff" }}
                className="me-2"
              />{" "}
              {job.location}
            </p>

            <p>
              <FontAwesomeIcon
                icon={faEuroSign}
                size="sm"
                style={{ color: "#aea0ff" }}
                className="me-2"
              />
              {job.payRate}
            </p>
            <p>
              <FontAwesomeIcon
                icon={faClock}
                size="sm"
                style={{ color: "#aea0ff" }}
                className="me-2"
              />
              {formatDistanceToNow(new Date(job.createdAt), {
                addSuffix: true,
              })}
            </p>
            <p>
              <FontAwesomeIcon
                icon={faComment}
                size="sm"
                style={{ color: "#aea0ff" }}
                className="me-2"
              />
              {job.description}
            </p>
            <p>
              <FontAwesomeIcon
                icon={faUser}
                size="sm"
                style={{ color: "#aea0ff" }}
                className="me-2"
              />
              {job.postedBy}
            </p>
            <Link className="button float-end me-2 ms-2">
              <FontAwesomeIcon
                icon={faArrowRight}
                size="sm"
                style={{ color: "#fff" }}
                className="me-2"
              />
              View Job
            </Link>
            {user.userName !== job.postedBy && user.userParent == false && (
              <Link
                className="action-button float-end me-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever={job.postedBy}
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size="sm"
                  style={{ color: "#ffffff" }}
                  className="me-2"
                />
                Apply
              </Link>
            )}

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header fw-bold">
                    <h1
                      className="modal-title fs-5 fw-bold"
                      id="exampleModalLabel"
                    >
                      New message
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Recipient:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="message-text"
                          className="col-form-label"
                        >
                          Message:
                        </label>
                        <textarea
                          className="form-control"
                          id="message-text"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="button"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="action-button">
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {user.userName == job.postedBy && (
              <Link className="action-button float-end me-3">
                <FontAwesomeIcon
                  icon={faPen}
                  size="sm"
                  style={{ color: "#fff" }}
                  className="me-2"
                />
                Edit
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
