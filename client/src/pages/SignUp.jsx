import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20'>
          <h1 className='text-4xl font-bold text-center text-white mb-2'>Sign Up</h1>
          <p className='text-center text-gray-300 text-sm mb-8'>Create your account to get started</p>
          
          <form className='space-y-4'>
            <div className='relative'>
              <input 
                type="text" 
                placeholder='Username' 
                className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition duration-200' 
                id='username' 
              />
            </div>
            
            <div className='relative'>
              <input 
                type="email" 
                placeholder='Email' 
                className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition duration-200' 
                id='email' 
              />
            </div>
            
            <div className='relative'>
              <input 
                type="password" 
                placeholder='Password' 
                className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition duration-200' 
                id='password' 
              />
            </div>
            
            <button 
              type="submit" 
              className='w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-lg mt-6 hover:shadow-lg hover:shadow-blue-500/50 transition duration-200 transform hover:scale-105'
            >
              Sign Up
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
      </div>
    </div>
  )
}
