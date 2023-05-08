import React from "react";
import { useEffect, useState } from "react";

const BMI = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);

  function handleHeight(e) {
    let h = e.target.value;
    setHeight(h);
  }

  function handleWeight(e) {
    let w = e.target.value;
    setWeight(w);
  }

  //handling calculations
  useEffect(() => {
    let bmi1 = (weight / (height * 2)) * 100;
    setBMI(bmi1.toFixed(2));
  }, [height, weight]);

  return (
    <div className="mt-4">
      <div class="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          class="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header text-center custom-bg">
            <h5 class="card-title text-color-1">BMI CALCULATOR</h5>
          </div>
          <div class="card-body text-color-1">
            <form>
              <div class="mb-3">
                <label for="height" class="form-label">
                  <b>Height</b>
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="height"
                  name="height"
                  placeholder="enter height.."
                  onChange={handleHeight}
                  value={height}
                />
              </div>
              <div class="mb-3">
                <label for="weight" class="form-label">
                  <b>Weight</b>
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="weight"
                  name="weight"
                  placeholder="enter weight.."
                  onChange={handleWeight}
                  value={weight}
                />
              </div>
            </form>

            <div className="text-center">
              <h2>BMI : {bmi}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMI;
