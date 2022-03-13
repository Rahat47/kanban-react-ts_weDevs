import { FC, useState } from "react";
import { List } from "../models";
import { XIcon } from "@heroicons/react/solid";
import { AiOutlineDrag } from "react-icons/ai";
import Modal from "./Modal";

type Props = {
    list: List;
};

const ListCard: FC<Props> = ({ list }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            <div className="rounded-md border border-gray-200 bg-white px-4 py-5 shadow-lg transition hover:shadow-xl ">
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
