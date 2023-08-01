import React from "react";

const FAQSitters = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid light-blue-background">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 landing-text-container">
                <h1 className="landing-header fw-bold">FAQ's for Sitters</h1>
                <p className="landing-paragraph text-color">
                  Everything you need to know as a Childminder, Nanny or
                  Babysitter on GoNanny
                </p>
              </div>
              <div className="col-sm-12 col-md-6">
                <img
                  src="src/assets/images/nanny-kids.png"
                  className="img-fluid"
                  alt="Nanny"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container w-50">
          <h2 className="fw-bold text-center mb-5 mt-5">
            FAQs for Nannies, Childminders, Au Pairs and Babysitters
          </h2>
          <h3 className="fw-bold mb-3">Who can sign up to GoNanny?</h3>
          <p className="mb-5">
            If you are looking for a babysitting, childminding, nanny or au-pair
            job in Ireland and are aged over 18 then we’d love you to join our
            GoNanny community.
          </p>
          <h3 className="fw-bold mb-3">Are there any age restrictions?</h3>
          <p className="mb-5">You must be over 18 to join GoNanny.</p>
          <h3 className="fw-bold mb-3">How much will it cost me? </h3>
          <p>Nothing! There is no charge to join GoNanny.</p>
          <h3 className="fw-bold mb-3">How do I get paid?</h3>
          <p className="mb-5">
            Parents will pay you directly and you keep all the money you earn,
            we do not take a percentage. GoNanny does not set the rate that you
            are paid. This is agreed directly between the parent and
            nanny/childminder. We recommend that how and when payments are made
            are agreed at this stage too.
          </p>
          <h3 className="fw-bold mb-3">Who is behind GoNany?</h3>
          <p className="mb-5">
            GoNanny was founded by number of workings parents who struggled to
            find suitable childcare. The business is backed by a great team of
            advisors, parents, and childminders whose ultimate goal is to create
            the best experience possible for parents and carers. Here is some
            information About Us.
          </p>
        </div>
      </div>
    </>
  );
};

export default FAQSitters;
