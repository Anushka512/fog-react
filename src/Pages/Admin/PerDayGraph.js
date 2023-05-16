import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PerDayGraph = ({ data1 }) => {
  return (
    <div className="per-day-graph">
      <LineChart
        width={650}
        height={300}
        data={data1}
        margin={{ top: 5, right: 45, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="orders" stroke="#82ca9d" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default PerDayGraph;
