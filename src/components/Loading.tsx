import { FC } from "react";
import { Triangle } from "react-loader-spinner";

type Props = {
    message?: string;
};

const Loading: FC<Props> = ({ message }) => {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center">
            <Triangle color="#000" width={130} height={130} />
            <p className="mt-2 text-xl">{message ? message : "Loading..."}</p>
        </div>
    );
};

export default Loading;
