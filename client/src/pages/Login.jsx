import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };
  return (
    <>
      <div className="container-fluid light-blue-background" id="join-us">
        <div className="container" id="join-us-container">
          <div className="row justify-content-center">
            <div className="col-6">
              <Link to="/">
                <img
                  src="src/assets/images/cover.png"
                  alt="logo"
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 w-50 shadow bg-light">
              <form id="login" onSubmit={handleSubmit} className="text-center">
                <h1 className="h3 mb-4 fw-bold pt-4">Log in to GoNanny</h1>

                <div className="form-floating w-75 m-auto">
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating w-75 m-auto">
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
                  className="button mt-5 mb-5"
                  type="submit"
                  disabled={isLoading}
                >
                  Login
                </button>
                {error && <div className="error">{error}</div>}
                <p>
                  Don't have an account?{" "}
                  <Link className="purple singup-link" to="/signup">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
