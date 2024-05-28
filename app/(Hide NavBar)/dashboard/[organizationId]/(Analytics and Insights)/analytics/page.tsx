import { CustomAreaChart, CustomBarChart, CustomLineChart, CustomHistogram, CustomPieChart } from "@/components/dashboard/customCharts";


// Example data, replace with real data passed via props or fetched within the component
const conversationVolumeData = [
  { day: "Mon", conversations: 120 },
  { day: "Tue", conversations: 300 },
  { day: "Wed", conversations: 260 },
  { day: "Thu", conversations: 180 },
  { day: "Fri", conversations: 200 },
  { day: "Sat", conversations: 190 },
  { day: "Sun", conversations: 220 },
];

const satisfactionRatingsData = [
  { rating: "Very Satisfied", count: 320 },
  { rating: "Satisfied", count: 430 },
  { rating: "Neutral", count: 150 },
  { rating: "Dissatisfied", count: 60 },
  { rating: "Very Dissatisfied", count: 40 },
];

const topIntentsData = [
  { intent: "Billing Queries", value: 350 },
  { intent: "Technical Support", value: 280 },
  { intent: "Product Information", value: 170 },
  { intent: "Appointment Scheduling", value: 200 },
];

const responseTimeData = [
  { range: "0-2 sec", count: 400 },
  { range: "2-5 sec", count: 300 },
  { range: "5-10 sec", count: 150 },
  { range: "10+ sec", count: 50 },
];

const fallbackRateData = [
  { month: "Jan", rate: 6 },
  { month: "Feb", rate: 7 },
  { month: "Mar", rate: 5 },
  { month: "Apr", rate: 4 },
  { month: "May", rate: 3 },
];

const costAnalysisData = [
  { month: "Jan", cost: 1500 },
  { month: "Feb", cost: 1200 },
  { month: "Mar", cost: 1300 },
  { month: "Apr", cost: 1100 },
  { month: "May", cost: 1000 },
];

const performanceImprovementsData = [
  { month: "Jan", accuracy: 85 },
  { month: "Feb", accuracy: 87 },
  { month: "Mar", accuracy: 90 },
  { month: "Apr", accuracy: 92 },
  { month: "May", accuracy: 95 },
];

const userDemographicsData = [
  { ageGroup: "18-25", value: 150 },
  { ageGroup: "26-35", value: 250 },
  { ageGroup: "36-45", value: 200 },
  { ageGroup: "46+", value: 100 },
];

export default function DashboardAnalytics({
  params,
}: {
  params: { organizationId: string };
}) {
  return (
    <div className="p-4">
      <div className="bg-white text-black p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-4xl font-bold text-center">Analytics</h1>
      </div>
      <div id="userEngagement">
        <h1 className="text-4xl font-bold text-center">User Engagement</h1>

		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <CustomLineChart
          data={conversationVolumeData}
          title="Conversation Volume Over Time"
          dataKeyX="day"
          dataKeyY="conversations"
        />
		</div>
      </div>
      <div id="responseMetrics">
	  <h1 className="text-4xl font-bold text-center">Response Metrics</h1>
      </div>
      <div id="customerInsights">
        <h1 className="text-4xl font-bold text-center">Customer Insights</h1>
      </div>
      <div id="resolutionMetrics">
        <h1 className="text-4xl font-bold text-center">Resolution Metrics</h1>
      </div>
      <div id="userSatisfaction">
        <h1 className="text-4xl font-bold text-center">User Satisfaction</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <CustomLineChart
          data={conversationVolumeData}
          title="Conversation Volume Over Time"
          dataKeyX="day"
          dataKeyY="conversations"
        />
        <CustomBarChart
          data={satisfactionRatingsData}
          title="User Satisfaction Ratings"
          dataKeyX="rating"
          dataKeyY="count"
        />
        <CustomPieChart
          data={topIntentsData}
          title="Top Performing Intents"
          dataKey="value"
          nameKey="intent"
        />
        <CustomHistogram
          data={responseTimeData}
          title="Response Time Metrics"
          dataKeyX="range"
          dataKeyY="count"
        />
        <CustomLineChart
          data={fallbackRateData}
          title="Fallback Rate Analysis"
          dataKeyX="month"
          dataKeyY="rate"
        />
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
        <CustomAreaChart
          data={costAnalysisData}
          title="Cost Analysis"
          dataKeyX="month"
          dataKeyY="cost"
        />
        <CustomLineChart
          data={performanceImprovementsData}
          title="AI Performance Improvements"
          dataKeyX="month"
          dataKeyY="accuracy"
        />
        <CustomPieChart
          data={userDemographicsData}
          title="User Demographics"
          dataKey="value"
          nameKey="ageGroup"
        />
      </div>
    </div>
  );
}
