import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProductContext } from "@/lib/hooks/useProduct";
import { Jurisdiction } from '@/lib/utils/types';



interface JurisdictionsCardProps {
  memberId: string;
}

export const JurisdictionsCard: React.FC<JurisdictionsCardProps> = ({ memberId }) => {
  const { state, dispatch } = useContext(ProductContext);

  // Retrieves jurisdictions directly from the context state
  const jurisdictions = state.members.find(member => member.id === memberId)?.jurisdictions || [];

  const handleAddJurisdiction = () => {
    dispatch({
      type: 'ADD_JURISDICTION',
      payload: { memberId, jurisdiction: { id: Date.now(), name: "", type: "" } }
    });
  };

  const handleRemoveJurisdiction = (id: number) => {
    dispatch({ type: 'REMOVE_JURISDICTION', payload: { memberId, jurisdictionId: id } });
  };

  const updateJurisdiction = (id: number, field: keyof Jurisdiction, value: string) => {
    dispatch({
      type: 'UPDATE_JURISDICTION',
      payload: { memberId, jurisdictionId: id, updates: { [field]: value } }
    });
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Authorized Jurisdictions</CardTitle>
        <CardDescription>Add or modify jurisdictions.</CardDescription>
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
              <Label htmlFor={`jurisdiction-type-${jurisdiction.id}`}>Type</Label>
              <Select>
                <SelectTrigger id={`jurisdiction-type-${jurisdiction.id}`}>
                  <SelectValue>{jurisdiction.type || "Select"}</SelectValue>
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="federal">Federal</SelectItem>
                  <SelectItem value="state">State</SelectItem>
                  <SelectItem value="special">Special</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" onClick={() => handleRemoveJurisdiction(jurisdiction.id)}>Remove</Button>
          </div>
        ))}
        <Button onClick={handleAddJurisdiction}>Add Jurisdiction</Button>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Cancel</Button>
        {/* Save handled by individual updates */}
      </CardFooter>
    </Card>
  );
}
