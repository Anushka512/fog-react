import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./createcategory.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal2 from "sweetalert2";
import Button from "@mui/material/Button";
import SideBar from "./Sidebar";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createPincode, setStatus } from "../../app/slices/utils";

function CreateCategory() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [pinCode, setPincode] = useState("");
  const [active, setActive] = useState(false);

  const { status, error } = useSelector((state) => state.utils);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(createPincode({ pincode: pinCode }));
  };

  useEffect(() => {
    if (status) {
      swal2.fire({
        title: "Pincode Created Succesfully",
        icon: "success",
      });
      dispatch(setStatus(false));
      history.push("/admin/dashboard");
    } else if (error) {
      swal2.fire({
        title: "Pincode Didn't Created Succesfully",
        icon: "success",
        text: error,
      });
      setStatus(false);
      history.push("/admin/dashboard");
    }
  }, [dispatch, status, error]);

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <section id="add_product_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="add_product_wrapper">
                  <h4>Add Size</h4>
                  <form
                    className="add_product_form"
                    onSubmit={handleSubmitForm}
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="fotm-group">
                          <label htmlFor="product_price">
                            Pincode <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product_price"
                            className="form-control"
                            placeholder="Size Name"
                            required
                            onChange={(e) => setPincode(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="fotm-group">
                          <label htmlFor="available_stock">
                            Status
                            <span className="text-danger">*</span>
                          </label>
                          <div className="status__container">
                            <div className="status Btn">
                              <p>Active</p>
                              <input
                                type="radio"
                                name="status"
                                id="available_stock"
                                className="form-control"
                                required
                                onChange={(e) => setActive(e.target.value)}
                              />
                            </div>

                            <div className="status Btn">
                              <p>InActive</p>
                              <input
                                type="radio"
                                name="status"
                                id="available_stock"
                                className="form-control"
                                required
                                onChange={(e) => setActive(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="btn_right_table">
                          <button
                            className="theme-btn-one bg-black btn_sm"
                            type="submit"
                          >
                            Add Size
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default CreateCategory;
