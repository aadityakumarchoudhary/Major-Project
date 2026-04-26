import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbar from '../components/shared/Navbar'
import { COMPANY_API_END_POINT } from '../utils/constant'

const RegisterCompany = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({ companyName: '', description: '', website: '', location: '' })

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${COMPANY_API_END_POINT}/register`, input, { withCredentials: true })
      if (res.data.success) {
        toast.success('Company registered!')
        navigate('/admin/postjob')
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to register company!')
    }
  }

  return (
    <div>
      <Navbar />
      <div className='max-w-2xl mx-auto px-4 py-10'>
        <div className='bg-white p-8 rounded-lg shadow-md border border-gray-100'>
          <h1 className='text-2xl font-bold text-gray-800 mb-2'>Register Your Company</h1>
          <p className='text-gray-500 mb-6'>Register your company before posting jobs.</p>

          <div className='mb-4'>
            <label className='block text-gray-600 mb-1'>Company Name</label>
            <input type='text' name='companyName' value={input.name} onChange={changeHandler}
              placeholder='e.g. Google'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-600 mb-1'>Description</label>
            <textarea rows='3' name='description' value={input.description} onChange={changeHandler}
              placeholder='About your company...'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-600 mb-1'>Website</label>
            <input type='text' name='website' value={input.website} onChange={changeHandler}
              placeholder='e.g. https://google.com'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
          </div>

          <div className='mb-6'>
            <label className='block text-gray-600 mb-1'>Location</label>
            <input type='text' name='location' value={input.location} onChange={changeHandler}
              placeholder='e.g. Bangalore'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
          </div>

          <div className='flex gap-4'>
            <button onClick={() => navigate(-1)}
              className='flex-1 border border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-50'>
              Cancel
            </button>
            <button onClick={submitHandler}
              className='flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700'>
              Register Company
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterCompany