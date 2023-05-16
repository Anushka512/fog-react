import React from 'react';
import './RecentActivitySection.scss';

const RecentActivitySection = () => {
  return (
    <div className="recent-activity-section">
      <h2>Recent Activity</h2>
      <ul>
        <li>
          <span className="activity-type">Order Placed</span>
          <span className="activity-time">10 mins ago</span>
        </li>
        <li>
          <span className="activity-type">Shipment Delivered</span>
          <span className="activity-time">2 hours ago</span>
        </li>
        <li>
          <span className="activity-type">New User Registered</span>
          <span className="activity-time">1 day ago</span>
        </li>
      </ul>
    </div>
  );
};

export default RecentActivitySection;