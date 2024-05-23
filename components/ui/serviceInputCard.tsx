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
import { Switch } from "@/components/ui/switch";

interface Service {
  id: number;
  name: string;
  price: number;
  pricingMethod: string;
  retainer: boolean;
}

export function ServicesCard() {
  const [services, setServices] = useState<Service[]>([]);

  const handleAddService = () => {
    const newService = {
      id: Date.now(), // simple unique id generation
      name: "",
      price: 0,
      pricingMethod: "",
      retainer: false
    };
    setServices([...services, newService]);
  };

  const handleRemoveService = (id: number) => {
    setServices(services.filter(service => service.id !== id));
  };

  const updateService = (id: number, field: keyof Service, value: any) => {
    setServices(services.map(service => {
      if (service.id === id) {
        return { ...service, [field]: value };
      }
      return service;
    }));
  };

  return (
    <Card className="w-[350px]">
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
                onChange={(e) => updateService(service.id, 'name', e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor={`service-price-${service.id}`}>Price</Label>
              <Input
                id={`service-price-${service.id}`}
                placeholder="Enter price..."
                type="number"
                value={service.price}
                onChange={(e) => updateService(service.id, 'price', parseFloat(e.target.value))}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor={`pricing-method-${service.id}`}>Pricing Method</Label>
              <Input
                id={`pricing-method-${service.id}`}
                placeholder="Enter pricing method..."
                value={service.pricingMethod}
                onChange={(e) => updateService(service.id, 'pricingMethod', e.target.value)}
              />
            </div>
            <Switch
              checked={service.retainer}
              onChange={(e) => updateService(service.id, 'retainer', !service.retainer)}
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
        <Button>Save All</Button>
      </CardFooter>
    </Card>
  );
}
