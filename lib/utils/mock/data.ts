// lib/utils/mock/data.ts
// Mock data provider for Concierge demo version

export const MOCK_USER = {
	id: 'demo-user-id',
	email: 'demo@example.com',
	user_metadata: {
		name: 'Demo User',
		avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo'
	},
	app_metadata: {
		organization_id: 'demo-organization',
		role: 'admin'
	}
};

export const MOCK_ORGANIZATIONS = [
	{
		id: 'demo-organization',
		fullname: 'Demo DAO',
		description: 'This is a demo organization for testing Concierge',
		logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=demo',
		created_at: '2023-01-01T00:00:00.000Z'
	}
];

export const MOCK_MEMBERS = [
	{
		id: '1',
		name: 'Demo User',
		email: 'demo@example.com',
		role: 'Admin',
		avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo',
		organization_id: 'demo-organization'
	},
	{
		id: '2',
		name: 'Jane Smith',
		email: 'jane@example.com',
		role: 'Member',
		avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jane',
		organization_id: 'demo-organization'
	},
	{
		id: '3',
		name: 'Bob Johnson',
		email: 'bob@example.com',
		role: 'Member',
		avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bob',
		organization_id: 'demo-organization'
	}
];

export const MOCK_CONVERSATIONS = Array.from({ length: 67 }).map((_, i) => ({
	id: `conv-${i}`,
	title: `Mock Conversation ${i}`,
	created_at: new Date(Date.now() - i * 86400000).toISOString(),
	organization_id: 'demo-organization'
}));

// Analytics mock data
export const MOCK_ANALYTICS = {
	dailyConversations: [
		{ day: 'Mon', conversations: 120 },
		{ day: 'Tue', conversations: 230 },
		{ day: 'Wed', conversations: 180 },
		{ day: 'Thu', conversations: 210 },
		{ day: 'Fri', conversations: 240 },
		{ day: 'Sat', conversations: 100 },
		{ day: 'Sun', conversations: 90 },
	],
	customerSatisfaction: [
		{ category: 'Billing', value: 300, satisfaction: 'High' },
		{ category: 'Technical Support', value: 250, satisfaction: 'Medium' },
		{ category: 'Product Information', value: 150, satisfaction: 'Low' },
		{ category: 'General Queries', value: 200, satisfaction: 'High' },
	],
	responseTimes: [
		{ category: 'Billing', time: 2.63 },
		{ category: 'Technical Support', time: 5.24 },
		{ category: 'Product Information', time: 3.2 },
		{ category: 'General Queries', time: 1.9 },
	]
}; 