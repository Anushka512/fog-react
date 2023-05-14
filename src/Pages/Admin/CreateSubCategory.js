import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./createcategory.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal2 from "sweetalert2";
import Button from "@mui/material/Button";
import SideBar from "./Sidebar";
import {
  createNewSubCategory,
  getCategories,
  setStatusResponse,
} from "../../app/slices/categories";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CreateCategory() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [keyword, setKeyword] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();
  const { categories, success } = useSelector((state) => state.categories);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      createNewSubCategory({
        name,
        title,
        description: desc,
        keyword,
        status,
        categoryName,
      })
    );
  };

  useEffect(() => {
    dispatch(getCategories());

    if (success) {
      swal2.fire({
        title: "Sub-Category Created Succesfully",
        icon: "success",
      });
      dispatch(setStatusResponse(false));
      history.push("/admin/dashboard");
    }
  }, [dispatch, success]);

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <section id="add_product_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="add_product_wrapper">
                  <h4>Add SubCategory</h4>
                  <form
                    className="add_product_form"
                    onSubmit={handleSubmitForm}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="fotm-group">
                          <label htmlFor="product_option">
                            Choose Category
                            <span className="text-danger">*</span>
                          </label>
                          <select
                            onChange={(e) => setCategoryName(e.target.value)}
                          >
                            <option>---Select Category---</option>
                            {categories.map((item, id) => (
                              <option key={id}>{item.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="fotm-group">
                          <label htmlFor="product_name">
                            Sub Category Name
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product_name"
                            className="form-control"
                            placeholder="Sub Category Title here"
                            required
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="fotm-group">
                          <label htmlFor="product_price">
                            Meta Title<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product_price"
                            className="form-control"
                            placeholder="Meta Title"
                            required
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="fotm-group">
                          <label htmlFor="product_price">
                            Meta Keyword<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product_price"
                            className="form-control"
                            placeholder="Meta Keyword"
                            required
                            onChange={(e) => setKeyword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="fotm-group">
                          <label htmlFor="product_price">
                            Meta Description
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product_price"
                            className="form-control"
                            placeholder="Meta Description"
                            required
                            onChange={(e) => setDesc(e.target.value)}
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
                                onChange={(e) => setStatus(e.target.value)}
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
                                onChange={(e) => setStatus(e.target.value)}
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
                            Add Category
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
