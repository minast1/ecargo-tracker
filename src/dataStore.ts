//import { FormEvent } from 'react'
import create from 'zustand'
//import createContext from 'zustand/context'
import { Status, Tracker } from '.prisma/client';


type TrackerState = {
    trackerData: Tracker[] | []
    updateFeilds: (id: number, status: Status, date: Date, message: string | null) => void
    deleteItem: (id: number) => void
}

type QueryResultState = {
    trackerResult: Pick<Tracker, "tracking_number" | "courier"| "date" | "message" | "status"> | null 
}

export type ClientState = {
    trackerData: Pick<Tracker, "tracking_number" | "courier"| "message"> | null
}

export const trackerStore = create<TrackerState>((set, get) => ({
     trackerData: [],
    updateFeilds: (id ,status, date, message) => {
        const data = get().trackerData;
        const updatedData = data.map(trackObject => (
            trackObject.id === id ? { ...trackObject, status: status, date: date, message: message as string }: trackObject))
        set({trackerData: updatedData})
    },
    deleteItem: (id) => {
        const data = get().trackerData;
        const updatedData = data.filter(item => item.id !== id);
        set({trackerData: updatedData})
    }
    
}));

export const cleintTrackerStore =  create<ClientState>((_set, _get) => ({
     trackerData:null 
}));

export const trackingQueryResultStore = create<QueryResultState>((_set, _get) => ({
     trackerResult: null
}))