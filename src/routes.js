// React
import { lazy, Suspense } from "react";

// React router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./common/layout/MainLayout";

// Pages
const Home = lazy(() => import("./pages/overview"));

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route
                        index
                        element={
                            <Suspense fallback={null}>
                                <Home />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
