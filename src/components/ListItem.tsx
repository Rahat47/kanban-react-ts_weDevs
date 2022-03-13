import { FC, useState } from "react";
import { Card } from "../models";
import { PencilAltIcon, XIcon } from "@heroicons/react/solid";
import { Input } from ".";
import { useAppDispatch } from "../redux/hooks/hooks";
import { editCardTitle, removeCardFromList } from "../redux/features/listSlice";
import Modal from "./Modal";

type Props = {
    item: Card;
    listId: string;
};

const ListItem: FC<Props> = ({ item, listId }) => {
    const { title, id } = item;
    const dispatch = useAppDispatch();

    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [showModal, setShowModal] = useState(false);

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

    const removeHandler = () => {
        dispatch(removeCardFromList({ cardId: id, listId: listId }));
        setShowModal(false);
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
                    <div className="flex items-center space-x-2">
                        <PencilAltIcon
                            className="h-4 w-4"
                            onClick={() => setEditing(true)}
                        />

                        <XIcon
                            className="h-4 w-4"
                            onClick={() => setShowModal(true)}
                        />
                    </div>
                </>
            )}

            <Modal
                isDialogOpen={showModal}
                setIsDialogOpen={setShowModal}
                deleteAction={removeHandler}
                customMessage="Are you sure you want to remove this task? This action cannot be undone."
            />
        </div>
    );
};

export default ListItem;
