import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage"));
const Board = lazy(() => import("./Board"));

export { HomePage, Board };
