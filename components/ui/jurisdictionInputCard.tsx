"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Jurisdiction } from '@/utils/types';
import { useProduct } from "@/app/lib/hooks/useProduct";

interface JurisdictionsCardProps {
  jurisdictions: Jurisdiction[];
  memberId: string;
}

export const JurisdictionsCard: React.FC<JurisdictionsCardProps> = ({ jurisdictions: initialJurisdictions, memberId }) => {
  const [jurisdictions, setJurisdictions] = useState<Jurisdiction[]>(initialJurisdictions);
  const { dispatch } = useProduct();

  const handleAddJurisdiction = () => {
    const newJurisdiction = {
      id: Date.now(), // This should ideally be handled by your backend to ensure uniqueness
      name: "",
      type: ""
    };
    setJurisdictions([...jurisdictions, newJurisdiction]);
  };

  const handleRemoveJurisdiction = (id: number) => {
    setJurisdictions(jurisdictions.filter(jurisdiction => jurisdiction.id !== id));
    dispatch({ type: 'REMOVE_JURISDICTION', payload: { memberId, jurisdictionId: id } });
  };

  const updateJurisdiction = (id: number, field: keyof Jurisdiction, value: string) => {
    const updatedJurisdictions = jurisdictions.map(jurisdiction => 
      jurisdiction.id === id ? { ...jurisdiction, [field]: value } : jurisdiction
    );
    setJurisdictions(updatedJurisdictions);
    // Optionally dispatch to global state if immediate saving is required
    // dispatch({ type: 'UPDATE_JURISDICTION', payload: { memberId, jurisdictionId: id, updates: { [field]: value } } });
  };

  const saveJurisdictions = () => {
    // Dispatch save all changes to global state or backend
    dispatch({ type: 'UPDATE_MEMBER_JURISDICTIONS', payload: { memberId, jurisdictions } });
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Authorized Jurisdictions</CardTitle>
        <CardDescription>Add information on this member's specialty or authorized jurisdictions.</CardDescription>
      </CardHeader>
      <CardContent>
        {jurisdictions.map((jurisdiction, index) => (
          <div key={jurisdiction.id} className="grid w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor={`jurisdiction-name-${jurisdiction.id}`}>Jurisdiction</Label>
              <Input
                id={`jurisdiction-name-${jurisdiction.id}`}
                placeholder="Enter jurisdiction..."
                value={jurisdiction.name}
                onChange={(e) => updateJurisdiction(jurisdiction.id, 'name', e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor={`jurisdiction-type-${jurisdiction.id}`}>Jurisdiction Type</Label>
              <Select>
                <SelectTrigger id={`jurisdiction-type-${jurisdiction.id}`}>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="federal" onClick={() => updateJurisdiction(jurisdiction.id, 'type', 'federal')}>Federal</SelectItem>
                  <SelectItem value="state" onClick={() => updateJurisdiction(jurisdiction.id, 'type', 'state')}>State</SelectItem>
                  <SelectItem value="special" onClick={() => updateJurisdiction(jurisdiction.id, 'type', 'special')}>Special</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {index !== 0 && (
              <Button variant="outline" onClick={() => handleRemoveJurisdiction(jurisdiction.id)}>Remove</Button>
            )}
          </div>
        ))}
        <Button onClick={handleAddJurisdiction}>Add Jurisdiction</Button>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={saveJurisdictions}>Save All</Button>
      </CardFooter>
    </Card>
  );
}
