export interface List {
    id: string;
    title: string;
    cards: Card[];
}

export interface Card {
    id: string;
    title: string;
    completed: boolean;
    important: boolean;
}
