// import React from "react";
// import "./sidebar.css";
// import logo from "../../Assets/Images/logo__sec.png";
// import { Link } from "react-router-dom";
// // import { TreeView, TreeItem } from "@material-ui/lab";
// import ImportExportIcon from "@mui/icons-material/ImportExport";
// import TreeView from "@mui/lab/TreeView";
// import TreeItem, { TreeItemProps, treeItemClasses } from "@mui/lab/TreeItem"; // import PostAddIcon from "@material-ui/icons/PostAdd";
// import AddIcon from "@mui/icons-material/Add";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import RateReviewIcon from "@mui/icons-material/RateReview";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <Link to="/">
//         <img
//           style={{ width: "80px", objectFit: "cover" }}
//           src={logo}
//           alt="Ecommerce"
//         />
//       </Link>
//       <Link to="/admin/dashboard">
//         <p>
//           <DashboardIcon /> Dashboard
//         </p>
//       </Link>

//       <Link>
//         <TreeView
//           defaultCollapseIcon={<ExpandMoreIcon />}
//           defaultExpandIcon={<ImportExportIcon />}
//         >
//           <TreeItem nodeId="1" label="Products">
//             <Link to="/admin/products">
//               <TreeItem nodeId="2" label="All" />
//             </Link>

//             <Link to="/admin/createproject">
//               <TreeItem nodeId="3" label="Create" />
//             </Link>
//           </TreeItem>
//         </TreeView>
//       </Link>

//       <Link>
//         <TreeView
//           defaultCollapseIcon={<ExpandMoreIcon />}
//           defaultExpandIcon={<ImportExportIcon />}
//         >
//           <TreeItem nodeId="1" label="Catalog">
//             <Link to="/admin/categories">
//               <TreeItem nodeId="2" label="All Categories" />
//             </Link>

//             <Link to="/admin/categories/create">
//               <TreeItem nodeId="3" label="Create Category" />
//             </Link>

//             <Link to="/admin/categories/create-sub">
//               <TreeItem nodeId="3" label="Create Sub Category" />
//             </Link>

//             <Link to="/admin/sizes">
//               <TreeItem nodeId="3" label="Sizes" />
//             </Link>

//             <Link to="/admin/pincodes">
//               <TreeItem nodeId="3" label="Pin Codes" />
//             </Link>
//           </TreeItem>
//         </TreeView>
//       </Link>

//       <Link to="/admin/orders">
//         <p>
//           <ListAltIcon />
//           Orders
//         </p>
//       </Link>
//       <Link to="/admin/users">
//         <p>
//           <PeopleIcon /> Users
//         </p>
//       </Link>
//       <Link to="/admin/reviews">
//         <p>
//           <RateReviewIcon />
//           Reviews
//         </p>
//       </Link>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faBox,
  faList,
  faShoppingCart,
  faUsers,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <Link to="/admin" style={{ color: "white" }}>
          <li className="option active">
            <span>
              {" "}
              <FontAwesomeIcon icon={faChartBar} />{" "}
            </span>
            Dashboard
          </li>
        </Link>

        <Link to="/admin/orders" style={{ color: "white" }}>
          <li className="option">
            <span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            All Orders
          </li>
        </Link>

        <Link to="/admin/products" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faList} />
            </span>
            All Products
          </li>
        </Link>

        <Link to="/admin/createproject" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faBox} />
            </span>
            Create Products
          </li>
        </Link>

        <Link to="/admin/categories" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faList} />
            </span>
            All Categories
          </li>
        </Link>

        <Link to="/admin/categories/create" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faList} />
            </span>
            Create Category
          </li>
        </Link>

        <Link to="/admin/coupons" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faList} />
            </span>
            Coupons Manager
          </li>
        </Link>

        {/* no need for sub categories  */}
        {/* <Link to="/admin/categories/create-sub" style={{ color: "white" }}>
              <li>
                <FontAwesomeIcon icon={faList} />
                Create Subcategory
              </li>
            </Link> */}

        {/* <Link to="/admin/sizes" style={{ color: "white" }}>
              <li>
                <FontAwesomeIcon icon={faList} />
                Sizes
              </li>
            </Link> */}

        <Link to="/admin/pincodes" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faList} />
            </span>
            Pincodes Manager
          </li>
        </Link>

        <Link to="/admin/users" style={{ color: "white" }}>
          <li className="option">
            <span>
              <FontAwesomeIcon icon={faUsers} />
            </span>
            All Users
          </li>
        </Link>

        <Link to="/admin/reviews" style={{ color: "white" }}>
          <li className="option">
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            Reviews
          </li>
        </Link>

        <Link to="/admin/header" style={{ color: "white" }}>
          <li className="option">
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            Header Promotion
          </li>
        </Link>

        <Link to="/admin/reviews" style={{ color: "white" }}>
          <li className="option">
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            Logout
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
