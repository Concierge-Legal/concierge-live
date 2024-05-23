import * as React from 'react';
import { useState } from 'react';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Jurisdiction {
  id: number;
  name: string;
  type: string;
}

export function JurisdictionsCard() {
  const [jurisdictions, setJurisdictions] = useState<Jurisdiction[]>([]);

  const handleAddJurisdiction = () => {
    const newJurisdiction = {
      id: Date.now(), // a simple way to get a unique id
      name: "",
      type: ""
    };
    setJurisdictions([...jurisdictions, newJurisdiction]);
  };

  const handleRemoveJurisdiction = (id: number) => {
    setJurisdictions(jurisdictions.filter(jurisdiction => jurisdiction.id !== id));
  };

  const updateJurisdiction = (id: number, field: keyof Jurisdiction, value: string) => {
    setJurisdictions(jurisdictions.map(jurisdiction => {
      if (jurisdiction.id === id) {
        return { ...jurisdiction, [field]: value };
      }
      return jurisdiction;
    }));
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Authorized Jurisdictions</CardTitle>
        <CardDescription>Add information on this member's specialty or authorized jurisdictions.</CardDescription>
      </CardHeader>
      <CardContent>
        {jurisdictions.map((jurisdiction, index) => (
          <div key={jurisdiction.id} className="grid w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor={`jurisdiction-name-${jurisdiction.id}`}>Jurisdiction</Label>
              <Input id={`jurisdiction-name-${jurisdiction.id}`}
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
        <Button>Save All</Button>
      </CardFooter>
    </Card>
  );
}
