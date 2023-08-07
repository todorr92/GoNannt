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
              <Link className="action-button float-end me-2">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size="sm"
                  style={{ color: "#ffffff" }}
                  className="me-2"
                />
                Apply
              </Link>
            )}

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
