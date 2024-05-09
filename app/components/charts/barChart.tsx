'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Improved CustomBarChart with dynamic key props for the X-axis and bars
export const CustomBarChart: React.FC<{ data: any[], title?: string, dataKeyX?: string, dataKeyY?: string }> = ({ data, title, dataKeyX, dataKeyY }) => {
    return (
      <div className="text-center p-4 border rounded-lg bg-blue-50">
        <h3 className="text-lg font-semibold">{title || 'Bar Chart'}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={dataKeyX || 'name'} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={dataKeyY || 'pv'} fill="#4FC3F7" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
