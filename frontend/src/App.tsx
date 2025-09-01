import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { LanguageProvider } from "./contexts/LanguageContext";
import { arabicRoutes, englishRoutes } from "./routes/routes";
import { useAppDispatch } from "./hooks/hook";
import { useGetMeQuery } from "./redux/Features/User/userApi";
import { setUser, logout } from "./redux/Features/Auth/authSlice";
import { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";

const router = createBrowserRouter([...englishRoutes, ...arabicRoutes]);

export const App = () => {
    const dispatch = useAppDispatch();

    const { data: apiUser, isError } = useGetMeQuery({});

    useEffect(() => {
        if (apiUser) dispatch(setUser(apiUser.data));
        if (isError) dispatch(logout());
    }, [apiUser, isError, dispatch]);

    return (
        <PersistGate loading={null} persistor={persistor}>
            <LanguageProvider>
                <RouterProvider router={router} />
                <Toaster />
            </LanguageProvider>
        </PersistGate>
    );
};
