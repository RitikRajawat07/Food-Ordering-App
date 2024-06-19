import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header"; // named export/import;
import Body from "./components/Body";      // default export/import;
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestrauntMenu";
import RestaurantMenu from "./components/RestrauntMenu";

const AppLayout=() => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
        ],
        errorElement:<Error/>,
    },
]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={appRouter} />);