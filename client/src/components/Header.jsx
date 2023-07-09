function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 landing-text-container">
              <h1 className="landing-header header-color">
                How GoNanny <br /> works for parents
              </h1>
              <p className="landing-paragraph text-color">
                We’re making it easy to find local, trusted and recommended
                childcare professionals, for one-off events or long-term
                support. It’s free to join and post jobs.
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <img src="src/assets/images/nanny-kids.png" alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h3>How it works</h3>
            <div className="col-md-4 col-sm-12">
              <div className="card" style={{ width: "18rem" }}>
                <img src="" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card" style={{ width: "18rem" }}>
                <img src="" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card" style={{ width: "18rem" }}>
                <img src="" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
