function Login() {
  return (
    <>
      <div className="container-fluid" id="join-us">
        <div className="container" id="join-us-container">
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
        </div>
      </div>
    </>
  );
}

export default Login;
