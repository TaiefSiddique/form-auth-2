import { } from "firebase/auth";

import { useContext, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { AuthContext } from './../providers/AuthProvider';

const Signup = () => {
    const { createuser } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowpassword] = useState(false);
    const handleSignup = e => {
        setError('');
        setSuccess('');
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        createuser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
        // create user in firebase

    }
    return (
        <div>
            <h1 className='text-4xl font-semibold mx-auto w-max m-8'>New to this website!!</h1>
            <form onSubmit={handleSignup} className=''>
                <div className='flex flex-col w-3/4 mx-auto h-screen m-8  '>
                    <input type="text" name="name" id="" className="p-4 mb-4 rounded-sm" placeholder="Name" />
                    <input type="email" name="email" className='p-4 mb-4 rounded-sm' placeholder="Email" />

                    <input type={showPassword ? "text" : "password"} name="password" className='p-4 mb-4 rounded-sm' placeholder="Password" />
                    <button onClick={() => setShowpassword(!showPassword)}>{showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}</button>

                    <button type="submit" className="btn btn-secondary rounded-sm bg-sky-600 hover:bg-sky-800 border-gray-950 hover:border-black">SignUp</button>
                </div>
                {error && <h1 className="">{error}</h1>}
                {success && <h1>{success}</h1>}
            </form>

        </div>
    );
};

export default Signup;