import { Link } from 'react-router-dom'

const Navbar = () => {
  const user = null // will come from Redux later

  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
        <Link to='/' className='text-2xl font-bold text-purple-600'>
          Job<span className='text-gray-800'>Portal</span>
        </Link>
        <div className='flex gap-6 items-center'>
          <Link to='/' className='text-gray-600 hover:text-purple-600'>Home</Link>
          <Link to='/jobs' className='text-gray-600 hover:text-purple-600'>Jobs</Link>
          {!user ? (
            <>
              <Link to='/login' className='border border-purple-600 text-purple-600 px-4 py-1 rounded hover:bg-purple-600 hover:text-white'>Login</Link>
              <Link to='/signup' className='bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700'>Sign Up</Link>
            </>
          ) : (
            <>
              <Link to='/profile' className='text-gray-600 hover:text-purple-600'>Profile</Link>
              <button className='bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600'>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar