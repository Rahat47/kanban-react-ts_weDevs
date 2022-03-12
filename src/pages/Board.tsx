import { CardContainer } from "../components";

const Board = () => {
    return (
        <div className="flex-1">
            <div className="py-6">
                <div className="px-4 sm:px-6 md:px-0">
                    <h1 className="font-heading text-3xl font-semibold text-primary-black">
                        Dashboard
                    </h1>
                </div>
                <div className="px-4 sm:px-6 md:px-0">
                    {/*Need to create the kanban board here */}
                    <CardContainer>
                        <h1>Card 1</h1>
                        <h1>Card 1</h1>
                        <h1>Card 1</h1>
                        <h1>Card 1</h1>
                        <h1>Card 1</h1>
                    </CardContainer>
                </div>
            </div>
        </div>
    );
};

export default Board;
