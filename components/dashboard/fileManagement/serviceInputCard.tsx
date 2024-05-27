import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Service } from '@/lib/utils/types';
import { ProductContext } from "@/lib/hooks/useProduct";

interface ServicesCardProps {
  memberId: string;
}

export const ServicesCard: React.FC<ServicesCardProps> = ({ memberId }) => {
  const { state, dispatch } = useContext(ProductContext);

  // Retrieves services directly from the context state
  const services = state.members.find(member => member.id === memberId)?.services || [];

  const handleAddService = () => {
    dispatch({
      type: 'ADD_SERVICE',
      payload: {
        memberId,
        service: { id: Date.now(), name: "", price: 0, pricingMethod: "", retainer: false }
      }
    });
  };

  const handleRemoveService = (id: number) => {
    dispatch({ type: 'REMOVE_SERVICE', payload: { memberId, serviceId: id } });
  };

  const updateService = (id: number, field: keyof Service, value: any) => {
    dispatch({
      type: 'UPDATE_SERVICE',
      payload: { memberId, serviceId: id, updates: { [field]: value } }
    });
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Services Offered</CardTitle>
        <CardDescription>Add new products and services this member offers.</CardDescription>
      </CardHeader>
      <CardContent>
        {services.map((service, index) => (
          <div key={service.id} className="grid w-full gap-4 mb-10 p-4 bg-sky-50 border rounded-lg shadow-md">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor={`service-name-${service.id}`}>Service Name</Label>
              <Input
                id={`service-name-${service.id}`}
                placeholder="Enter service name..."
                value={service.name}
                onChange={e => updateService(service.id, 'name', e.target.value)}
                className="mt-2 p-2 border border-gray-500 rounded w-full"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor={`service-price-${service.id}`}>Price</Label>
              <Input
                id={`service-price-${service.id}`}
                type="number"
                placeholder="Enter price..."
                value={service.price}
                onChange={e => updateService(service.id, 'price', parseFloat(e.target.value))}
                className="mt-2 p-2 border border-gray-500 rounded w-full"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor={`pricing-method-${service.id}`}>Pricing Method</Label>
              <Input
                id={`pricing-method-${service.id}`}
                placeholder="Enter pricing method..."
                value={service.pricingMethod}
                onChange={e => updateService(service.id, 'pricingMethod', e.target.value)}
                className="mt-2 p-2 border border-gray-500 rounded w-full"
              />
            </div>
            <div className="flex items-center space-x-2 mt-4"> <span>Needs Retainer</span>
              <Switch
                checked={service.retainer}
                onChange={() => updateService(service.id, 'retainer', !service.retainer)}
              />
             
            </div>
            {index !== 0 && (
              <Button variant="outline" className="mt-4" onClick={() => handleRemoveService(service.id)}>
                Remove
              </Button>
            )}
          </div>
        ))}
        <Button className="mt-4" onClick={handleAddService}>Add Service</Button>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  );
};
