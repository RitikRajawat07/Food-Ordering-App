import {LOGO_URL} from "../utils/constants"
import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Header=() => {

    const[btnName,setBtnName]=useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="flex justify-between h-32 shadow-lg bg-pink-100 sm:bg-yellow-100 lg:bg-green-50 ">
            <div className="logo-container">
                <img className="w-36 h-32"
                    src={LOGO_URL}
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4"> 

                    <li className="px-4">
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>

                    <li className="px-4 hover:text-slate-500">
                    <Link to="/">Home</Link>
                    </li>

                    <li className="px-4 hover:text-slate-500">
                        <Link to="/about">About Us</Link>
                    </li>

                    <li className="px-4 hover:text-slate-500">
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    <li className="px-4 hover:text-slate-500">
                        <Link to="/grocery">Grocery</Link>
                    </li>

                    <li className="px-4 hover:text-slate-500">
                        Cart
                    </li>

                    <button className="px-4 rounded-lg hover:text-slate-500 "
                        onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}
                    >
                        {btnName}
                    </button>

                    <li className="px-4 font-bold">{loggedInUser}</li>

                </ul>
            </div>
        </div>
    );
};

