// src/components/GoogleLoginButton.jsx
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const GoogleLoginButton = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSuccess = async (credentialResponse) => {
        try {
            await login(credentialResponse.credential);
        } catch (error) {
            navigate('/login', { state: { error: 'Login failed. Please try again.' } });
        }
    };

    const handleError = () => {
        console.error('Google Login Failed');
        navigate('/login', { state: { error: 'Google login failed. Please try again.' } });
    };

    return (
        <div>
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
                useOneTap
            />
        </div>
    );
};

export default GoogleLoginButton;