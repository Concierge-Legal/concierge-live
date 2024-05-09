'use client';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Assuming data structure: [{name: 'January', cost: 400}, {name: 'February', cost: 300}]
export const CustomAreaChart: React.FC<{ data: any[], title?: string, dataKeyX?: string, dataKeyY?: string }> = ({ data, title, dataKeyX, dataKeyY }) => {
    return (
      <div className="text-center p-4 border rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold">{title || 'Area Chart'}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={dataKeyX}/>
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="cost" stroke="#007BFF" fill="#BBDEFB" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };
  