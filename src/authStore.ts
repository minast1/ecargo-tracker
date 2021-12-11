//import { FormEvent } from 'react'
import create from 'zustand'
//import createContext from 'zustand/context'
import { AuthState } from './constants';




export const authStore = create<AuthState>((set, _get) => ({
    authView: 'sign_in',
    //password: '',
   // userId: '',
    setAuthView: (to) => set(_state => ({ authView: to })),
    loading: false,
    error: undefined,
    
}));