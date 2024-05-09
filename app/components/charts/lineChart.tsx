import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data structure: [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, ...]
export const CustomLineChart: React.FC<{ data: any[], title?: string }> = ({ data, title }) => {
  return (
    <div className="text-center p-4 border rounded-lg bg-green-100">
      <h3 className="text-lg font-semibold">{title || 'Line Chart'}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
