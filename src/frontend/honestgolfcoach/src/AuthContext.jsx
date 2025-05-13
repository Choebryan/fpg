// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  // const navigate = useNavigate();

  useEffect(() => {
    // Fetch current user on mount
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/user/current',
          {
            // ensures accessToken is sent with the request since the backend is going to extract the accessToken from the cookie
            //to validate it and if valid will return the user object
            withCredentials: true, // Send cookies
          },
        );
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async credential => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/user/google-success',
        //crendential is a the 2nd arg for post request and therefore is wrapped in an object {}
        //and is shorthand for {credential: credential} bc the backend expects a JSON object with a credential property
        //whose value is the credential parameter passed into the login function
        { credential }, //the google id token
        { withCredentials: true },
      );
      setUser(response.data);
      if (response.data.accountType === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/myLessons');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      //empty {} needed for 2nd arg bc post request expects 2nd arg to be request body and bc you dont want the
      //  config (or the withCredentials: true) to be the request body
      await axios.post(
        'http://localhost:8080/api/user/logout',
        {},
        { withCredentials: true },
      );
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Axios interceptor to handle token refresh
  //intercepts https requests
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            await axios.post(
              'http://localhost:8080/api/user/refresh',
              {},
              { withCredentials: true },
            );
            return axios(originalRequest); // Retry the original request
          } catch (refreshError) {
            console.error('Refresh token error:', refreshError);
            logout(); // If refresh fails, log out
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      },
    );

    return () => axios.interceptors.response.eject(interceptor);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
