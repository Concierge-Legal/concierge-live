"use client";
import React, { useEffect, useReducer, useCallback } from 'react';
import { createClient } from '@/lib/utils/supabase/client';
import { denyAccess } from '../../actions';
import ProductCard from '@/components/dashboard/fileManagement/productCard';
import { productReducer, initialState, ProductContext, ProductState } from '@/lib/hooks/useProduct';
import { Member } from '@/lib/utils/types';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react'

export default function Network({ params }: { params: { organizationId: string; }; }) {
	const supabase = createClient();
	const [state, dispatch] = useReducer(productReducer, initialState);

	const getProfile = useCallback(async () => {
		console.log(`GetProfile called in useCallback!`)
		try {
			const authResult: { data: any, error: any } = await supabase.auth.getUser();
			// Check the user is authenticated
			if (authResult.error || !authResult.data?.user) {
				console.log(`User is not authenticated!`);
				denyAccess();
			}
			// Check the user is authorized
			if (authResult.data.user.app_metadata.organization_id !== params.organizationId) {
				console.log(`User is not authorized!`);
				denyAccess();
			}
			console.log(`======\nWelcome, ${authResult.data.user.user_metadata.first_name} ${authResult.data.user.user_metadata.last_name}\n======`)

			const requestBody = {
				organizationId: params.organizationId
			};
			const response = await fetch("/api/members", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestBody),
			});

			if (!response.ok) {
				console.log(`Response not ok`);
				throw new Error('Failed to fetch data');
			}
			const result = await response.json();
			if (result.status != 200) {
				throw new Error(`${result.error}, ${result.details}`);
			}
			const members: Member[] = result.members;
			console.log('Response:', members);
			if (members.length === 0) {
				// No members fetched, dispatch to add a new blank member
				addNewMember();
			} else {
				members.forEach(member => {
					dispatch({ type: 'ADD_MEMBER', payload: member });
				});
			}
		} catch (error) {
			console.error('Error fetching members:', error);
			addNewMember();
		}
	}, [params.organizationId, supabase, dispatch]);

	useEffect(() => {
		getProfile()
	}, [params.organizationId, getProfile])

	const addNewMember = () => {
		const newMember: Member = {
			id: `new_${Date.now()}`,
			fullName: '',
			description: '',
			services: [],
			jurisdictions: []
		};
		dispatch({ type: 'ADD_MEMBER', payload: newMember });
	};

	return (
		<ProductContext.Provider value={{ state, dispatch }}>
			<div className="min-h-screen bg-gray-900 text-white px-8 py-12">
				<div className="max-w-4xl mx-auto">
					<div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12 text-center">
						<h1 className="text-5xl font-bold text-indigo-500">Products and Services Knowledge Upload</h1>
					</div>
					{state.members.length > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
							{state.members.map((member: Member) => (
								<ProductCard key={member.id} member={member} />
							))}
						</div>
					) : (
						<div className="flex justify-center items-center h-64">
							<p className="text-gray-400">No members found. Click below to add a new member.</p>
						</div>
					)}
					<div className="flex justify-center mt-8">
						<Button onClick={addNewMember} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
							Add New Member
						</Button>
					</div>
				</div>
			</div>
		</ProductContext.Provider>
	);
}
