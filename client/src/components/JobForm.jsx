import { useState } from "react";
import { useJobsContext } from "../hooks/useJobsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const JobForm = () => {
  const { dispatch } = useJobsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [payRate, setPayRate] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }

    const job = { title, description, location, payRate, postedBy };

    const response = await fetch("/api/jobs-board", {
      method: "POST",
      body: JSON.stringify(job),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
      console.log(json.emptyFields);
    }
    if (response.ok) {
      setEmptyFields([]);
      setError(null);
      setTitle("");
      setDescription("");
      setLocation("");
      setPayRate("");
      setPostedBy(user.email);
      dispatch({ type: "CREATE_JOB", payload: json });
    }
    console.log(emptyFields);
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New job</h3>

      <label>Job Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={emptyFields.includes("description") ? "error" : ""}
      />

      <label>Location</label>
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        className={emptyFields.includes("location") ? "error" : ""}
      />
      <label>Pay rate</label>
      <input
        type="text"
        onChange={(e) => setPayRate(e.target.value)}
        value={payRate}
        className={emptyFields.includes("payRate") ? "error" : ""}
      />
      <button>Add job</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default JobForm;
