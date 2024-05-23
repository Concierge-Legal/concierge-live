// Context setup
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

import { Service, Jurisdiction, Member } from '@/utils/types';

// Define types for your state for better TypeScript support


interface ProductState {
  members: Member[];
}

const initialState: ProductState = {
  members: [],
};

interface ProductContextType {
  state: ProductState;
  dispatch: React.Dispatch<any>;
}

const ProductContext = createContext<ProductContextType>({ state: initialState, dispatch: () => null });

interface ProductProviderProps {
  children: ReactNode;  // This is the line that fixes your issue
}

const productReducer = (state: ProductState, action: any) => {
  switch (action.type) {
    case 'ADD_MEMBER':
      return { ...state, members: [...state.members, action.payload] };
    case 'REMOVE_MEMBER':
      return { ...state, members: state.members.filter(member => member.id !== action.payload) };
    case 'UPDATE_MEMBER':
      return {
        ...state,
        members: state.members.map(member => member.id === action.payload.id ? {...member, ...action.payload.updates} : member)
      };
    default:
      return state;
  }
};


export const useProduct = () => useContext(ProductContext);
