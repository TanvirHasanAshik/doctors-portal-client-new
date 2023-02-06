import React from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.config.init';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile] = useUpdateProfile(auth);


    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(email, password)
            .then(res => {
                if (res.user) {
                    updateProfile({ displayName: name });
                }
            })
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
                        <input required type="text" name="name" placeholder="Full Name" className="input input-bordered input-info w-80" />
                    </div>
                    <div className='mt-2.5'>
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input required type="email" name="email" placeholder="Email address" className="input input-bordered input-info w-80" />
                    </div>
                    <div className="mt-2.5">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input required type="password" name='password' placeholder="Password" className="input input-bordered input-info w-80" />
                    </div>
                    <input type="submit" value="Sign Up" className=" btn w-80 mt-8" />
                    <p className='text-center '>Already have an account?
                        <Link className="text-secondary" to='/login'>Please Login</Link>
                    </p>
                    {
                        error ?
                            <p className='text-red-500 font-semibold'>{error.message}</p>
                            :
                            <p className='text-red-500 font-semibold'>{googleError?.message}</p>
                    }
                </form>
                <div className="divider">OR</div>
                <GoogleSignIn signInWithGoogle={signInWithGoogle}></GoogleSignIn>
            </div>
        </section>
    );
};

export default SignUp;