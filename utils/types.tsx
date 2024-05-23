export type BaseFile = {
    id: string;
    name: string;
    type: string; // e.g., "PDF", "Text File"
    size: string; // e.g., "1.2 MB"
    lastModified: string; // e.g., "2023-01-01"
};

// Extended IndustryFile type definition
export type IndustryFile = BaseFile & {
    rawText: string;
    summary: string;
    textVectorEmbedding: number[]; // Assuming an array of numbers for simplicity
    hypotheticalQuestions: {
        commonQuestions: string[];
        humanPopulated: boolean;
        aiSuggested: boolean;
    };
    aboutTheSource: string[];
    categoryTags: string[];
};
export type CompanyFile = BaseFile & {

    rawText: string;
    categoryTags: string[]; // Example values: "Mission", "Github", etc.
    summary: string;
    hypotheticalQuestions: {
        commonQuestions: string[];
        humanPopulated: boolean;
        aiSuggested: boolean;
    };
    managingDepartment: string; // Department responsible for the file
};

export type ProductOffering = {
    name: string;
    price: number;
    pricingMethod: string;
    retainer: boolean;
};
export type AuthorizedJurisdiction = {
    jurisdiction: string;
    jurisdictionType: 'Federal' | 'State' | 'Special';
}

// Define the ProductFile type for products and services database
export type ProductFile = BaseFile & {
    fullName: string; // Name/Title of the legal professional
    contactInformation: {
        email: string;
        discord: string;
        website?: string;
        profilePictureUrl?: string;
    };
    authorizedJurisdictions: AuthorizedJurisdiction[];
    description: string;
    servicesOffered: ProductOffering[];
}
export interface Service {
    id: number;
    name: string;
    price: number;
    pricingMethod: string;
    retainer: boolean;
  }
export interface Jurisdiction {
    id: number;
    name: string;
    type: string;
  }
export interface Member {
    id: string;
    fullName: string;
    description: string;
    services: Service[];
    jurisdictions: Jurisdiction[];
  }