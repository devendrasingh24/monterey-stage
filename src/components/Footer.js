import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        className="text-center text-lg-start bg text-muted"
        style={{ backgroundColor: "#1f0c00", color: "#d4dde5" }}
      >
        <section className="" style={{ color: "#d4dde5" }}>
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div
              class="d-grid gap-2 d-md-flex justify-content-md-end mt-5"
              style={{ padding: "10px" }}
            >
              <div class="dropdown mx-5">
                <a
                  class="btn btn-secondary btn-lg dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Languages
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="/">
                      Arabic
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Bengali
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Chinese (Simplified)
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Dutch
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      English
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      French
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      German
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Hindi
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Italian
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Japanese
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Korean
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Portuguese
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Russian
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Turkish
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Vitnamese
                    </a>
                  </li>
                </ul>
              </div>

              <button type="button" class="btn btn-secondary btn-lg mx-5 ">
                Large button
              </button>
              <button type="button" class="btn btn-secondary btn-lg mx-5">
                Large button
              </button>
            </div>
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}

                <img
                  src="https://www.montereystagecoachlodge.com/assets/B/themes/montereystagecoachlodge/img/logo-new.png"
                  alt="immage"
                  style={{
                    margineLeft: "50px",
                    width: "250px",
                    height: "194px",
                  }}
                />
                <h4>by BLINK HOTELS TM</h4>
                <img
                  src="https://www.montereystagecoachlodge.com/assets/B/themes/montereystagecoachlodge/img/winner_certificates.jpg"
                  alt="immage"
                  style={{
                    margineLeft: "50px",
                    width: "200px",
                    height: "180px",
                  }}
                />
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}

                <p>
                  <a href="#!" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Reviews
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    {" "}
                    Reviews
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    News
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mb-8">
                {/* <!-- Links --> */}

                <p>
                  <a href="#!" className="text-reset">
                    Jobs
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Blogs
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Lost & Found
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQs
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}

                <p>
                  <i className="fas fa-home me-3"></i> Sitemap
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  Cookie Policy
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> Privacy Policy
                </p>
                <p>
                  <i className="fas fa-print me-3"></i>
                  Terms & Conditions
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
          <hr style={{ width: "100%", textAlign: "center", size: 10 }} />
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-right p-4 "
          style={{
            backgroundColor: " #1f0c00",
            color: "#d4dde5",
            tabSize: "0px"
           
          }}
        >
          © 2022 Copyright : Website Design, Development,by devendrasingh24
          <a
            className="text-reset fw-bold"
            href="https://github.com/devendrasingh24"
          >
            MDBootstrap.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
}
