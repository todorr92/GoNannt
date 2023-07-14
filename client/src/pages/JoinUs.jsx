function JoinUs() {
  let loginForm = document.getElementById("login");
  let registerForm = document.getElementById("register");
  let loginToggle = document.getElementById("login-toggle");
  let registerToggle = document.getElementById("register-toggle");

  const showRegister = () => {
    loginToggle.classList.remove("active");
    loginForm.classList.add("d-none");
    registerForm.classList.remove("d-none");
    registerToggle.classList.add("active");
  };

  const showLogin = () => {
    registerToggle.classList.remove("active");
    registerForm.classList.add("d-none");
    loginForm.classList.remove("d-none");
    loginToggle.classList.add("active");
  };

  return (
    <>
      <div className="container-fluid" id="join-us">
        <div className="container" id="join-us-container">
          <div className="row">
            <ul className="d-flex justify-content-center join-us-btns">
              <li>
                <button
                  className="active"
                  type="submit"
                  id="login-toggle"
                  onClick={showLogin}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  type="submit"
                  id="register-toggle"
                  onClick={showRegister}
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
          <form id="login">
            <h1 className="h3 mb-3">Please login</h1>

            <div className="form-floating">
              <input type="email" className="form-control" id="email" />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="password" />
              <label htmlFor="password">Password</label>
            </div>
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </form>
          <form id="register" className="d-none">
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

export default JoinUs;
