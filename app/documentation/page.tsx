"use client";
import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/navBar';

export default function Documentation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className="flex flex-col">
            
            <div className="flex flex-col mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-primary-foreground mb-6">Dashboard Documentation</h1>
                <p className="text-secondary-foreground mb-12">
                    Learn how to effectively manage your Concierge chatbot through the administrative dashboard.
                </p>
                
                <div className="space-y-8">
                    {documentationSections.map((section, index) => (
                        <Accordion type="multiple" key={index} className="bg-card shadow-lg rounded-lg">
                            <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger className=" font-bold py-4 px-6">
                                    {section.title}
                                </AccordionTrigger>
                                <AccordionContent className="p-6 text-secondary-foreground">
                                    <p>{section.description}</p>
                                    <div className="mt-4 space-y-4">
                                        {section.subSections.map((sub, idx) => (
                                            <Dialog key={idx} open={isOpen} onOpenChange={setIsOpen}>
                                                <DialogTrigger asChild>
                                                    <Button className="text-left w-full">{sub.title}</Button>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <Card className="bg-popover">
                                                        <CardHeader className="">{sub.title}</CardHeader>
                                                        <CardContent className="">{sub.content}</CardContent>
                                                        <CardFooter>
                                                            <Button onClick={() => setIsOpen(false)} className="bg-destructive text-destructive-foreground">Close</Button>
                                                        </CardFooter>
                                                    </Card>
                                                </DialogContent>
                                            </Dialog>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))}
                </div>
            </div>
        </main>
    );
}

const documentationSections = [
    {
        title: 'Analytics and Insight',
        description: 'Learn how to access and analyze comprehensive analytics to gain insights into user interactions.',
        subSections: [
            { title: 'Traffic Analysis', content: 'Detailed steps to view and interpret traffic data.' },
            { title: 'Engagement Metrics', content: 'Guide on tracking and enhancing user engagement.' },
        ],
    },
    {
        title: 'Appearance and Customization',
        description: 'Customize the appearance of your chatbot to align with your brand.',
        subSections: [
            { title: 'Themes and Colors', content: 'Instructions for applying themes and adjusting colors.' },
            { title: 'Custom Layouts', content: 'How to modify and create custom layouts for your chatbot.' },
        ],
    },
    {
        title: 'Behavior Customization',
        description: 'Adjust how your chatbot behaves in different scenarios.',
        subSections: [
            { title: 'Setting Up Rules', content: 'Configure rules for how your chatbot responds to user queries.' },
            { title: 'AI Responses', content: 'Tune AI responses to make them more accurate and helpful.' },
        ],
    },
    {
        title: 'Knowledge Library',
        description: 'Manage the information your chatbot draws from to answer queries.',
        subSections: [
            { title: 'Managing Content', content: 'Steps to add, remove, or edit the content in your knowledge library.' },
            { title: 'Content Best Practices', content: 'Best practices for structuring your content effectively.' },
        ],
    },
    {
        title: 'Billing and Usage',
        description: 'View and manage your subscription and service usage details.',
        subSections: [
            { title: 'Subscription Plans', content: 'Details on different subscription plans and how to change your plan.' },
            { title: 'Usage Reports', content: 'How to access and interpret usage reports.' },
        ],
    },
    {
        title: 'Settings',
        description: 'Configure various settings related to your account and chatbot operations.',
        subSections: [
            { title: 'Account Settings', content: 'How to update your account information and preferences.' },
            { title: 'Security Settings', content: 'Security options for protecting your account and data.' },
        ],
    }
];
