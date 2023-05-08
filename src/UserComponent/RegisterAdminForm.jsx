import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const RegisterAdminForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveAdmin = () => {
    const formData = new FormData();
    formData.append("username", user.username);
    formData.append("password", user.password);

    axios
      .post("http://localhost:8080/api/admin/register", formData)
      .then((resp) => {
        toast.success("Registered Successfully!!!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.log("here registyer failed");
        console.log("Error", error);
        toast.error("Failed to Register Trainer!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="mt-4">
      <div class="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          class="card form-card border-color text-color-1 custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header  text-center text-color-1">
            <h5 class="card-title">Register Admin</h5>
          </div>
          <div class="card-body">
            <form onSubmit={saveAdmin}>
              <div class="mb-3 text-color">
                <label for="username" class="form-label">
                  <b> Username</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  name="username"
                  onChange={handleUserInput}
                  value={user.username}
                />
              </div>

              <div class="mb-3 mt-1">
                <label for="quantity" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={user.password}
                />
              </div>

              <input
                type="submit"
                class="btn custom-bg-1 text-color"
                value="Register Admin"
              />

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAdminForm;
