
import create from 'zustand'

import { Status, Order} from '.prisma/client';

type OrderState = {
    orders: Order[] | []
    addItem: (item: Order) => void
    updateFeilds: (id: string, status: Status, date:Date) => void
    deleteItem: (id: string) => void
}

type ClientSideOrderState = {
    order: Order | {}
    error: string | null
    toggleLoginDialog: boolean 
    toggleRegisterDialog: boolean
}

export const useClientSideStore = create<ClientSideOrderState>((set, get) => ({
    order: {},
    error: null,
    toggleLoginDialog: false,
    toggleRegisterDialog: false
}));

export const useStore = create<OrderState>((set, get) => ({
    orders: [],
    addItem: (item) => {
        const data = get().orders;
        const updatedData = [...data, item];
        set({ orders: updatedData });
    },
    updateFeilds: (id ,status, date) => {
        const data = get().orders;
        const updatedData = data.map(order => (
            order.id === id ? { ...order, status: status , createdAt: date}: order))
        set({orders: updatedData})
    },
    deleteItem: (id) => {
        const data = get().orders;
        const updatedData = data.filter((item:Order) => item.id !== id);
        set({orders: updatedData})
    }
    
}));