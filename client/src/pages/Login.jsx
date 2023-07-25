import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };
  return (
    <>
      <div className="container-fluid" id="join-us">
        <div className="container" id="join-us-container">
          <form id="login" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3">Please login</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label htmlFor="password">Password</label>
            </div>
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
