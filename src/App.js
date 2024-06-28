import React,{lazy,Suspense,useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header"; // named export/import;
import Body from "./components/Body";      // default export/import;
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestrauntMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";

// making grocery a new bundle so to do this we import it like :-

const Grocery = lazy( () =>  import ("./components/Grocery"));

const AppLayout=() => {

    const[userName,setUserName] = useState();

    useEffect( () => {
        const data={
            name: "Ritik Rajawat",
        };

        setUserName(data.name);
    },[]);

    return (

        <Provider store={appStore}>

            <UserContext.Provider value={{loggedInUser : userName, setUserName}}>

            <div className="app">
                
                <Header/>
                <Outlet/>
            </div>

            </UserContext.Provider>

        </Provider>
         
        
        
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
                path:"/grocery",
                element:(
                    <Suspense fallback={<Shimmer/>} >
                        <Grocery/>
                    </Suspense>
                )
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