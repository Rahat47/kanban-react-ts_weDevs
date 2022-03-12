import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { List } from "../../models";
import { RootState } from "../store";

interface ListState {
    value: List[];
}

const initialState: ListState = {
    value: [],
};

export const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        addList: (state, action: PayloadAction<List>) => {
            state.value.push(action.payload);
        },

        removeList: (state, action: PayloadAction<number>) => {
            state.value = state.value.filter(
                list => list.id !== action.payload
            );
        },

        renameList: (
            state,
            action: PayloadAction<{ id: number; title: string }>
        ) => {
            const list = state.value.find(
                list => list.id === action.payload.id
            );
            if (list) {
                list.title = action.payload.title;
            }
        },
    },
});

export const { addList, removeList, renameList } = listSlice.actions;

export const selectLists = (state: RootState): List[] => state.lists.value;

export default listSlice.reducer;
