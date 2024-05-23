"use client";
import React, { useEffect, useReducer } from 'react';
import ProductCard from '@/components/ui/productCard';
import { productReducer, initialState, ProductContext, ProductState } from '@/app/lib/hooks/useProduct'; // Import the context hook
import { Member } from '@/utils/types'; // Ensure this import path is correct

export default function ProductsDashboardSubpage({ params }: { params: { userId: string; }; }) {

	const [state, dispatch] = useReducer(productReducer, initialState);

	useEffect(() => {
		console.log('Fetching data from the database!');

		const fetchData = async () => {
			try {
				console.log(params.userId);
				const requestBody = {
					userId: params.userId
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
		};


		fetchData();
	}, [dispatch]); // Include params.userId in the dependency array

	const addNewMember = () => {
		const newMember: Member = {
			id: `new_${Date.now()}`, // To ensure unique IDs, consider a more robust method if necessary
			fullName: '',
			description: '',
			services: [],
			jurisdictions: []
		};
		console.log('Adding new member:', newMember);
		dispatch({ type: 'ADD_MEMBER', payload: newMember });
		console.log('Current state after dispatch:', state.members);
	};


	return (
		<ProductContext.Provider value={{state, dispatch}}>
			
				<div className="min-h-screen bg-white px-8 py-12">
					<div className="max-w-7xl mx-auto">
						<div className="bg-gray-100 text-black p-8 rounded-lg shadow-lg mb-12 text-center">
							<h1 className="text-5xl font-bold">Products and Services Knowledge Upload</h1>
						</div>
						{state.members.map((member: Member) => (
							<ProductCard key={member.id} member={member} />
						))}
						<button onClick={addNewMember} className="mt-4 p-2 bg-blue-500 text-white rounded">
							Add New Member
						</button>
					</div>
				</div>
			
		</ProductContext.Provider>
	);
};
