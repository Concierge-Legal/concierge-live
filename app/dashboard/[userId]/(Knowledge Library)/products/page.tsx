"use client";
import React, { useEffect } from 'react';
import ProductCard from '@/components/ui/productCard';
import { useProduct } from '@/app/lib/hooks/useProduct'; // Import the context hook
import { Member } from '@/utils/types'; // Ensure this import path is correct

export default function ProductsDashboardSubpage({ params }: { params: { userId: string } }) {
    const { state, dispatch } = useProduct(); // Use the context

    useEffect(() => {
        console.log('Fetching data from the database!');

        const fetchData = async () => {
			try {
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
					throw new Error('Failed to fetch data');
				}
				const members: Member[] = await response.json();
				console.log('Response:', members);
				members.forEach(member => {
					dispatch({ type: 'ADD_MEMBER', payload: member });
				});
			} catch (error) {
				console.error('Error fetching members:', error);
			}
		};
		

        fetchData();
    }, [dispatch, params.userId]); // Include params.userId in the dependency array

    const addNewMember = () => {
        const newMember: Member = { // Explicitly state the type here
            id: `new_${Date.now()}`, // Simple unique ID for example
            fullName: '',
            description: '',
            services: [],
            jurisdictions: []
        };
        dispatch({ type: 'ADD_MEMBER', payload: newMember });
    };

    return (
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
    );
};
