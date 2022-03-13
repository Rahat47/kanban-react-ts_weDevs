import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Card, List } from "../../models";
import { RootState } from "../store";
import { nanoid } from "nanoid";

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

        removeList: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter(
                list => list.id !== action.payload
            );
        },

        renameList: (
            state,
            action: PayloadAction<{ id: string; title: string }>
        ) => {
            const list = state.value.find(
                list => list.id === action.payload.id
            );
            if (list) {
                list.title = action.payload.title;
            }
        },

        createNewList: (state, action: PayloadAction<string>) => {
            state.value.push({
                id: nanoid(),
                title: action.payload,
                cards: [],
            });
        },

        addCardToList: (
            state,
            action: PayloadAction<{ id: string; card: Card }>
        ) => {
            const list = state.value.find(
                list => list.id === action.payload.id
            );
            if (list) {
                list.cards.push(action.payload.card);
            }
        },
    },
});

export const { addList, removeList, renameList, createNewList, addCardToList } =
    listSlice.actions;

export const selectLists = (state: RootState): List[] => state.lists.value;

export default listSlice.reducer;
