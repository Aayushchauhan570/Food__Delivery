import User from './User';
import UserClass from './UserClass';

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page</p>

            <User />
            <UserClass name={'Aayush chauhan (Class)'}/>
        </div>
    )
}

export default About;