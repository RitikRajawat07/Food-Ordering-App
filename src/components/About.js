import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);

        // console.log("parent constructor");
    }

    componentDidMount(){
        // console.log("parent componenet did mount");
    }

    render(){

        // console.log("parent render");

        return (
            <div>
                <h1 className="m-4 p-4 flex justify-center text-3xl font-semibold">About</h1>
                <h2 className="m-4 p-4 text-lg">This is a Web Series to learn React</h2>
                <UserClass name={"Ritik Rajawat (class)"} location={"Bandikui"}/>
            </div>
        );
    }
}


export default About;