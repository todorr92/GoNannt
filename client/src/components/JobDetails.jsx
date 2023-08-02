import { useJobsContext } from "../hooks/useJobsContext";
import { useAuthContext } from "../hooks/useAuthContext";

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
      <div className="container-fluid light-blue-background">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h4>{job.title}</h4>
              <p> {job.address}</p>
              <span>
                {formatDistanceToNow(new Date(job.createdAt), {
                  addSuffix: true,
                })}
              </span>
              <p>{job.description}</p>
              <p>{job.postedBy}</p>
              <button className="button" onClick={handleDeleteClick}>
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
