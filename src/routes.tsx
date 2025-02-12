import { Routes, Route } from "react-router-dom";
import { Auth, Login } from "./pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/auth" element={<Auth />}>
                <Route path=":token" />
            </Route>
        </Routes>
    );
}

export default AppRoutes;