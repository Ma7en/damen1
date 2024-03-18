//
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

// import MessengerCustomerChat from "react-messenger-customer-chat";

import { DarkModeProvider } from "./contexts/DarkModeContext";

import { App_Url } from "./utils/constants";

import GlobalStyles from "./styles/GlobalStyles";
import "./styles/styles.scss";

import ProtectedRoute from "./ui/auth/ProtectedRoute";
import WpLayout from "./pages/wpadmin/WpLayout";

import WpHome from "./pages/wpadmin/WpHome";
import WpAccount from "./pages/wpadmin/WpAccount";

import Homepage from "./pages/global/Homepage";

import Admins from "./pages/global/Admins";
import Admin from "./pages/global/Admin";

import Login from "./pages/global/Login";
import Signup from "./pages/global/Signup";
import ResetPassword from "./pages/global/ResetPassword";
import Edit from "./pages/global/Edit";
import PageNotFound from "./pages/global/PageNotFound";
import AboutUs from "./pages/global/AboutUs";
import Services from "./pages/global/services/Services";
import Service from "./pages/global/services/Service";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // staleTime: 60 * 1000,
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <>
            <DarkModeProvider>
                <QueryClientProvider client={queryClient}>
                    <ReactQueryDevtools initialIsOpen={false} />

                    <GlobalStyles />

                    <BrowserRouter>
                        <Routes>
                            <Route
                                // path="app"
                                element={
                                    <ProtectedRoute>
                                        <WpLayout />
                                    </ProtectedRoute>
                                }
                            >
                                <Route
                                    index
                                    element={
                                        <Navigate
                                            replace
                                            to={`${App_Url}/home`}
                                        />
                                    }
                                />
                                <Route exact path="/app" component={App} />
                                <Route
                                    path={`${App_Url}/home`}
                                    element={<WpHome />}
                                />

                                <Route
                                    path={`${App_Url}/account`}
                                    element={<WpAccount />}
                                />
                            </Route>

                            <Route path="/home" element={<Homepage />} />
                            <Route path="/aboutus" element={<AboutUs />} />

                            <Route path={`/services`} element={<Services />} />
                            <Route
                                path={`/services/:serviceId`}
                                element={<Service />}
                            />

                            <Route path="/admins" element={<Admins />} />
                            <Route
                                path="/admins/:adminId"
                                element={<Admin />}
                            />

                            <Route path="login" element={<Login />} />
                            <Route path="signup" element={<Signup />} />
                            <Route
                                path="resetpassword"
                                element={<ResetPassword />}
                            />

                            <Route path="/edit" element={<Edit />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </BrowserRouter>

                    {/* 
                    page ID = رابط الصفحة 
                    app ID = بتعمل تطبيق من خلال 
                    = facebook for devloper 
                    = تحط رابط الطبيق 
                    */}
                    {/* <MessengerCustomerChat
                        pageId="100000686899395"
                        appId="165846530867056"
                    /> */}

                    <Toaster
                        position="top-center"
                        gutter={12}
                        containerStyle={{ margin: "8px" }}
                        toastOptions={{
                            success: {
                                duration: 5000,
                            },
                            error: {
                                duration: 5000,
                            },
                            style: {
                                fontSize: "16px",
                                maxWidth: "500px",
                                padding: "16px 24px",
                                // backgroundColor: "var(--color-grey-0)",
                                color: "var(--color-grey-700)",
                                //  backgroundColor: "var(--back-sec-1)",
                                backgroundColor: "var(--back-box)",
                                boxShadow: "var(--box-shadow)",
                                border: "var(--border)",
                                borderRadius: "var(--border-radius-md)",
                            },
                        }}
                    />
                </QueryClientProvider>
            </DarkModeProvider>
        </>
    );
}

export default App;
