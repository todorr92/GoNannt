import React from "react";

function Signup() {
  return (
    <>
      <div className="container-fluid" id="join-us">
        <div className="container" id="join-us-container">
          <form id="register">
            <h1 className="h3 mb-3">Please register</h1>
            <div className="form-floating">
              <input type="date" className="form-control" id="date-of-birth" />
              <label htmlFor="date-of-birth">Date of Birth</label>
            </div>
            <div className="form-floating">
              <input type="text" className="form-control" id="name" />
              <label htmlFor="name">Full Name</label>
            </div>
            <div className="form-floating">
              <input type="email" className="form-control" id="email" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="password" />
              <label htmlFor="password">Password</label>
            </div>
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
