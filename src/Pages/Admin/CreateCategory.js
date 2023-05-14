import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./createcategory.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal2 from "sweetalert2";
import Button from "@mui/material/Button";
import SideBar from "./Sidebar";
import {
  createNewCategory,
  setStatusResponse,
} from "../../app/slices/categories";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { setLoading } from "../../app/slices/appConfigSlice";
import Loader from "../../component/Common/loader";

function CreateCategory() {
  const { success } = useSelector((state) => state.categories);
  const { isLoading } = useSelector((state) => state.app);
  const history = useHistory();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [keyword, setKeyword] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const createProductImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (success) {
      swal2.fire({
        title: "Category Created Succesfully",
        icon: "success",
      });
      dispatch(setStatusResponse(false));
      history.push("/admin/dashboard");
    }
  }, [success]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      createNewCategory({
        name,
        title,
        description: desc,
        keyword,
        status,
        categoryIMG: img,
      })
    );
  };

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="dashboard">
            <SideBar />
            <section id="add_product_area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="add_product_wrapper">
                      <h4>Add Category</h4>
                      <form
                        className="add_product_form"
                        onSubmit={handleSubmitForm}
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="image-input">
                              {img && (
                                <img
                                  src={img}
                                  className="image-preview"
                                  alt="img"
                                />
                              )}
                              <input
                                onChange={createProductImage}
                                type="file"
                                accept="image/*"
                                id="imageInput"
                              />
                              <label
                                htmlFor="imageInput"
                                className="image-button"
                              >
                                <i className="fa fa-image"></i>Choose image
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="fotm-group">
                              <label htmlFor="product_name">
                                Category Name
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                id="product_name"
                                className="form-control"
                                placeholder="Category Title here"
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
                                Meta Keyword
                                <span className="text-danger">*</span>
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
      )}
    </Fragment>
  );
}

export default CreateCategory;
