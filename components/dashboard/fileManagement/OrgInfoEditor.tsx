// Assuming CompanyFile is exported from types.ts or a similar file
import { BaseFile, CompanyFile } from '@/utils/types';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textArea';
import CustomTooltip from "@/components/ui/customTooltip";

import { TabsList, Tabs, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Label } from "@/components/ui/label";
import { Accordion } from '@/components/ui/accordion';
import { Combobox, typeTags } from '@/components/ui/combobox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import LabelWithTooltip from '@/components/ui/labelWithTooltip';

interface OrgInfoEditorProps {
    document: CompanyFile;
    onSave: (updatedDoc: CompanyFile) => void;
}


const informationTypeTags: typeTags[] = [
    { label: "Mission", value: "mission" },
    { label: "Github", value: "github" },
    { label: "Org Chart/ Employee Search", value: "org-chart" },
    { label: "History", value: "history" },
    { label: "Entity formation documents", value: "entity-formation-documents" },
    { label: "By-laws", value: "by-laws" },
    { label: "Company Publications", value: "company-publications" },
    { label: "Discord / Communications Infrastructure", value: "discord-comm-infra" }
];


const OrgInfoEditor: React.FC<OrgInfoEditorProps> = ({ document, onSave }) => {
    const [name, setName] = useState<string>(document.name);
    const [rawText, setRawText] = useState<string>(document.rawText);
    const [summary, setSummary] = useState<string>(document.summary);
    const [managingDepartment, setManagingDepartment] = useState<string>(document.managingDepartment);
    const [hypotheticalQuestions, setHypotheticalQuestions] = useState<string[]>(document.hypotheticalQuestions.commonQuestions);

    useEffect(() => {
        console.log(`Document changed!`)
        console.log(document.name)
        setName(document.name);
        setRawText(document.rawText);
        setSummary(document.summary);
        setManagingDepartment(document.managingDepartment);
        setHypotheticalQuestions(document.hypotheticalQuestions.commonQuestions);
        console.log(document.hypotheticalQuestions.commonQuestions)
    }, [document]);

    const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newQuestions = [...hypotheticalQuestions];
        newQuestions[index] = event.target.value;
        setHypotheticalQuestions(newQuestions);
    };

    const handleSaveChanges = () => {
        const updatedDocument = {
            ...document,
            name,
            rawText,
            summary,
            managingDepartment,
            hypotheticalQuestions: { ...document.hypotheticalQuestions, commonQuestions: hypotheticalQuestions }
        };
        onSave(updatedDocument);
    };
    console.log('informationTypeTags', informationTypeTags);

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <Tabs defaultValue="about" className="w-full">
                <TabsList>
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="tags">Tags</TabsTrigger>
                    <TabsTrigger value="questions">Questions</TabsTrigger>
                </TabsList>
                <TabsContent value="about">
                    <Card>
                        <CardHeader>
                            <CardTitle>About</CardTitle>
                            <CardDescription>
                                Change AI Metadata about this document. Save Changes when Done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <div>
                                    <LabelWithTooltip labelText='Name' tooltipText='Edit the name of the document.'></LabelWithTooltip>
                                </div>
                                <Input value={name} onChange={(e) => setName(e.target.value)}  />
                                
                            </div>
                            <div className="space-y-1">
                                <LabelWithTooltip labelText='Summary' tooltipText='A brief summary of the document content.'></LabelWithTooltip>
                                <Textarea value={summary} onChange={(e) => setSummary(e.target.value)} />

                                
                            </div>
                            <div className="space-y-1">
                                <LabelWithTooltip labelText='Department' tooltipText='The department which this document most belongs to.'></LabelWithTooltip>
                                <Input value={managingDepartment} onChange={(e) => setManagingDepartment(e.target.value)} />
                                
                                
                            </div>

                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>

                </TabsContent>

                <TabsContent value="tags">
                    <Card>
                        <CardHeader>
                            <CardTitle>Metadata Tags</CardTitle>
                            <CardDescription>
                                Select tags that describe this document. Save Changes when Done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <LabelWithTooltip labelText='Information Type' tooltipText='Information Type: Description.'></LabelWithTooltip>
                                <Combobox
                                    typeTags={informationTypeTags}
                                    inputMessage="Select an Information Type..."
                                    emptyMessage="No information types found."
                                />
                                
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>

                </TabsContent>

                <TabsContent value="questions">
                    <Card>
                        <CardHeader>
                            <CardTitle>Metadata Tags</CardTitle>
                            <CardDescription>
                                Enter a hypothetical question this document answers.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {/* <div>
                                {hypotheticalQuestions.map((question, index) => (
                                    <div key={index}>
                                        <Input value={question} onChange={(e) => handleQuestionChange(e, index)} placeholder="Question" />

                                        <CustomTooltip text='Hypothetical Question: Example'></CustomTooltip>
                                    </div>

                                ))}
                                <Button onClick={() => setHypotheticalQuestions([...hypotheticalQuestions, ''])}>Add Another Question</Button>
                            </div> */}
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>

                </TabsContent>
            </Tabs>
            {/* <div className="flex justify-end space-x-2 mt-4">
                <Button onClick={handleSaveChanges}>Save Changes</Button>
                <Button variant="outline" onClick={onClose}>Close</Button>
            </div> */}
        </div>
    );
};

export default OrgInfoEditor;


