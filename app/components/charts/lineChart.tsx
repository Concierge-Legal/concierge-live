'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data structure example: [{ day: 'Mon', conversations: 120 }, ...]
export const CustomLineChart: React.FC<{ data: any[], title?: string, dataKeyX?: string, dataKeyY?: string }> = ({ data, title, dataKeyX, dataKeyY }) => {
    return (
      <div className="text-center p-4 border rounded-lg bg-gray-50">
        <h3 className="text-lg font-semibold">{title || 'Line Chart'}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={dataKeyX || 'day'} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={dataKeyY || 'conversations'} stroke="#03A9F4" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
