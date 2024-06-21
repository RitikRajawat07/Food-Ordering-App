import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            count: 0,

            userInfo:{
                name:"dummy",
                location:"default",
            },
        };

        // console.log("children constructor");
    } 

    async componentDidMount(){
        // console.log("children componenet did mount");

        const data = await fetch("https://api.github.com/users/ritikrajawat07");
        const json = await data.json();

        this.setState({
            userInfo:json,
        });
    }

    componentDidUpdate(){
        // console.log("Component did update.");
    }

    componentWillUnmount(){
        // console.log("Component WILL unmount.");
    }

    render() { 

        // console.log("children render");

        // const {name,location}=this.props;
        const {count}=this.state;

        const {name,location,avatar_url} = this.state.userInfo;

        return(
            <div className="user-card">

                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: ritik@gmail.com</h4>

                <h5>Count: { count}</h5>

                <button onClick={() => {

                    this.setState({
                        count: this.state.count + 1,
                    }); 

                }}>Count Increase</button>

            </div>
        );
    }
}

export default UserClass;