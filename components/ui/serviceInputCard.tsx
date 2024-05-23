"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Service } from "@/utils/types";
import { useProduct } from "@/app/lib/hooks/useProduct"; 

interface ServicesCardProps {
  services: Service[];
  memberId: string;
}

export const ServicesCard: React.FC<ServicesCardProps> = ({ services: initialServices, memberId }) => {
  const [services, setServices] = useState<Service[]>(initialServices);
  const { dispatch } = useProduct();

  const handleAddService = () => {
    const newService: Service = {
      id: Date.now(), // Simple unique id generation (this should eventually be handled by the backend)
      name: "",
      price: 0,
      pricingMethod: "",
      retainer: false
    };
    setServices([...services, newService]);
  };

  const handleRemoveService = (id: number) => {
    setServices(services.filter(service => service.id !== id));
    // Dispatch an action to update global state
    dispatch({ type: 'REMOVE_SERVICE', payload: { memberId, serviceId: id } });
  };

  const updateService = (id: number, field: keyof Service, value: any) => {
    const updatedServices = services.map(service => service.id === id ? { ...service, [field]: value } : service);
    setServices(updatedServices);
    // Optionally dispatch to global state if immediate saving is required
    // dispatch({ type: 'UPDATE_SERVICE', payload: { memberId, serviceId: id, updates: { [field]: value } } });
  };

  const saveServices = () => {
    // Dispatch save all changes to global state or backend
    dispatch({ type: 'UPDATE_MEMBER_SERVICES', payload: { memberId, services } });
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Services Offered</CardTitle>
        <CardDescription>Add new products and services this member offers.</CardDescription>
      </CardHeader>
      <CardContent>
        {services.map((service, index) => (
          <div key={service.id} className="grid w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor={`service-name-${service.id}`}>Service Name</Label>
              <Input
                id={`service-name-${service.id}`}
                placeholder="Enter service name..."
                value={service.name}
                onChange={e => updateService(service.id, 'name', e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor={`service-price-${service.id}`}>Price</Label>
              <Input
                id={`service-price-${service.id}`}
                placeholder="Enter price..."
                type="number"
                value={service.price}
                onChange={e => updateService(service.id, 'price', parseFloat(e.target.value))}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor={`pricing-method-${service.id}`}>Pricing Method</Label>
              <Input
                id={`pricing-method-${service.id}`}
                placeholder="Enter pricing method..."
                value={service.pricingMethod}
                onChange={e => updateService(service.id, 'pricingMethod', e.target.value)}
              />
            </div>
            <Switch
              checked={service.retainer}
              onChange={() => updateService(service.id, 'retainer', !service.retainer)}
            >Needs Retainer</Switch>
            {index !== 0 && (
              <Button variant="outline" onClick={() => handleRemoveService(service.id)}>Remove</Button>
            )}
          </div>
        ))}
        <Button onClick={handleAddService}>Add Service</Button>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={saveServices}>Save All</Button>
      </CardFooter>
    </Card>
  );
}
