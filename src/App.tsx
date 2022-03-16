import { Routes, Route } from "react-router-dom";
import { Layout, LazyRender } from "./components";
import { HomePage, Board } from "./pages";

function App() {
    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={
                        <LazyRender>
                            <HomePage />
                        </LazyRender>
                    }
                />

                <Route path="/board" element={<Layout />}>
                    <Route
                        index
                        element={
                            <LazyRender loadingMessage="Loading Board...">
                                <Board />
                            </LazyRender>
                        }
                    />
                    <Route
                        path="team"
                        element={
                            <div className="grid h-full place-items-center">
                                <h1>Teams</h1>
                            </div>
                        }
                    />
                    <Route
                        path="projects"
                        element={
                            <div className="grid h-full place-items-center">
                                <h1>Projects</h1>
                            </div>
                        }
                    />

                    <Route
                        path="*"
                        element={
                            <div className="grid h-full place-items-center">
                                <h1 className="mb-4 font-heading text-2xl text-gray-400">
                                    404
                                </h1>
                                <p className="text-center text-gray-600">
                                    Nothing to find here..
                                </p>
                            </div>
                        }
                    />
                </Route>
            </Routes>
        </main>
    );
}

export default App;
