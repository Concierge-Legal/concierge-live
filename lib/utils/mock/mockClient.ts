// lib/utils/mock/mockClient.ts
// Mock Supabase client for Concierge demo version

import { MOCK_CONVERSATIONS, MOCK_MEMBERS, MOCK_ORGANIZATIONS, MOCK_USER } from './data';

export function createMockClient() {
	return {
		auth: {
			getUser: async () => {
				return { data: { user: MOCK_USER }, error: null };
			},
			signInWithOAuth: async () => {
				return { data: {}, error: null };
			},
			signOut: async () => {
				return { error: null };
			}
		},
		from: (table: string) => {
			return {
				select: (columns: string = '*') => {
					return {
						eq: (column: string, value: string) => {
							return {
								single: async () => {
									if (table === 'organizations' && column === 'id') {
										const org = MOCK_ORGANIZATIONS.find(org => org.id === value);
										return {
											data: org,
											error: org ? null : { message: 'Organization not found' }
										};
									}
									return { data: null, error: { message: 'Not implemented' } };
								},
								in: (range: string[]) => {
									return {
										data: null,
										error: { message: 'Not implemented' }
									};
								},
								async execute() {
									if (table === 'organizations' && column === 'id') {
										const org = MOCK_ORGANIZATIONS.find(org => org.id === value);
										return {
											data: [org],
											error: org ? null : { message: 'Organization not found' }
										};
									}

									if (table === 'members' && column === 'organization_id') {
										const members = MOCK_MEMBERS.filter(member => member.organization_id === value);
										return { data: members, error: null };
									}

									if (table === 'conversations' && column === 'organization_id') {
										const conversations = MOCK_CONVERSATIONS.filter(conv => conv.organization_id === value);
										return { data: conversations, error: null };
									}

									return { data: [], error: null };
								}
							};
						},
						limit: () => {
							return {
								async execute() {
									if (table === 'organizations') {
										return { data: MOCK_ORGANIZATIONS, error: null };
									}
									if (table === 'members') {
										return { data: MOCK_MEMBERS, error: null };
									}
									if (table === 'conversations') {
										return { data: MOCK_CONVERSATIONS, error: null };
									}
									return { data: [], error: null };
								}
							};
						},
						async execute() {
							if (table === 'organizations') {
								return { data: MOCK_ORGANIZATIONS, error: null };
							}
							if (table === 'members') {
								return { data: MOCK_MEMBERS, error: null };
							}
							if (table === 'conversations') {
								return { data: MOCK_CONVERSATIONS, error: null };
							}
							return { data: [], error: null };
						}
					};
				},
				insert: () => {
					return {
						async execute() {
							return { data: null, error: null };
						}
					};
				},
				update: () => {
					return {
						eq: () => {
							return {
								async execute() {
									return { data: null, error: null };
								}
							};
						}
					};
				},
				delete: () => {
					return {
						eq: () => {
							return {
								async execute() {
									return { data: null, error: null };
								}
							};
						}
					};
				}
			};
		}
	};
} 