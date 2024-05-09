// import { CustomAreaChart } from "@/app/components/charts/areaChart";
// import { CustomBarChart } from "@/app/components/charts/barChart";
import { CustomLineChart } from "@/app/components/charts/lineChart";
// import { CustomHistogram } from "@/app/components/charts/histogram";
// import { CustomPieChart } from "@/app/components/charts/pieChart";

// import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // For representing FlowChart data as Scatter Chart




// Example data, replace with real data passed via props or fetched within the component
const exampleData = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
];

// Specific mock data for each chart
const conversationVolumeData = [
    { month: 'Jan', conversations: 120 },
    { month: 'Feb', conversations: 210 },
    { month: 'Mar', conversations: 180 },
    { month: 'Apr', conversations: 240 },
    { month: 'May', conversations: 280 },
];

const satisfactionRatingsData = [
    { rating: 'Very Satisfied', count: 150 },
    { rating: 'Satisfied', count: 120 },
    { rating: 'Neutral', count: 90 },
    { rating: 'Dissatisfied', count: 30 },
    { rating: 'Very Dissatisfied', count: 10 },
];

const topIntentsData = [
    { intent: 'Billing Queries', value: 300 },
    { intent: 'Technical Support', value: 250 },
    { intent: 'Product Information', value: 200 },
    { intent: 'Appointment Scheduling', value: 150 },
];

const responseTimeData = [
    { range: '0-2 sec', count: 320 },
    { range: '2-5 sec', count: 215 },
    { range: '5-10 sec', count: 95 },
    { range: '10+ sec', count: 30 },
];

const fallbackRateData = [
    { month: 'Jan', rate: 5 },
    { month: 'Feb', rate: 7 },
    { month: 'Mar', rate: 4 },
    { month: 'Apr', rate: 6 },
    { month: 'May', rate: 3 },
];

const costAnalysisData = [
    { month: 'Jan', cost: 1200 },
    { month: 'Feb', cost: 1100 },
    { month: 'Mar', cost: 1150 },
    { month: 'Apr', cost: 1300 },
    { month: 'May', cost: 1250 },
];

const performanceImprovementsData = [
    { month: 'Jan', accuracy: 80 },
    { month: 'Feb', accuracy: 82 },
    { month: 'Mar', accuracy: 85 },
    { month: 'Apr', accuracy: 87 },
    { month: 'May', accuracy: 90 },
];

const userDemographicsData = [
    { ageGroup: '18-25', value: 120 },
    { ageGroup: '26-35', value: 200 },
    { ageGroup: '36-45', value: 180 },
    { ageGroup: '46+', value: 150 },
];

export default function DashboardAnalytics({ params }: { params: { userId: string } }) {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold">Analytics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <CustomLineChart data={conversationVolumeData} title="Conversation Volume Over Time" />
                {/* <CustomBarChart data={satisfactionRatingsData} title="User Satisfaction Ratings" />
                <CustomPieChart data={topIntentsData} title="Top Performing Intents" />
                <CustomHistogram data={responseTimeData} title="Response Time Metrics" />
                <CustomLineChart data={fallbackRateData} title="Fallback Rate Analysis" /> */}
                {/* <ResponsiveContainer width="100%" height={300}>
                    <ScatterChart>
                        <CartesianGrid />
                        <XAxis type="number" dataKey="uv" name="stages" />
                        <YAxis type="number" dataKey="pv" name="frequency" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Legend />
                        <Scatter name="Sessions" data={exampleData} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer> */}
                {/* <CustomAreaChart data={costAnalysisData} title="Cost Analysis" />
                <CustomLineChart data={performanceImprovementsData} title="AI Performance Improvements" />
                <CustomPieChart data={userDemographicsData} title="User Demographics" /> */}
            </div>
        </div>
    );
}
