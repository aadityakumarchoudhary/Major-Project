import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbar from '../components/shared/Navbar'
import { USER_API_END_POINT, APPLICATION_API_END_POINT } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/authSlice'
import { useEffect } from 'react'

const Profile = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [appliedJobs, setAppliedJobs] = useState([])
  const [input, setInput] = useState({
    fullname: user?.fullname || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
    bio: user?.profile?.bio || '',
    skills: user?.profile?.skills?.join(', ') || '',
  })

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, { withCredentials: true })
        if (res.data.success) setAppliedJobs(res.data.application || [])
      } catch (error) {
        console.log(error)
      }
    }
    fetchAppliedJobs()
  }, [])

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const saveHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_END_POINT}/profile/update`, input, { withCredentials: true })
      if (res.data.success) {
        dispatch(setUser(res.data.user))
        toast.success('Profile updated!')
        setEditing(false)
      }
    } catch (error) {
      toast.error('Failed to update profile!')
    }
  }

  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto px-4 py-10'>

        <div className='bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-6'>
          <div className='flex items-center gap-6'>
            <div className='w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-3xl font-bold text-purple-600'>
              {user?.fullname?.charAt(0).toUpperCase()}
            </div>
            <div className='flex-1'>
              {editing ? (
                <div className='space-y-2'>
                  <input name='fullname' value={input.fullname} onChange={changeHandler}
                    className='w-full border border-gray-300 px-3 py-1 rounded-lg outline-none focus:border-purple-500' />
                  <input name='phoneNumber' value={input.phoneNumber} onChange={changeHandler}
                    className='w-full border border-gray-300 px-3 py-1 rounded-lg outline-none focus:border-purple-500' />
                  <input name='bio' value={input.bio} onChange={changeHandler}
                    placeholder='Bio...'
                    className='w-full border border-gray-300 px-3 py-1 rounded-lg outline-none focus:border-purple-500' />
                  <input name='skills' value={input.skills} onChange={changeHandler}
                    placeholder='Skills (comma separated)'
                    className='w-full border border-gray-300 px-3 py-1 rounded-lg outline-none focus:border-purple-500' />
                </div>
              ) : (
                <>
                  <h1 className='text-2xl font-bold text-gray-800'>{user?.fullname}</h1>
                  <p className='text-gray-500'>{user?.profile?.bio || 'No bio added yet'}</p>
                  <p className='text-gray-400 text-sm'>{user?.email} · {user?.phoneNumber}</p>
                </>
              )}
            </div>
            <button
              onClick={editing ? saveHandler : () => setEditing(true)}
              className='ml-auto border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50'>
              {editing ? 'Save' : 'Edit Profile'}
            </button>
          </div>
        </div>

        <div className='bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-6'>
          <h2 className='text-xl font-bold text-gray-800 mb-4'>Skills</h2>
          <div className='flex gap-2 flex-wrap'>
            {user?.profile?.skills?.length > 0
              ? user.profile.skills.map((skill) => (
                <span key={skill} className='bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm'>{skill}</span>
              ))
              : <p className='text-gray-400'>No skills added yet</p>
            }
          </div>
        </div>

        <div className='bg-white p-8 rounded-lg shadow-md border border-gray-100'>
          <h2 className='text-xl font-bold text-gray-800 mb-4'>Applied Jobs</h2>
          <div className='space-y-4'>
            {appliedJobs.length === 0 ? (
              <p className='text-gray-400'>No jobs applied yet</p>
            ) : appliedJobs.map((app, i) => (
              <div key={i} className='flex justify-between items-center border border-gray-100 p-4 rounded-lg'>
                <div>
                  <p className='font-medium text-gray-800'>{app.job?.title}</p>
                  <p className='text-gray-500 text-sm'>{app.job?.company?.name}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  app.status === 'accepted' ? 'bg-green-100 text-green-700' :
                  app.status === 'rejected' ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>{app.status || 'pending'}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile