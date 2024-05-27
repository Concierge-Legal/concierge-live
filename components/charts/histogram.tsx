'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Assuming data structure: [{name: '0-2 sec', count: 10}, {name: '2-4 sec', count: 15}]
export const CustomHistogram: React.FC<{ data: any[], title?: string, dataKeyX?: string, dataKeyY?: string }> = ({ data, title, dataKeyX, dataKeyY }) => {
    return (
      <div className="text-center p-4 border rounded-lg bg-gray-200 px-5 py-5 drop-shadow-md rounded-lg">
        <h3 className="text-lg font-semibold">{title || 'Histogram'}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={dataKeyX}/>
            <YAxis />
            <Tooltip />
            <Bar dataKey={dataKeyY || 'Null'} fill="#90A4AE" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  