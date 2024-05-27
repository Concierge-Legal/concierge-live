'use client';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LineChart, Line } from 'recharts';
import { BarChart, Bar, Legend } from 'recharts';
import { PieChart, Pie, Cell, Label } from 'recharts';

// Assuming data structure: [{name: 'January', cost: 400}, {name: 'February', cost: 300}]
export const CustomAreaChart: React.FC<{ data: any[], title?: string, dataKeyX?: string, dataKeyY?: string; }> = ({ data, title, dataKeyX, dataKeyY }) => {
	return (
		<div className="text-center p-4 border bg-gray-100 px-5 py-5 drop-shadow-md rounded-lg">
			<h3 className="text-lg font-semibold">{title || 'Area Chart'}</h3>
			<ResponsiveContainer width="100%" height={300}>
				<AreaChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey={dataKeyX} />
					<YAxis />
					<Tooltip />
					<Area type="monotone" dataKey="cost" stroke="#007BFF" fill="#BBDEFB" />
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};



// Improved CustomBarChart with dynamic key props for the X-axis and bars
export const CustomBarChart: React.FC<{ data: any[], title?: string, dataKeyX?: string, dataKeyY?: string; }> = ({ data, title, dataKeyX, dataKeyY }) => {
	return (
		<div className="flex flex-col items-center justify-center w-full bg-white px-5 py-5 drop-shadow-md rounded-lg">
			<h3 className="text-m font-semibold mb-2">{title || 'Bar'}</h3>

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

export const CustomHistogram: React.FC<{ data: any[], title?: string, dataKeyX?: string, dataKeyY?: string; }> = ({ data, title, dataKeyX, dataKeyY }) => {
	return (
		<div className="text-center p-4 border rounded-lg bg-gray-200 px-5 py-5 drop-shadow-md ">
			<h3 className="text-lg font-semibold">{title || 'Histogram'}</h3>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey={dataKeyX} />
					<YAxis />
					<Tooltip />
					<Bar dataKey={dataKeyY || 'Null'} fill="#90A4AE" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

// Data structure example: [{ day: 'Mon', conversations: 120 }, ...]
export const CustomLineChart: React.FC<{ data: any[], title?: string, dataKeyX?: string, dataKeyY?: string; }> = ({ data, title, dataKeyX, dataKeyY }) => {
	return (
		// CustomLineChart component
		<div className="flex flex-col items-center justify-center  w-full min-h-full rounded-lg bg-white px-5 py-5 drop-shadow-md ">
			<h3 className="text-m font-semibold mb-2">{title || 'Line Chart'}</h3>

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


// Improved with dynamic key props for flexibility
export const CustomPieChart: React.FC<{ data: any[], title?: string, dataKey: string, nameKey: string; }> = ({ data, title, dataKey, nameKey }) => {
	const COLORS = ['#42A5F5', '#7E57C2', '#26C6DA', '#66BB6A'];

	return (
		<div className="flex flex-col items-center justify-center w-full bg-white px-5 py-5 drop-shadow-md rounded-lg">
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