import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData ({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    setLoading(true);
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false) {
      setLoading(false);
      setError(data.message);
      return;
    }
    setLoading(false);
    setError(null);
    navigate('/sign-in');
  }   catch (error) {
      setLoading(false);
      setError(error.message);
     
    }
  };



  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20'>
          <h1 className='text-4xl font-bold text-center text-white mb-2'>Sign Up</h1>
          <p className='text-center text-gray-300 text-sm mb-8'>Create your account to get started</p>
          
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='relative'>
              <input 
                type="text" 
                placeholder='Username' 
                className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition duration-200' 
                id='username' 
                onChange={handleChange}
              />
            </div>
            
            <div className='relative'>
              <input 
                type="email" 
                placeholder='Email' 
                className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition duration-200' 
                id='email' 
                onChange={handleChange}
              />
            </div>
            
            <div className='relative'>
              <input 
                type="password" 
                placeholder='Password' 
                className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition duration-200' 
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
          </form>
          
          <div className='text-center mt-6'>
            <p className='text-gray-300 text-sm'>
              Already have an account?{' '}
              <Link to="/sign-in">
                <span className='text-blue-400 hover:text-blue-300 font-semibold transition duration-200'>Login</span>
              </Link>
            </p>
          </div>
        </div>
        {error && <p className='text-red-500 text-center mt-4'>{error}</p>}
      </div>
    </div>
  )
}
