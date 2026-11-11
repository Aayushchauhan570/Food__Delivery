import React from 'react';
import UserContext from '../utils/UserContext';

class UserClass extends React.Component {
    constructor(props){
        super(props);

        // creation of state variable
        this.state = {
            userInfo: {
                name: "",
                public_repos: 0,
            }
        }
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/aayushchauhan570');
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        console.log(json);
    }

    // componentDidUpdate(){

    // }

    render() {
        const {name, public_repos, avatar_url} = this.state.userInfo;

        return (
            <div className="user-container">
                <img src={avatar_url} />
                <div>
                    loggedInUser : 
                    <UserContext.Consumer>
                        {({loggedInUser}) => (<h1 className='text-3xl font-stretch-50% font-bold'>{loggedInUser}</h1>)}
                    </UserContext.Consumer></div>
                <h1>Name: {name}</h1>
                <h2>public_Repo: {public_repos}</h2>
                <h3>contact: aayushchauhan570</h3>
            </div>
        )
    }
}

export default UserClass;