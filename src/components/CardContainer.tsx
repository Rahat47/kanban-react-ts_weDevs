import { FC } from "react";

type Props = {};

const CardContainer: FC<Props> = ({ children }) => {
    return <div className="grid grid-cols-4 gap-5 py-8">{children}</div>;
};

export default CardContainer;
