import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    // Parse the token from the callback URL
    const token = Array.isArray(router.query.token) ? router.query.token[0] : router.query.token;

    

    // Verify the token and perform necessary authentication logic
    // You may want to make an API request to your backend for verification.

    // Once verified, you can set user authentication state or perform any other action.

    // Example: Set the token in local storage for future API requests
    if (token) {
      localStorage.setItem('authToken', token);
    }

    // Redirect to a different page or the home page
    router.push('/dashboard'); // Replace '/dashboard' with your desired route.
  });

  return <div>Verifying...</div>;
}
