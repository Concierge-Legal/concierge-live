'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Improved CustomBarChart with dynamic key props for the X-axis and bars
export const CustomBarChart: React.FC<{ data: any[], title?: string, dataKeyX?: string, dataKeyY?: string; }> = ({ data, title, dataKeyX, dataKeyY }) => {
	return (
		<div className="flex flex-col items-center justify-center w-full px-4 py-2">
			<h3 className="text-lg font-semibold mb-2">{title || 'Bar'}</h3>
			
				<ResponsiveContainer width="100%" height="100%">
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

