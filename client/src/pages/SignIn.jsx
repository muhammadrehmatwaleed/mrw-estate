import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';
export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const handleChange = (e) => {
    setFormData ({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    dispatch(signInStart());
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false) {
      dispatch(signInFailure(data.message));
      return;
    }
    dispatch(signInSuccess(data));
    navigate('/');
  }   catch (error) {
    dispatch(signInFailure(error.message));
     
    }
  };



  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-blue-200'>
          <h1 className='text-4xl font-bold text-center text-blue-900 mb-2'>Sign In</h1>
          <p className='text-center text-blue-700 text-sm mb-8'>Create your account to get started</p>
          
          <form onSubmit={handleSubmit} className='space-y-4'>
            
            <div className='relative'>
              <input 
                type="email" 
                placeholder='Email' 
                className='w-full bg-blue-50 border border-blue-300 rounded-lg px-4 py-3 text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-200' 
                id='email' 
                onChange={handleChange}
              />
            </div>
            
            <div className='relative'>
              <input 
                type="password" 
                placeholder='Password' 
                className='w-full bg-blue-50 border border-blue-300 rounded-lg px-4 py-3 text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-200' 
                id='password' 
                onChange={handleChange}
              />
            </div>
            
            <button disabled={loading}
              type="submit" 
              className='w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-lg mt-6 hover:shadow-lg hover:shadow-blue-500/50 transition duration-200 transform hover:scale-105'
            >
              {loading ? 'Loading...' : 'Sign Up'}
            </button>
            <OAuth />
          </form>
          
          <div className='text-center mt-6'>
            <p className='text-blue-700 text-sm'>
             Dont have an account?{' '}
              <Link to="/sign-up">
                <span className='text-blue-600 hover:text-blue-700 font-semibold transition duration-200'>Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
        {error && <p className='text-red-500 text-center mt-4'>{error}</p>}
      </div>
    </div>
  )
}
