import { useEffect } from "react";
import { useJobsContext } from "../hooks/useJobsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import JobDetails from "../components/JobDetails";
import JobForm from "../components/JobForm";

const JobsBoard = () => {
  const { jobs, dispatch } = useJobsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("/api/jobs-board", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_JOBS", payload: json });
      }
    };
    if (user) {
      fetchJobs();
    }
  }, [dispatch, user]);

  return (
    <>
      <div className="container-flud light-blue-background p-5">
        <div className="container p-5">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="fw-bold">Childminder Jobs Board</h3>
              <p className="text-color">
                The most recent childminding jobs, nanny positions, au pair
                roles and babysitting jobs across Ireland on GoNanny.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light pt-5">
        {jobs && jobs.map((job) => <JobDetails job={job} key={job._id} />)}
      </div>
      <JobForm />
    </>
  );
};

export default JobsBoard;
