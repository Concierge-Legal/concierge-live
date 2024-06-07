"use client";
import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LabelWithTooltip from "../../ui/labelWithTooltip";
import { JurisdictionsCard } from "./jurisdictionInputCard";
import { ServicesCard } from "./serviceInputCard";
import { ProductContext } from "@/lib/hooks/useProduct"; // Import the context hook
import { Member, Service, Jurisdiction } from '@/lib/utils/types'; // Importing types
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@/components/ui/dialog';

interface NetworkCardProps {
    member: Member;
}

const NetworkCard: React.FC<NetworkCardProps> = ({ member }) => {
    const { state, dispatch } = useContext(ProductContext); // Use the context for dispatching actions

    const saveMember = async () => {
        const url = member.isNew ? '/api/members/create' : `/api/members/update/${member.id}`;
        const method = member.isNew ? 'POST' : 'PUT';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(member)
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.message);

            if (member.isNew) {
                dispatch({ type: 'ADD_MEMBER', payload: result });  // This should replace the temporary member with the confirmed data
            } else {
                dispatch({ type: 'UPDATE_MEMBER', payload: { id: member.id, updates: member } });
            }
        } catch (error) {
            console.error('Failed to save member:', error);
        }
    };

    const deleteMember = async () => {
        if (member.isNew) {
            dispatch({ type: 'REMOVE_MEMBER', payload: member.id });
        } else {
            try {
                const response = await fetch(`/api/members/delete/${member.id}`, {
                    method: 'DELETE',
                });

                if (!response.ok) throw new Error('Failed to delete member');

                dispatch({ type: 'REMOVE_MEMBER', payload: member.id });
            } catch (error) {
                console.error('Failed to delete member:', error);
            }
        }
    };

    const handleChange = (field: keyof Member, value: string) => {
        dispatch({
            type: 'UPDATE_MEMBER',
            payload: {
                id: member.id,
                updates: {
                    [field]: value,
                }
            }
        });
    };

    return (
        <div className="flex flex-wrap justify-center gap-4 p-1 py-2">
            <Dialog>
                <DialogTrigger asChild>
                    <div className="cursor-pointer w-full sm:w-96">
                        <Card className="shadow-lg rounded-lg overflow-hidden">
                            <CardHeader className="bg-primary-foreground p-4 flex justify-between items-center">
                                <CardTitle className="text-lg font-bold">Member</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 bg-card">
                                <div className="mb-2">
                                    <p className="font-semibold">
                                        {member.fullName || "New Member"}
                                    </p>
                                    <p className="text-sm">
                                        {member.description || "No description provided."}
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="p-4 bg-secondary-foreground">
                                <Button className="w-full bg-accent text-white rounded hover:bg-accent-foreground">
                                    Edit Member
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </DialogTrigger>
                <DialogContent className="max-h-screen overflow-y-auto scrollbar-hide">
                    <Tabs defaultValue="about" className="w-full h-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="about">About</TabsTrigger>
                            <TabsTrigger value="services">Services</TabsTrigger>
                            <TabsTrigger value="jurisdictions">Jurisdictions</TabsTrigger>
                        </TabsList>
                        <TabsContent value="about">
                            <Card className="w-full h-full">
                                <CardHeader>
                                    <CardTitle>About {member.fullName}</CardTitle>
                                    <CardDescription>
                                        Make changes to each member&apos;s general information here.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="w-full h-full">
                                    <form className="space-y-4">
                                        <div>
                                            <LabelWithTooltip
                                                labelText="Full Name"
                                                tooltipText="The full name of the company"
                                            />
                                            <Input
                                                id="fullName"
                                                placeholder="Enter full name"
                                                value={member.fullName}
                                                onChange={(e) =>
                                                    handleChange("fullName", e.target.value)
                                                }
                                                className="mt-2 p-2 border border-gray-300 rounded w-full"
                                            />
                                        </div>
                                        <div>
                                            <LabelWithTooltip
                                                labelText="Description"
                                                tooltipText="Describe what this member does, what their specialty is."
                                            />
                                            <Input
                                                id="description"
                                                placeholder="Enter description"
                                                value={member.description}
                                                onChange={(e) =>
                                                    handleChange("description", e.target.value)
                                                }
                                                className="mt-2 p-2 border border-gray-300 rounded w-full"
                                            />
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="services">
                            <ServicesCard memberId={member.id} />
                        </TabsContent>
                        <TabsContent value="jurisdictions">
                            <JurisdictionsCard memberId={member.id} />
                        </TabsContent>
                    </Tabs>
                    <CardFooter className="flex justify-between items-center">
                        <Button onClick={deleteMember} className="bg-red-600 hover:bg-red-700 text-white">Delete Member</Button>
                        <div className="flex space-x-2">
                            <DialogClose asChild>
                                <Button className="bg-gray-600 hover:bg-gray-700 text-white">Close</Button>
                            </DialogClose>
                            <Button onClick={saveMember} className="bg-blue-600 hover:bg-blue-700 text-white">Save Member</Button>
                        </div>
                    </CardFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default NetworkCard;
