// Context setup
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Service, Jurisdiction, Member } from '@/lib/utils/types';

export interface ProductState {
    members: Member[];
}

export const initialState: ProductState = {
    members: [],
};

interface ProductContextType {
    state: ProductState;
    dispatch: React.Dispatch<any>;
}

// Define the reducer that handles actions
export function productReducer(state: ProductState, action: any): ProductState {
    switch (action.type) {
        case 'ADD_MEMBER':
            return { ...state, members: [...state.members, action.payload] };
        case 'REMOVE_MEMBER':
            return { ...state, members: state.members.filter(member => member.id !== action.payload) };
        case 'UPDATE_MEMBER':
            return {
                ...state,
                members: state.members.map(member =>
                    member.id === action.payload.id ? { ...member, ...action.payload.updates } : member)
            };
        case 'ADD_JURISDICTION':
            return {
                ...state,
                members: state.members.map(member =>
                    member.id === action.payload.memberId ? {
                        ...member,
                        jurisdictions: [...member.jurisdictions, action.payload.jurisdiction]
                    } : member
                )
            };
        case 'REMOVE_JURISDICTION':
            return {
                ...state,
                members: state.members.map(member =>
                    member.id === action.payload.memberId ? {
                        ...member,
                        jurisdictions: member.jurisdictions.filter(j => j.id !== action.payload.jurisdictionId)
                    } : member
                )
            };
        case 'UPDATE_JURISDICTION':
            return {
                ...state,
                members: state.members.map(member =>
                    member.id === action.payload.memberId ? {
                        ...member,
                        jurisdictions: member.jurisdictions.map(j =>
                            j.id === action.payload.jurisdictionId ? { ...j, ...action.payload.updates } : j
                        )
                    } : member
                )
            };
        case 'ADD_SERVICE':
            return {
                ...state,
                members: state.members.map(member =>
                    member.id === action.payload.memberId ? {
                        ...member,
                        services: [...member.services, action.payload.service]
                    } : member
                )
            };

        case 'REMOVE_SERVICE':
            return {
                ...state,
                members: state.members.map(member =>
                    member.id === action.payload.memberId ? {
                        ...member,
                        services: member.services.filter(service => service.id !== action.payload.serviceId)
                    } : member
                )
            };

        case 'UPDATE_SERVICE':
            return {
                ...state,
                members: state.members.map(member =>
                    member.id === action.payload.memberId ? {
                        ...member,
                        services: member.services.map(service =>
                            service.id === action.payload.serviceId ? { ...service, ...action.payload.updates } : service
                        )
                    } : member
                )
            };
        default:
            return state;
    }
};


// const ProductContext = createContext<ProductContextType>({ state: initialState, dispatch: () => null });
// Export the custom hook for using this context


export const ProductContext = createContext<ProductContextType>({ state: initialState, dispatch: () => null });



// interface ProductProviderProps {
//     children: ReactNode;
//     value: ProductContextType
//   }
// // Define and export the ProductProvider component
// export const ProductProvider: React.FC<ProductProviderProps> = ({ children, value }) => {
//   const [state, dispatch] = useReducer(productReducer, initialState);

//   return (
//     <ProductContext.Provider value={{ state, dispatch }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };


