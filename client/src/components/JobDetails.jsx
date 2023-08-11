import { useJobsContext } from "../hooks/useJobsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
// FONTAWESOME ICONS
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
import { useState } from "react";
import { Link } from "react-router-dom";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const JobDetails = ({ job }) => {
  const { dispatch } = useJobsContext();
  const { user } = useAuthContext();

  const [updatedError, setUpdatedError] = useState(null);
  const [updatedEmptyFields, setUpdatedEmptyFields] = useState([]);
  const [updatedJob, setUpdatedJob] = useState({
    title: "",
    description: "",
    location: "",
    payRate: "",
  });
  // UPDATE JOB
  const updateJob = (id, title, description, location, payRate) => {
    setUpdatedJob((prev) => {
      return {
        ...prev,
        id: id,
        title: title,
        description: description,
        location: location,
        payRate: payRate,
      };
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedJob((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(name, value);
  };

  const saveUpdatedJob = () => {
    console.log(updatedJob);
    axios
      .put(`/jobs-board/${updatedJob.id}`, updatedJob)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };
  const clearEmptyFields = () => {
    setUpdatedEmptyFields([]);
    setUpdatedError(null);
  };
  if (!user) {
    return;
  }
  // Apply modal
  const exampleModal = document.getElementById("apply");
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
  // DELETE JOB
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
                  size="xl"
                  style={{ color: "red" }}
                  onClick={handleDeleteClick}
                  className="float-end"
                />
              </span>
            )}
            <h4 className="fw-bold">{job.title}</h4>
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
                icon={faUser}
                size="sm"
                style={{ color: "#aea0ff" }}
                className="me-2"
              />
              {job.postedBy}
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
              <button
                className="action-button float-end me-2"
                data-bs-toggle="modal"
                data-bs-target="#apply"
                data-bs-whatever={job.postedBy}
                type="button"
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size="sm"
                  style={{ color: "#ffffff" }}
                  className="me-2"
                />
                Apply
              </button>
            )}
            {/* APPLY MODAL */}
            <div
              className="modal fade"
              id="apply"
              tabIndex="-1"
              aria-labelledby="applyLabel"
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
                    <button
                      type="button"
                      className="action-button"
                      data-bs-dismiss="modal"
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* SHOW EDIT BUTTON ONLY WHEN USERNAME == POSTEDBY */}
            {user.userName == job.postedBy && (
              <Link
                className="action-button float-end me-3"
                data-bs-toggle="modal"
                data-bs-target="#updateModal"
              >
                <FontAwesomeIcon
                  icon={faPen}
                  size="sm"
                  style={{ color: "#fff" }}
                  className="me-2"
                  onClick={() =>
                    updateJob(
                      job._id,
                      job.title,
                      job.description,
                      job.location,
                      job.payRate
                    )
                  }
                />
                Edit
              </Link>
            )}
          </div>
        </div>
      </div>
      <form className="update">
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="updateModal"
          tabIndex="-1"
          aria-labelledby="updateModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="fw-bold">Edit job</h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={clearEmptyFields}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Job Title:</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={updatedJob.title}
                    className={
                      updatedEmptyFields.includes("title")
                        ? "form-control error"
                        : "form-control"
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description:</label>
                  <textarea
                    type="text"
                    onChange={handleChange}
                    value={updatedJob.description}
                    id="textarea"
                    rows="5"
                    cols="100"
                    className={
                      updatedEmptyFields.includes("description")
                        ? "form-control error"
                        : "form-control"
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Location:</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={updatedJob.location}
                    className={
                      updatedEmptyFields.includes("location")
                        ? "form-control error"
                        : "form-control"
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Pay rate:</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={updatedJob.payRate}
                    className={
                      updatedEmptyFields.includes("payRate")
                        ? "form-control error"
                        : "form-control"
                    }
                  />
                </div>
              </div>
              {updatedError && <div className="error">{updatedError}</div>}
              <div className="modal-footer">
                <button
                  type="button"
                  className="button"
                  data-bs-dismiss="modal"
                  onClick={clearEmptyFields}
                >
                  Close
                </button>
                <button className="action-button" onClick={saveUpdatedJob}>
                  Edit job
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default JobDetails;
