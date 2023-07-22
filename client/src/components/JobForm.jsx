import { useState } from "react";
import { useJobsContext } from "../hooks/useJobsContext";

const JobForm = () => {
  const { dispatch } = useJobsContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const job = { title, description, address, postedBy };

    const response = await fetch("/api/jobs-board/post-job", {
      method: "POST",
      body: JSON.stringify(job),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setEmptyFields([]);
      setError(null);
      setTitle("");
      setDescription("");
      setAddress("");
      setPostedBy("");
      dispatch({ type: "CREATE_JOB", payload: json });
    }
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

      <label>Address</label>
      <input
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        className={emptyFields.includes("address") ? "error" : ""}
      />

      <button>Add job</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default JobForm;
