import React, { useState } from 'react';
import useInputState from '../utills/Hook';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [value, onChangeHandler, reset] = useInputState('');
  const navigate = useNavigate();
  console.log({ value });

  const [userlAlert, setUserAlert] = useState('');
  const [passwordAlert, setPasswordAlert] = useState('');

  const loginCredentials = () => {
    setUserAlert('');
    setPasswordAlert('');
    const { username, password } = value;
    if (username !== 'admin') {
      setUserAlert('Please Enter Correct Username');
    }
    if (password !== 'Test1234') {
      setPasswordAlert(' please enter correct password');
    }

    reset('');

    if (password === 'Test1234' && username === 'admin') {
      setUserAlert('');
      setPasswordAlert('');
      navigate('/home');
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    loginCredentials();
  };

  return (
    <div className=' min-h-screen bg-blue-100 flex flex-col justify-center'>
      <div className=''>
        <div>
          <h1 className='p-2 text-center text-3xl'>Welcome to Login Page </h1>
          <p className='p-3 text-center text-xl'>
            Please enter your email and password
          </p>
        </div>
        <div className='max-w-md w-full mx-auto'>
          <div className='mt-10'>
            <form
              className='flex justify-center flex-col'
              onSubmit={handleSubmit}
            >
              <div className='mb-6'>
                <label
                  className='text-center block  text-xl font-medium text-gray-900 dark:text-gray-500'
                  htmlFor='username'
                >
                  Username
                </label>
                <input
                  type='text'
                  name='username'
                  className='block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  id='username'
                  value={value.username || ''}
                  onChange={onChangeHandler}
                ></input>
              </div>
              <div className='text-center block pb-3 text-xl font-medium text-gray-900 dark:text-gray-500'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  className='block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  id='password'
                  value={value.password || ''}
                  onChange={onChangeHandler}
                ></input>
              </div>

              <button
                type='submit'
                className='max-w-md block mt-5 p-4 w-full bg-gray-500 rounded-lg border hover:bg-blue-500 text-white font-bold py-2 px-4'
              >
                Submit
              </button>
            </form>

            <div className='text-red-600 text-center text-2xl p-2'>
              {userlAlert && <div>{userlAlert}</div>}
              {passwordAlert && <div>{passwordAlert}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
