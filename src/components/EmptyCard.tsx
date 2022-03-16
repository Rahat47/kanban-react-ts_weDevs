import { Transition } from "@headlessui/react";
import { useState } from "react";
import { RiMenuAddLine } from "react-icons/ri";
import { createNewList } from "../redux/features/listSlice";
import { useAppDispatch } from "../redux/hooks/hooks";
import Input from "./Input";

const EmptyCard = () => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState("");

    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createList();
    };

    const createList = () => {
        if (!title.trim()) {
            return;
        }

        dispatch(createNewList(title));
        setEditing(false);
        setTitle("");
    };

    const handleClick = () => {
        setEditing(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            <button
                type="button"
                className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-8 text-center hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-black focus:ring-offset-2"
                onClick={handleClick}
            >
                <RiMenuAddLine className="mx-auto my-2 h-10 w-10 text-gray-500" />
                <span className="mt-2 block font-body text-sm font-medium text-primary-black">
                    {editing ? "Enter list title" : "Create a new list"}
                </span>

                <Transition
                    show={editing}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 translate-y-4"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-4"
                >
                    <Input
                        label="List title"
                        htmlFor="list_title"
                        name="list_title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        onBlur={createList}
                    />
                </Transition>
            </button>
        </form>
    );
};

export default EmptyCard;
