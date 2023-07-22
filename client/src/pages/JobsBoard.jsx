import { useEffect } from "react";
import { useJobsContext } from "../hooks/useJobsContext";

// components
import JobDetails from "../components/JobDetails";
import JobForm from "../components/JobForm";

const JobsBoard = () => {
  const { jobs, dispatch } = useJobsContext();

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("/api/jobs-board");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_JOBS", payload: json });
      }
    };

    fetchJobs();
  }, [dispatch]);

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
