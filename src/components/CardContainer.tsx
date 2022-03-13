import { FC } from "react";

type Props = {};

const CardContainer: FC<Props> = ({ children }) => {
    return (
        <div className="grid grid-cols-1 gap-5 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {children}
        </div>
    );
};

export default CardContainer;
