import { } from "firebase/auth";

import { useContext, useRef } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {
    const emailRef = useRef(null);
    const { logInUser } = useContext(AuthContext)
    const handleLogin = e => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        logInUser(email, password)
            .then(user => {
                console.log("login success", user)
            })
            .catch(error => {
                console.log("aha ken je hoilona", error)
            })



    }

    return (
        <div className="hero pt-6 bg-base-200">
            <div className="hero-content flex-col  ">
                <div className="text-center  lg:text-left">
                    <h1 className="text-2xl font-bold">Login now!</h1>

                </div>
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Email</span>
                                </label>
                                <input ref={emailRef} type="email" placeholder="email" className="input input-bordered w-64" name="email" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover" >Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                                {/* <button type="submit">submit</button> */}
                            </div>
                        </form>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;