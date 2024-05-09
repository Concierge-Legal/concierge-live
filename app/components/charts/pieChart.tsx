import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data structure: [{ name: 'Category A', value: 2400 }, { name: 'Category B', value: 4567 }]
export const CustomPieChart: React.FC<{ data: any[], title?: string }> = ({ data, title }) => {
  return (
    <div className="text-center p-4 border rounded-lg bg-blue-100">
      <h3 className="text-lg font-semibold">{title || 'Pie Chart'}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
            {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
