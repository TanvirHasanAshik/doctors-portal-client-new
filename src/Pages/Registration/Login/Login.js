import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.config.init';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);

    }
    return (
        <section className="flex justify-center">
            <div className='shadow-lg p-9'>
                <h2 className='text-4xl text-center'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='mt-9'>
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input required name="email" type="text" placeholder="Email address" className="input input-bordered input-info w-80" />
                    </div>
                    <div className="mt-2.5">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input required name='password' type="password" placeholder="Password" className="input input-bordered input-info w-80" />
                        <p className='text-secondary'>Forget Password?</p>
                    </div>
                    {error ? <p className='text-red-500'>{error.message}</p> : googleError && <p className='text-red-500'>{googleError.message}</p>}
                    <input type="submit" value="Login" className=" btn w-80 mt-8" />
                    <p className='text-center '>New to doctors portal?
                        <Link className="text-secondary" to='/signUp'>Create account</Link>
                    </p>
                </form>
                <div className="divider">OR</div>
                <GoogleSignIn signInWithGoogle={signInWithGoogle}></GoogleSignIn>
            </div>
        </section>
    );
};

export default Login;