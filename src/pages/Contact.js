import React from "react";
import FormValidation from "./FormValidation";
import "./page.css";
import TestApi from "../Components/TestApi";
function Contact(props) {
  return (
    <>
      <div>
        <h1>{props.page}</h1>
      </div>
      <TestApi />
      <div className="bd-example">
        <form className="needs-validation" novalidate>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label for="validationCustom01">First name</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="First name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationCustom02">Last name</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                placeholder="Last name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationCustomUsername">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustomUsername"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </form>
      </div>

      <FormValidation />
    </>
  );
}

export default Contact;
