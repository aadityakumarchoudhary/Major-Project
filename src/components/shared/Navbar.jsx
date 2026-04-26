import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'
import { logout } from '../../redux/slices/authSlice'

const Navbar = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = async () => {
    try {
      await axios.get(`/api/v1/user/logout`, { withCredentials: true })
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(logout())
      toast.success('Logged out!')
      navigate('/login')
    }
  }

  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
        <Link to='/' className='text-2xl font-bold text-purple-600'>
          Job<span className='text-gray-800'>Portal</span>
        </Link>
        <div className='flex gap-6 items-center'>
          <Link to='/' className='text-gray-600 hover:text-purple-600'>Home</Link>
          <Link to='/jobs' className='text-gray-600 hover:text-purple-600'>Jobs</Link>
          {user?.role === 'recruiter' && (
            <>
              <Link to='/admin/registercompany' className='text-gray-600 hover:text-purple-600'>Register Company</Link>
              <Link to='/admin/postjob' className='text-gray-600 hover:text-purple-600'>Post Job</Link>
            </>
          )}
          {!user ? (
            <>
              <Link to='/login' className='border border-purple-600 text-purple-600 px-4 py-1 rounded hover:bg-purple-600 hover:text-white'>Login</Link>
              <Link to='/signup' className='bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700'>Sign Up</Link>
            </>
          ) : (
            <>
              <Link to='/profile' className='text-gray-600 hover:text-purple-600'>Profile</Link>
              <button onClick={logoutHandler} className='bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600'>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar