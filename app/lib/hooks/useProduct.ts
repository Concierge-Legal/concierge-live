// Context setup
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Service, Jurisdiction, Member } from '@/utils/types';

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
            member.id === action.payload.id ? {...member, ...action.payload.updates} : member)
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


