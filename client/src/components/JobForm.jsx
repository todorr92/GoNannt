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

  const clearEmptyFields = () => {
    setEmptyFields([]);
    setError(null);
  };
  const addPostedBy = () => {
    setPostedBy(user.email);
  };
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
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add new job
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="fw-bold">Add new job</h3>
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
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className={
                    emptyFields.includes("title")
                      ? "form-control error"
                      : "form-control"
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description:</label>
                <input
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className={
                    emptyFields.includes("description")
                      ? "form-control error"
                      : "form-control"
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Location:</label>
                <input
                  type="text"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  className={
                    emptyFields.includes("location")
                      ? "form-control error"
                      : "form-control"
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Pay rate:</label>
                <input
                  type="text"
                  onChange={(e) => setPayRate(e.target.value)}
                  value={payRate}
                  className={
                    emptyFields.includes("payRate")
                      ? "form-control error"
                      : "form-control"
                  }
                />
              </div>
            </div>
            {error && <div className="error">{error}</div>}
            <div className="modal-footer">
              <button
                type="button"
                className="button"
                data-bs-dismiss="modal"
                onClick={clearEmptyFields}
              >
                Close
              </button>
              <button
                className="action-button"
                data-bs-dismiss="modal"
                onClick={addPostedBy}
              >
                Add job
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default JobForm;
