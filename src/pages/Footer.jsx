import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-white">
          <div class="container-fluid p-4 pb-0">
            
            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3">Register for free</span>
                <Link to="/customer/register" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded"
                  >
                    Sign up!
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

        </footer>
      </div>
    </div>
  );
};

export default Footer;
