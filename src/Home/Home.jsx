
import { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo)
    const { user } = authInfo;
    console.log("home e dhukse")
    console.log(user)
    return (
        <div>

            <Navbar />
            <Outlet />
            <h1>this is home</h1>

        </div>
    );
};

export default Home;