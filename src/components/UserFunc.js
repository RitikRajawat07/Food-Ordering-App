import {useState} from "react";

const UserFunc = (props) => {

    const[count,SetCount] = useState(0);
    const[count2,SetCount2] = useState(1);

    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>Name: {props.name}</h2>
            <h3>Location: Jaipur</h3>
            <h4>Contact: ritik@gmail.com</h4>
        </div>
    );
};

export default UserFunc;