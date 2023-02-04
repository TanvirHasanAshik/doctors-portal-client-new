import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className="flex justify-center">
            <div className='shadow-lg p-9'>
                <h2 className='text-4xl text-center'>Login</h2>
                <form>
                    <div className='mt-9'>
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="text" placeholder="Email address" className="input input-bordered input-info w-80" />
                    </div>
                    <div className="mt-2.5">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered input-info w-80" />
                        <p className='text-secondary'>Forget Password?</p>
                    </div>
                    <input type="submit" value="Login" className=" btn w-80 mt-8" />
                    <p className='text-center '>New to doctors portal?
                        <Link className="text-secondary" to='/signUp'>Create account</Link>
                    </p>
                </form>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-80 mt-2.5'>Google Sign in</button>
            </div>
        </section>
    );
};

export default Login;