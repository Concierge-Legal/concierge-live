import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Assuming data structure: [{name: '0-2 sec', count: 10}, {name: '2-4 sec', count: 15}]
export const CustomHistogram: React.FC<{ data: any[], title?: string }> = ({ data, title }) => {
  return (
    <div className="text-center p-4 border rounded-lg bg-red-100">
      <h3 className="text-lg font-semibold">{title || 'Histogram'}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
