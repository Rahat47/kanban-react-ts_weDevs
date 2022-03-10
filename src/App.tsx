import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "./components";

const HomePage = lazy(() => import("./pages/HomePage"));
const BoardPage = lazy(() => import("./pages/BoardPage"));

function App() {
    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense
                            fallback={
                                <Loading message="Loading Greatness..." />
                            }
                        >
                            <HomePage />
                        </Suspense>
                    }
                />

                <Route
                    path="/board"
                    element={
                        <Suspense
                            fallback={<Loading message="Loading Board..." />}
                        >
                            <BoardPage />
                        </Suspense>
                    }
                />
            </Routes>
        </main>
    );
}

export default App;
