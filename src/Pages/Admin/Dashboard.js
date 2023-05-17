// import React, { useEffect } from "react";
// import Sidebar from "./Sidebar.js";
// import "./dashboard.css";
// import Typography from '@mui/material/Typography';
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// // import { getAdminProduct } from "../../app/slices/products.js";
// // import { getAdminProduct } from "../../actions/productAction";
// // import { getAllOrders } from "../../actions/orderAction.js";
// // import { getAllUsers } from "../../actions/userAction.js";

// const Dashboard = () => {
//   const dispatch = useDispatch();

//   const { products } = useSelector((state) => state.products);

//   // const { orders } = useSelector((state) => state.allOrders);

//   // const { users } = useSelector((state) => state.allUsers);

//   let outOfStock = 0;

//   products &&
//     products.forEach((item) => {
//       if (item.Stock === 0) {
//         outOfStock += 1;
//       }
//     });

//   useEffect(() => {
//     // dispatch(getAdminProduct());
//     // dispatch(getAllOrders());
//     // dispatch(getAllUsers());
//   }, [dispatch]);

//   // let totalAmount = 0;
//   // orders &&
//   //   orders.forEach((item) => {
//   //     totalAmount += item.totalPrice;
//   //   });

//   // const lineState =  {
//   //   labels: ["Initial Amount", "Amount Earned"],
//   //   datasets: [
//   //     {
//   //       label: "TOTAL AMOUNT",
//   //       backgroundColor: ["tomato"],
//   //       hoverBackgroundColor: ["rgb(197, 72, 49)"],
//   //       data: [0, 400],
//   //     },
//   //   ],
//   // };

//   // const doughnutState = {
//   //   labels: ["Out of Stock", "InStock"],
//   //   datasets: [
//   //     {
//   //       backgroundColor: ["#00A6B4", "#6800B4"],
//   //       hoverBackgroundColor: ["#4B5000", "#35014F"],
//   //       data: [10, 20],
//   //     },
//   //   ],
//   // };

//   return (
//     <div className="dashboard">
//       <Sidebar />

//       <div className="dashboardContainer">
//         <Typography component="h1">Dashboard</Typography>

//         <div className="dashboardSummary">
//           <div>
//             <p>
//               Total Amount <br /> ₹{"50000"}
//             </p>
//           </div>
//           <div className="dashboardSummaryBox2">
//             <Link to="/admin/products">
//               <p>Product</p>
//               <p>"products?.length"</p>
//             </Link>
//             <Link to="/admin/orders">
//               <p>Orders</p>
//               <p>55</p>
//             </Link>
//             <Link to="/admin/users">
//               <p>Users</p>
//               <p>455</p>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React from 'react';
import Sidebar from "./Sidebar.js";
import HeroSection from './HeroSection';
import CardsSection from './CardsSection';
import GraphsSection from './GraphsSection';
import RecentActivitySection from './RecentActivitySection';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <HeroSection />
      <CardsSection />
      <GraphsSection />
      <RecentActivitySection />
    </div>
  );
};

export default Dashboard;


