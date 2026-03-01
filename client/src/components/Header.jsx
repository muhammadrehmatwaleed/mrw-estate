import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-blue-800 shadow-lg backdrop-blur-sm">
      <div className='flex justify-between items-center max-w-6xl mx-auto px-4 py-4'>
        <Link to="/" className='hover:opacity-80 transition-opacity'>
          <h1 className='font-bold sm:text-2xl text-lg flex flex-wrap gap-1'>
            <span className='bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent'>MRW</span>
            <span className='text-white'>Living</span>
          </h1>
        </Link>
        <form className='bg-white/10 backdrop-blur-md rounded-full flex items-center px-4 py-2.5 border border-white/20 hover:border-white/40 transition-colors'>
          <input 
            type="text" 
            placeholder='Search...' 
            className='bg-transparent focus:outline-none w-24 sm:w-64 text-white placeholder-gray-300 text-sm' 
          />
          <FaSearch className='text-gray-300 ml-3' />
        </form>
        <ul className='flex gap-6 sm:gap-8'>
          <li><Link to="/" className='text-white text-sm font-medium hover:text-yellow-400 transition-colors duration-300'>Home</Link></li>
          <li><Link to="/about" className='text-white text-sm font-medium hover:text-yellow-400 transition-colors duration-300'>About</Link></li>
          <li><Link to="/sign-in" className='text-white text-sm font-medium hover:text-yellow-400 transition-colors duration-300'>Sign in</Link></li>
        </ul>
      </div>
    </header>
  )
}
