import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data structure: [{ name: 'Page A', uv: 4000, pv: 2400 }, ...]
export const CustomBarChart: React.FC<{ data: any[], title?: string }> = ({ data, title }) => {
  return (
    <div className="text-center p-4 border rounded-lg bg-yellow-100">
      <h3 className="text-lg font-semibold">{title || 'Bar Chart'}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
