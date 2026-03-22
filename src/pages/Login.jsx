import { Link } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center min-h-screen bg-gray-50'>
        <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
          <h1 className='text-2xl font-bold text-gray-800 mb-6 text-center'>Login</h1>
          
          <div className='mb-4'>
            <label className='block text-gray-600 mb-1'>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500'
            />
          </div>

          <div className='mb-6'>
            <label className='block text-gray-600 mb-1'>Password</label>
            <input
              type='password'
              placeholder='Enter your password'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500'
            />
          </div>

          <div className='mb-4 flex gap-4'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input type='radio' name='role' value='student' /> Student
            </label>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input type='radio' name='role' value='recruiter' /> Recruiter
            </label>
          </div>

          <button className='w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700'>
            Login
          </button>

          <p className='text-center text-gray-500 mt-4'>
            Don't have an account?{' '}
            <Link to='/signup' className='text-purple-600 hover:underline'>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login