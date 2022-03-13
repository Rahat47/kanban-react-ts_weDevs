import { FC, useState } from "react";
import { Card } from "../models";
import { PencilAltIcon } from "@heroicons/react/solid";
import { Input } from ".";
import { useAppDispatch } from "../redux/hooks/hooks";
import { editCardTitle } from "../redux/features/listSlice";

type Props = {
    item: Card;
    listId: string;
};

const ListItem: FC<Props> = ({ item, listId }) => {
    const { title, id } = item;
    const dispatch = useAppDispatch();

    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEditing(false);
        setNewTitle(newTitle.trim());
        dispatch(
            editCardTitle({
                cardId: id,
                listId: listId,
                title: newTitle,
            })
        );
    };

    return (
        <div className="flex w-full items-center justify-between">
            {editing ? (
                <form onSubmit={submitHandler}>
                    <Input
                        value={newTitle}
                        onChange={e => setNewTitle(e.target.value)}
                        label="Edit Task"
                        htmlFor={id}
                    />
                </form>
            ) : (
                <>
                    <div className="min-w-0 flex-1">
                        <p className="text-md truncate font-medium text-gray-900">
                            {title}
                        </p>
                    </div>
                    <div>
                        <PencilAltIcon
                            className="h-4 w-4"
                            onClick={() => setEditing(true)}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default ListItem;
