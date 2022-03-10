import { FC } from "react";

const GradientContainer: FC = ({ children }) => {
    return (
        <div className="grid h-screen animate-bg_move animate-bg_move place-items-center content-center bg-gradient-to-tl from-cyan-600/30 via-teal-300/30 to-indigo-300/30 bg-[length:400%_400%] ">
            {children}
        </div>
    );
};

export default GradientContainer;
