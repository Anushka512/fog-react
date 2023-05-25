import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./createcategory.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import swal2 from "sweetalert2";
import Button from "@mui/material/Button";
import SideBar from "./Sidebar";
import Loader from "../../Components/Loader/Loader";
import { createAndUpdateHeader } from "../../Redux/slices/utilsSlice";

function HeaderOffer() {
  const navigate = useNavigate();
  const { success } = useSelector((state) => state.categories);
  const { isLoading } = useSelector((state) => state.app);
  const [Headline, setHeadline] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      swal2.fire({
        title: "Category Created Succesfully",
        icon: "success",
      });
      navigate("/admin");
    }
  }, [success]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      createAndUpdateHeader({
        Headline: Headline,
      })
    );
  };

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        {isLoading ? (
          <Loader />
        ) : (
          <section id="add_product_area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="add_product_wrapper">
                    <h4>Add Header Offer</h4>
                    <form
                      className="add_product_form"
                      onSubmit={handleSubmitForm}
                    >
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="fotm-group">
                            <label htmlFor="product_name">
                              Header Offer
                              <span className="text-danger">*</span>
                            </label>
                            <textarea
                              id="product_name"
                              className="form-control"
                              placeholder="Offer here"
                              required
                              onChange={(e) => setHeadline(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="btn_right_table">
                            <button
                              className="theme-btn-one bg-black btn_sm"
                              type="submit"
                            >
                              Create Offer
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
        )}
      </div>
    </Fragment>
  );
}

export default HeaderOffer;
