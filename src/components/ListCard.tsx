import { FC, useState } from "react";
import { List } from "../models";
import { XIcon } from "@heroicons/react/solid";
import { AddNewTask, ListItem, Modal, Input } from ".";
import { useAppDispatch } from "../redux/hooks/hooks";
import {
    removeList,
    renameList,
    transferCardFromList,
} from "../redux/features/listSlice";
import classNames from "classnames";

type Props = {
    list: List;
};

const ListCard: FC<Props> = ({ list }) => {
    const dispatch = useAppDispatch();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(list.title);
    const [dragging, setDragging] = useState(false);
    const { cards } = list;

    const handleDelete = () => {
        dispatch(removeList(list.id));
        setIsDialogOpen(false);
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        renameListHandler();
    };

    const renameListHandler = () => {
        setEditing(false);
        dispatch(
            renameList({
                id: list.id,
                title: newTitle,
            })
        );
    };

    const dropHandler = (e: React.DragEvent<HTMLUListElement>) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        if (data) {
            const { listId, id } = JSON.parse(data);
            dispatch(
                transferCardFromList({
                    cardId: id,
                    listId: listId,
                    newListId: list.id,
                })
            );
        }
        setDragging(false);
    };

    const dragOverHandler = (e: React.DragEvent<HTMLUListElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.types[0] === "text/plain") {
            e.dataTransfer.dropEffect = "move";
            setDragging(true);
        }
    };

    const dragLeaveHandler = (e: React.DragEvent<HTMLUListElement>) => {
        e.preventDefault();
        setDragging(false);
    };

    const dragEndHandler = (e: React.DragEvent<HTMLUListElement>) => {
        e.preventDefault();
        e.dataTransfer.clearData();
        setDragging(false);
    };

    return (
        <>
            <div
                className={classNames(
                    "rounded-md border border-gray-200 bg-gray-100 px-4 py-5 shadow-lg transition",
                    {
                        "bg-green-100": dragging,
                    }
                )}
            >
                <div className=" -mt-2 flex border-b border-gray-200">
                    <div
                        className="ml-4 mt-2 flex w-full items-center pb-4"
                        onDoubleClick={() => setEditing(true)}
                    >
                        {editing ? (
                            <form onSubmit={submitHandler}>
                                <Input
                                    value={newTitle}
                                    onChange={e => setNewTitle(e.target.value)}
                                    label="Edit List"
                                    htmlFor={list.id}
                                    className="w-full rounded-md border-gray-300 shadow-sm placeholder:font-body focus:border-primary-black focus:ring-primary-black sm:text-sm"
                                    onBlur={renameListHandler}
                                />
                            </form>
                        ) : (
                            <h3 className="font-heading text-lg font-semibold leading-6 text-primary-black">
                                {list.title}
                            </h3>
                        )}
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        {/* Icon Buttons */}

                        <div className="flex space-x-2">
                            <button
                                onClick={() => setIsDialogOpen(true)}
                                className="focus:shadow-outline grid place-items-center rounded-full bg-gray-200 p-2  text-primary-black hover:bg-gray-300 focus:outline-none"
                            >
                                <XIcon className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <ul
                    className="mt-4 min-h-full space-y-3 "
                    onDrop={dropHandler}
                    onDragOver={dragOverHandler}
                    onDragLeave={dragLeaveHandler}
                    onDragEnd={dragEndHandler}
                >
                    <AddNewTask listId={list.id} />

                    {cards.length > 0 &&
                        cards.map(card => (
                            <ListItem
                                key={card.id}
                                listId={list.id}
                                item={card}
                            />
                        ))}
                </ul>
            </div>

            <Modal
                setIsDialogOpen={setIsDialogOpen}
                isDialogOpen={isDialogOpen}
                deleteAction={handleDelete}
            />
        </>
    );
};

export default ListCard;
