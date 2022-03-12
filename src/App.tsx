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
                    <Route path="team" element={<h1>Teams</h1>} />
                    <Route path="projects" element={<h1>Projects</h1>} />

                    <Route path="*" element={<h1>404</h1>} />
                </Route>
            </Routes>
        </main>
    );
}

export default App;
