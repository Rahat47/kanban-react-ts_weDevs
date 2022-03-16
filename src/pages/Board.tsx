import { CardContainer, EmptyCard, ListCard } from "../components";
import { selectLists } from "../redux/features/listSlice";
import { useAppSelector } from "../redux/hooks/hooks";

const Board = () => {
    const lists = useAppSelector(state => selectLists(state));

    return (
        <div className="flex-1">
            <div className="py-6">
                <div className="px-4 sm:px-6 md:px-0">
                    <h1 className="font-heading text-3xl font-semibold text-primary-black">
                        Dashboard
                    </h1>
                </div>
                <div className="px-4 sm:px-6 md:px-0">
                    <CardContainer>
                        {lists.length ? (
                            lists.map(list => (
                                <ListCard list={list} key={list.id} />
                            ))
                        ) : (
                            <EmptyCard />
                        )}

                        {lists.length > 0 && <EmptyCard />}
                    </CardContainer>
                </div>
            </div>
        </div>
    );
};

export default Board;
