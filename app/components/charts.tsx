import React from 'react';

// Simple mock-up for a Pie Chart
export const PieChart: React.FC<{ data?: any, title?: string }> = ({ data, title }) => {
  return (
    <div className="text-center p-4 border rounded-lg bg-blue-100">
      <h3 className="text-lg font-semibold">{title || 'Pie Chart'}</h3>
      <p>Placeholder for Pie Chart data</p>
    </div>
  );
};

// Simple mock-up for a Line Chart
export const LineChart: React.FC<{ data?: any, title?: string }> = ({ data, title }) => {
  return (
    <div className="text-center p-4 border rounded-lg bg-green-100">
      <h3 className="text-lg font-semibold">{title || 'Line Chart'}</h3>
      <p>Placeholder for Line Chart data</p>
    </div>
  );
};

// Simple mock-up for a Bar Chart
export const BarChart: React.FC<{ data?: any, title?: string }> = ({ data, title }) => {
  return (
    <div className="text-center p-4 border rounded-lg bg-yellow-100">
      <h3 className="text-lg font-semibold">{title || 'Bar Chart'}</h3>
      <p>Placeholder for Bar Chart data</p>
    </div>
  );
};

// Additional Simple mock-up for a Histogram
export const Histogram: React.FC<{ data?: any, title?: string }> = ({ data, title }) => {
  return (
    <div className="text-center p-4 border rounded-lg bg-red-100">
      <h3 className="text-lg font-semibold">{title || 'Histogram'}</h3>
      <p>Placeholder for Histogram data</p>
    </div>
  );
};

// Additional Simple mock-up for a Flow Chart
export const FlowChart: React.FC<{ data?: any, title?: string }> = ({ data, title }) => {
  return (
    <div className="text-center p-4 border rounded-lg bg-purple-100">
      <h3 className="text-lg font-semibold">{title || 'Flow Chart'}</h3>
      <p>Placeholder for Flow Chart data</p>
    </div>
  );
};

// Additional Simple mock-up for a Word Cloud
export const WordCloud: React.FC<{ data?: any, title?: string }> = ({ data, title }) => {
  return (
    <div className="text-center p-4 border rounded-lg bg-orange-100">
      <h3 className="text-lg font-semibold">{title || 'Word Cloud'}</h3>
      <p>Placeholder for Word Cloud data</p>
    </div>
  );
};

// Additional Simple mock-up for an Area Chart
export const AreaChart: React.FC<{ data?: any, title?: string }> = ({ data, title }) => {
  return (
    <div className="text-center p-4 border rounded-lg bg-teal-100">
      <h3 className="text-lg font-semibold">{title || 'Area Chart'}</h3>
      <p>Placeholder for Area Chart data</p>
    </div>
  );
};
