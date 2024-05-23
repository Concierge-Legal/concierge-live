"use client";
import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LabelWithTooltip from "./labelWithTooltip";
import { JurisdictionsCard } from "./jurisdictionInputCard";
import { ServicesCard } from "./serviceInputCard";
import { ProductContext } from "@/app/lib/hooks/useProduct"; // Import the context hook
import { Member, Service, Jurisdiction } from '@/utils/types'; // Importing types

interface ProductCardProps {
  member: Member;
}

const ProductCard: React.FC<ProductCardProps> = ({ member }) => {
  const { state, dispatch } = useContext(ProductContext); // Use the context for dispatching actions

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
    <Tabs defaultValue="about" className="w-full h-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="services">Services</TabsTrigger>
        <TabsTrigger value="jurisdictions">Jurisdictions</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>About</CardTitle>
            <CardDescription>Make Changes to Each Member's General Information here.</CardDescription>
          </CardHeader>
          <CardContent className="w-full h-full">
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <LabelWithTooltip labelText="Full Name" tooltipText="The fullname of the company" />
                  <Input id="fullName" placeholder="" value={member.fullName} onChange={e => handleChange('fullName', e.target.value)} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <LabelWithTooltip labelText="Description" tooltipText="Describe what this member does, what their specialty is." />
                  <Input id="description" placeholder="" value={member.description} onChange={e => handleChange('description', e.target.value)} />
                </div>
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
  );
};

export default ProductCard;
