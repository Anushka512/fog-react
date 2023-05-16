import React from 'react';
import './GraphsSection.scss';
import PerDayGraph from './PerDayGraph';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const GraphsSection = () => {
  const data = [
    { month: 'Jan', orders: 800 },
    { month: 'Feb', orders: 600 },
    { month: 'Mar', orders: 900 },
    { month: 'Apr', orders: 1200 },
    { month: 'May', orders: 1000 },
    { month: 'Jun', orders: 1400 },
    { month: 'Jul', orders: 1800 },
    { month: 'Aug', orders: 1600 },
    { month: 'Sep', orders: 2000 },
    { month: 'Oct', orders: 2400 },
    { month: 'Nov', orders: 2200 },
    { month: 'Dec', orders: 2800 },
  ];

  const data1 = [
    { month: 'Jan', orders: 10, days: [
      { day: '2023-01-01', orders: 2 },
      { day: '2023-01-02', orders: 3 },
      { day: '2023-01-03', orders: 1 },
      { day: '2023-01-04', orders: 4 },
    ] },
    { month: 'Feb', orders: 20, days: [
      { day: '2023-02-01', orders: 3 },
      { day: '2023-02-02', orders: 5 },
      { day: '2023-02-03', orders: 2 },
      { day: '2023-02-04', orders: 10 },
    ] },
    { month: 'Mar', orders: 15, days: [
      { day: '2023-03-01', orders: 1 },
      { day: '2023-03-02', orders: 4 },
      { day: '2023-03-03', orders: 5 },
      { day: '2023-03-04', orders: 5 },
    ] },
  ];
  
  return (
    <div className="topdiv">
    <div className="graphs-section">
        <h2>Monthly</h2> <h2 >Orders</h2>
        <div className='linechart'>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: -10, bottom: 5 }}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="orders" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
      </div>
      <h2>Per </h2> <h2>Day </h2> <h2>Orders</h2>
      <div className="perdaychart">
       <PerDayGraph data1={data1[0].days}/>
      </div>
    </div>
  </div>
  );
};

export default GraphsSection;
