// Assuming OrgInformationFile is exported from types.ts or a similar file
import { File, OrgInformationFile } from './columns';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textArea';
import CustomTooltip from "@/components/ui/customTooltip";

import { TabsList, Tabs, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion } from '@/components/ui/accordion';
import { Combobox } from '@/components/ui/combobox';


interface OrgInfoEditorProps {
    document: OrgInformationFile;
    onSave: (updatedDoc: OrgInformationFile) => void;
}

const informationTypeTags = [
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
        setName(document.name);
        setRawText(document.rawText);
        setSummary(document.summary);
        setManagingDepartment(document.managingDepartment);
        setHypotheticalQuestions(document.hypotheticalQuestions.commonQuestions);
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

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <Tabs defaultValue="about" className="w-full">
                <TabsList>
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="tags">Tags</TabsTrigger>
                    <TabsTrigger value="management">Department</TabsTrigger>
                    <TabsTrigger value="questions">Questions</TabsTrigger>
                </TabsList>
                <TabsContent value="about">
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
                    <CustomTooltip text='Edit the Name of the Document'></CustomTooltip>
                </TabsContent>
                <TabsContent value="summary">

                    <Textarea value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Summary" />

                    <CustomTooltip text='Provide a brief summary of the document'></CustomTooltip>
                </TabsContent>
                <TabsContent value="tags">
                    <Combobox
                        frameworks={informationTypeTags}
                        inputMessage="Select an Information Type..."
                        emptyMessage="No information types found."
                    />
                </TabsContent>

                <TabsContent value="management">

                    <Input value={managingDepartment} onChange={(e) => setManagingDepartment(e.target.value)} placeholder="Managing Department" />

                    <CustomTooltip text='Add the deparment managing this document'></CustomTooltip>
                </TabsContent>
                <TabsContent value="questions">
                    <div>
                        {hypotheticalQuestions.map((question, index) => (
                            <div key={index}>
                                <Input value={question} onChange={(e) => handleQuestionChange(e, index)} placeholder="Question" />

                                <CustomTooltip text='Enter a hypothetical question this document answers'></CustomTooltip>
                            </div>

                        ))}
                        <Button onClick={() => setHypotheticalQuestions([...hypotheticalQuestions, ''])}>Add Another Question</Button>
                    </div>
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


