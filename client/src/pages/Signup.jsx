import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [parent, setParent] = useState(false);
  const { signup, error, isLoading } = useSignup();
  const [isActiveParents, setActiveParents] = useState(false);
  const [isActiveSitters, setActiveSitters] = useState(false);
  const toggleClassParents = () => {
    setActiveParents(!isActiveParents);
    setActiveSitters(false);
  };
  const toggleClassSitters = () => {
    setActiveSitters(!isActiveSitters);
    setActiveParents(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name, email, password, parent);
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
                <h1 className="h3 mb-4 fw-bold pt-4">Sign up to GoNanny</h1>
                <div className="form-floating mt-5">
                  <div className="col-sm-12 mb-5">
                    <button
                      className={
                        isActiveParents
                          ? "button d-inline-block active"
                          : "button d-inline-block"
                      }
                      disabled={isActiveParents}
                      id="round-parents"
                      onClick={(e) => {
                        e.preventDefault();
                        setParent(true);
                        toggleClassParents();
                      }}
                    >
                      I am Parent
                    </button>

                    <button
                      className={
                        isActiveSitters
                          ? "button d-inline-block active"
                          : "button d-inline-block"
                      }
                      id="round-sitters"
                      onClick={(e) => {
                        e.preventDefault();
                        setParent(false);
                        toggleClassSitters();
                      }}
                      disabled={isActiveSitters}
                    >
                      I am Sitter
                    </button>
                  </div>
                </div>

                <div className="form-floating w-75 m-auto">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <label htmlFor="name">Full Name</label>
                </div>
                <div className="form-floating w-75 m-auto mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <label htmlFor="email">Email</label>
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
                  Sign Up
                </button>
                {error && <div className="error">{error}</div>}
                <p>
                  Already have an account?{" "}
                  <Link className="purple singup-link" to="/login">
                    Login
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

export default Signup;
