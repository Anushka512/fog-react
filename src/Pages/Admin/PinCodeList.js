import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal2 from "sweetalert2";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SideBar from "./Sidebar";
import { getAllPincodes } from "../../Redux/slices/utilsSlice";

const ProductList = ({ history }) => {
  const dispatch = useDispatch();

  const { error, pincodes } = useSelector((state) => state.utils);

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

    dispatch(getAllPincodes());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "Size Id", minWidth: 200, flex: 0.5 },

    {
      field: "pincode",
      headerName: "Pincode",
      minWidth: 350,
      flex: 1,
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

  pincodes &&
  pincodes.forEach((item, index) => {
      rows.push({
        id: item._id,
        pincode: item.pincode,
      });
    });

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PINCODES</h1>
          <div className="btn create">
            <Link
              to="/admin/pincodes/create"
              className="theme-btn-one bg-black btn_md"
            >
              Create Pincode
            </Link>
          </div>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
