import { FC, useState } from "react";
import { List } from "../models";
import { XIcon, PencilAltIcon } from "@heroicons/react/solid";
import { AiOutlineDrag } from "react-icons/ai";
import Modal from "./Modal";
import AddNewTask from "./AddNewTask";

type Props = {
    list: List;
};

const ListCard: FC<Props> = ({ list }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { cards } = list;

    return (
        <>
            <div className="rounded-md border border-gray-200 bg-gray-100 px-4 py-5 shadow-lg transition ">
                <div className=" -mt-2 flex border-b border-gray-200">
                    <div className="ml-4 mt-2 w-full  pb-4">
                        <h3 className="font-heading text-lg font-semibold leading-6 text-primary-black">
                            {list.title}
                        </h3>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        {/* Icon Buttons */}

                        <div className="flex space-x-2">
                            <button className="focus:shadow-outline grid cursor-grab place-items-center rounded-full bg-gray-200 p-2 text-primary-black hover:bg-gray-300 focus:outline-none">
                                <AiOutlineDrag className="h-4 w-4" />
                            </button>
                            <button
                                onClick={() => setIsDialogOpen(true)}
                                className="focus:shadow-outline grid place-items-center rounded-full bg-gray-200 p-2  text-primary-black hover:bg-gray-300 focus:outline-none"
                            >
                                <XIcon className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <ul className="mt-4 space-y-3">
                    <AddNewTask listId={list.id} />

                    {cards.length > 0 &&
                        cards.map(card => (
                            <li
                                key={card.id}
                                className="flex cursor-pointer items-center justify-between overflow-hidden bg-white px-4 py-3 shadow transition duration-200 hover:shadow-md sm:rounded-md"
                            >
                                <p>{card.title}</p>

                                <PencilAltIcon className="h-5 w-5 text-primary-black/50" />
                            </li>
                        ))}
                </ul>
            </div>

            <Modal
                setIsDialogOpen={setIsDialogOpen}
                isDialogOpen={isDialogOpen}
                listId={list.id}
                listName={list.title}
            />
        </>
    );
};

export default ListCard;
