export interface List {
    id: number;
    title: string;
    cards: Card[];
}

export interface Card {
    id: number;
    title: string;
    completed: boolean;
    important: boolean;
}
