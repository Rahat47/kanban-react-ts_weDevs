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

        removeCardFromList: (
            state,
            action: PayloadAction<{ listId: string; cardId: string }>
        ) => {
            const list = state.value.find(
                list => list.id === action.payload.listId
            );
            if (list) {
                list.cards = list.cards.filter(
                    card => card.id !== action.payload.cardId
                );
            }
        },

        editCardTitle: (
            state,
            action: PayloadAction<{
                listId: string;
                cardId: string;
                title: string;
            }>
        ) => {
            const list = state.value.find(
                list => list.id === action.payload.listId
            );
            if (list) {
                const card = list.cards.find(
                    card => card.id === action.payload.cardId
                );
                if (card) {
                    card.title = action.payload.title;
                }
            }
        },

        transferCardFromList: (
            state,
            action: PayloadAction<{
                listId: string;
                cardId: string;
                newListId: string;
            }>
        ) => {
            const { listId, newListId, cardId } = action.payload;

            if (listId === newListId) return;

            const list = state.value.find(list => list.id === listId);
            if (list) {
                const card = list.cards.find(card => card.id === cardId);
                if (card) {
                    list.cards = list.cards.filter(card => card.id !== cardId);
                    const newList = state.value.find(
                        list => list.id === newListId
                    );
                    if (newList) {
                        newList.cards.push(card);
                    }
                }
            }
        },
    },
});

export const {
    addList,
    removeList,
    renameList,
    createNewList,
    addCardToList,
    removeCardFromList,
    editCardTitle,
    transferCardFromList,
} = listSlice.actions;

export const selectLists = (state: RootState): List[] => state.lists.value;

export default listSlice.reducer;
