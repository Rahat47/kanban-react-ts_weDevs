import { FC, Suspense } from "react";
import Loading from "./Loading";

interface Props {
    loadingMessage?: string;
}

const LazyRender: FC<Props> = ({ children, loadingMessage }) => {
    return (
        <Suspense
            fallback={
                <Loading message={loadingMessage ?? "Loading Greatness..."} />
            }
        >
            {children}
        </Suspense>
    );
};

export default LazyRender;
