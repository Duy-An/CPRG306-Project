'use client';
import { useUserAuth } from '../utilities/authContext';

export default function Account() {
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleGitHubLogin() {
      await gitHubSignIn();
    };
  
    async function handleGitHubLogout() {
      await firebaseSignOut();
    };

    return (
        <>
            {user ? (
                <div>
                    <p>Welcome {user.displayName}</p>
                    <button onClick={handleGitHubLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <button onClick={handleGitHubLogin}>Login</button>
                </div>
            )}
        </>
    )
}