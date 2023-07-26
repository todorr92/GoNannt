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
    <div>
      <div>
        {jobs && jobs.map((job) => <JobDetails job={job} key={job._id} />)}
      </div>
      <JobForm />
    </div>
  );
};

export default JobsBoard;
