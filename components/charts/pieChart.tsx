'use client';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

// Improved with dynamic key props for flexibility
export const CustomPieChart: React.FC<{ data: any[], title?: string, dataKey: string, nameKey: string; }> = ({ data, title, dataKey, nameKey }) => {
	const COLORS = ['#42A5F5', '#7E57C2', '#26C6DA', '#66BB6A'];

	return (
		<div className="flex flex-col items-center justify-center w-full px-4 py-2">
			<h3 className="text-m font-semibold mb-2">{title || 'Pie Chart'}</h3>
			
			<ResponsiveContainer width="100%" height={300}>
					<PieChart>
						<Pie
							data={data}
							dataKey={dataKey}
							nameKey={nameKey}
							cx="50%"
							cy="50%"
							outerRadius={80}
							fill="#8884d8"
							label={(entry) => `${entry.name}: ${entry.value}`}
						>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip />
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			
		</div>
	);
};