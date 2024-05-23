import * as React from "react";

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
import { ProductFile, ProductOffering } from "@/utils/types";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import LabelWithTooltip from "./labelWithTooltip";
import { JurisdictionsCard } from "./jurisdictionInputCard";
import { Switch } from "./switch";
import { ServicesCard } from "./serviceInputCard";
// interface ProductCardProps {
//     productFile: ProductFile;
// }
const ProductCard: React.FC<{}> = () => {
    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="jurisdictions">Jurisdictions</TabsTrigger>
            </TabsList>
            <TabsContent value="about">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>About</CardTitle>
                        <CardDescription>Make Changes to Each Member's General Information here.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <LabelWithTooltip labelText="Full Name" tooltipText="The fullname of the company" />
                                    <Input id="fullName" placeholder="Enter member name..." />
                                </div>
                            </div>
                        </form>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <LabelWithTooltip labelText="Description" tooltipText="Describe what this member does, what their specialty is." />
                                    <Input id="description" placeholder="Enter description.." />
                                </div>
                            </div>
                        </form>

                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="services">
                <ServicesCard></ServicesCard>
            </TabsContent>
            <TabsContent value="jurisdictions">
                <JurisdictionsCard></JurisdictionsCard>
            </TabsContent>
        </Tabs>
    );
};
export default ProductCard;;