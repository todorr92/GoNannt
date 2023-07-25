import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
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
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isLoading}
            >
              Login
            </button>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
