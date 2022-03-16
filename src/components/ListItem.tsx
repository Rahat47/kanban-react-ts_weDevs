import React, { FC, useState } from "react";
import { Card } from "../models";
import { PencilAltIcon, XIcon } from "@heroicons/react/solid";
import { Input } from ".";
import { useAppDispatch } from "../redux/hooks/hooks";
import { editCardTitle, removeCardFromList } from "../redux/features/listSlice";
import classNames from "classnames";
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

    const [dragging, setDragging] = useState(false);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        editTaskHandler();
    };

    const editTaskHandler = () => {
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

    const dragStartHandler = (e: React.DragEvent<HTMLLIElement>) => {
        e.dataTransfer.setData(
            "text/plain",
            JSON.stringify({
                type: "card",
                id: id,
                listId: listId,
                card: item,
            })
        );

        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.effectAllowed = "move";
        setDragging(true);
    };

    const dragEndHandler = () => {
        setDragging(false);
    };

    const dragOverHandler = (e: React.DragEvent<HTMLLIElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <li
            draggable={!editing}
            onDragStart={dragStartHandler}
            onDragEnd={dragEndHandler}
            onDragOver={dragOverHandler}
            className={classNames(
                "flex cursor-move items-center justify-between overflow-hidden bg-white px-4 py-3 shadow transition duration-200 hover:shadow-md sm:rounded-md ",
                {
                    "bg-gray-100 opacity-50": dragging,
                }
            )}
        >
            <div className="flex w-full items-center justify-between">
                {editing ? (
                    <form onSubmit={submitHandler}>
                        <Input
                            value={newTitle}
                            onChange={e => setNewTitle(e.target.value)}
                            label="Edit Task"
                            htmlFor={id}
                            onBlur={editTaskHandler}
                            className="w-full rounded-md border-gray-300 shadow-sm placeholder:font-body focus:border-primary-black focus:ring-primary-black sm:text-sm"
                        />
                    </form>
                ) : (
                    <>
                        <div className="min-w-0 flex-1">
                            <p className="text-md truncate font-medium text-gray-900">
                                {title}
                            </p>
                        </div>
                        <div className="flex cursor-pointer items-center space-x-2">
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
        </li>
    );
};

export default ListItem;
