import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCustomerForm = () => {
  const navigate = useNavigate();

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const [customer, setCustomer] = useState({
    name: "",
    dob: "",
    password: "",
    contact: "",
    address: "",
    weight: "",
    age: "",
    sex: "",
    membershipId: "",
    pic: "",
  });

  const handleUserInput = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const saveTrainer = () => {
    const formData = new FormData();
    formData.append("pic", selectedPhoto);
    formData.append("name", customer.name);
    formData.append("emailId", customer.emailId);
    formData.append("password", customer.password);
    formData.append("contact", customer.contact);
    formData.append("address", customer.address);
    formData.append("weight", customer.weight);
    formData.append("age", customer.age);
    formData.append("sex", customer.sex);

    axios
      .post("http://localhost:8080/api/customer/register", formData)
      .then((resp) => {
        console.log("here register success");
        toast.success("Registered Successfully!!!", {
          position: "top-center",
          autoClose: 1000,
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
    <div>
      <div class="mt-4 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          class="card form-card border-color text-color custom-bg"
          style={{ width: "30rem" }}
        >
          <div className="card-header text-center text-color-1 custom-bg">
            <h5 class="card-title">Register Customer</h5>
          </div>
          <div class="card-body">
            <form class="row g-3 text-color-1" onSubmit={saveTrainer}>
              <div class="col-md-6">
                <label for="name" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  onChange={handleUserInput}
                  value={customer.name}
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="emailId" class="form-label">
                  Email Id
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={customer.emailId}
                  required
                />
              </div>

              <div class="col-md-6">
                <label for="contact" class="form-label">
                  Contact No
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="contact"
                  name="contact"
                  onChange={handleUserInput}
                  value={customer.contact}
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={customer.password}
                  required
                />
              </div>

              <div class="col-12">
                <label for="address" class="form-label">
                  Address
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="address"
                  name="address"
                  onChange={handleUserInput}
                  value={customer.address}
                  required
                />
              </div>
              <div class="col-6">
                <label for="age" class="form-label">
                  Age
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="age"
                  name="age"
                  onChange={handleUserInput}
                  value={customer.age}
                  required
                />
              </div>
              <div class="col-6">
                <label for="weight" class="form-label">
                  Weight
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="weight"
                  name="weight"
                  onChange={handleUserInput}
                  value={customer.weight}
                  required
                />
              </div>

              <div class="col-6">
                <label for="sex" class="form-label">
                  Select Sex
                </label>
                <select
                  name="sex"
                  onChange={handleUserInput}
                  className="form-control"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div class="col-12">
                <label for="pic" class="form-label">
                  Select Customer Photo
                </label>
                <input
                  input
                  class="form-control"
                  type="file"
                  id="formFile"
                  name="pic"
                  onChange={(e) => setSelectedPhoto(e.target.files[0])}
                />
              </div>

              <div class="col-12">
                <input
                  type="submit"
                  className="btn custom-bg-1 text-color"
                  value="Register Customer"
                />
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerForm;
