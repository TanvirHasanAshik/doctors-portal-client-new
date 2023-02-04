import React from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.config.init';
const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <section className="flex justify-center">
            <div className='shadow-lg p-9'>
                <h2 className='text-4xl text-center'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className='mt-9'>
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" placeholder="Email address" className="input input-bordered input-info w-80" />
                    </div>
                    <div className='mt-2.5'>
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email address" className="input input-bordered input-info w-80" />
                    </div>
                    <div className="mt-2.5">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered input-info w-80" />
                    </div>
                    <input type="submit" value="Login" className=" btn w-80 mt-8" />
                    <p className='text-center '>Already have an account?
                        <Link className="text-secondary" to='/login'>Please Login</Link>
                    </p>
                </form>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-80 mt-2.5'>Google Sign in</button>
            </div>
        </section>
    );
};

export default SignUp;