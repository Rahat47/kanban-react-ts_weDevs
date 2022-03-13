import { FC, useState } from "react";
import { useAppDispatch } from "../redux/hooks/hooks";
import { nanoid } from "nanoid";
import { addCardToList } from "../redux/features/listSlice";
import { Card } from "../models";

type Props = {
    listId: string;
};

const AddNewTask: FC<Props> = ({ listId }) => {
    const dispatch = useAppDispatch();
    const [taskName, setTaskName] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
        setTaskName("");

        const data: Card = {
            id: nanoid(),
            completed: false,
            title: taskName.trim(),
        };

        dispatch(addCardToList({ id: listId, card: data }));
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div className=" mt-1 rounded-md shadow-sm">
                <input
                    type="text"
                    name="new-task"
                    id="new-task"
                    className="block w-full rounded-md border-gray-300  pr-12 focus:border-primary-black focus:ring-primary-black sm:text-sm"
                    placeholder="Add a task..."
                    value={taskName}
                    onChange={e => setTaskName(e.target.value)}
                />
            </div>
        </form>
    );
};

export default AddNewTask;
