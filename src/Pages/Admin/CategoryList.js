import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal2 from "sweetalert2";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

import SideBar from "./Sidebar";
import { getCategories } from "../../Redux/slices/categories";

const ProductList = ({ history }) => {
  const dispatch = useDispatch();

  const { error, categories } = useSelector((state) => state.categories);

  const deleteProductHandler = (id) => {
    // dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      swal2.fire({
        title: "Error",
        timer: 2500,
      });
    }

    dispatch(getCategories());
  }, [dispatch]);

  const columns = [
    {
      field: "id",
      headerName: "Category Id",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "name",
      headerName: "Category Name",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 150,
      flex: 0.3,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <div
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {params.value}
          </div>
        </Tooltip>
      ),
    },

    {
      field: "title",
      headerName: "Title",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/product/${params.id}`}>
              <EditIcon />
            </Link>
            <Button onClick={() => deleteProductHandler(params.id)}>
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  categories &&
    categories.forEach((item) => {
      rows.push({
        id: item._id,
        description: item.description,
        title: item.title,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL CATEGORIES</h1>
          <div className="btn create">
            <Link
              to="/admin/categories/create"
              className="theme-btn-one bg-black btn_md"
            >
              Create Category
            </Link>
          </div>
          <DataGrid
            rows={categories}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            getRowId={(row) => row._id}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
