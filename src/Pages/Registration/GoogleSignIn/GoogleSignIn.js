import React from 'react';

const GoogleSignIn = ({ signInWithGoogle }) => {

    return (
        <button onClick={() => signInWithGoogle()} className='btn btn-outline w-80 mt-2.5'>Google Sign in</button>
    )
};

export default GoogleSignIn;