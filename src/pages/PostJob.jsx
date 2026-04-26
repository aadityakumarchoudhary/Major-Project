import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbar from '../components/shared/Navbar'
import { JOB_API_END_POINT, COMPANY_API_END_POINT } from '../utils/constant'
import { useEffect } from 'react'

const PostJob = () => {
  const navigate = useNavigate()
  const [companies, setCompanies] = useState([])
  const [input, setInput] = useState({
    title: '', description: '', requirements: '', salary: '',
    location: '', jobType: 'Full-time', experienceLevel: '', position: '', companyId: ''
  })

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get`, { withCredentials: true })
        if (res.data.success) setCompanies(res.data.companies)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCompanies()
  }, [])

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, { withCredentials: true })
      if (res.data.success) {
        toast.success('Job posted successfully!')
        navigate('/jobs')
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to post job!')
    }
  }

  return (
    <div>
      <Navbar />
      <div className='max-w-3xl mx-auto px-4 py-10'>
        <div className='bg-white p-8 rounded-lg shadow-md border border-gray-100'>
          <h1 className='text-2xl font-bold text-gray-800 mb-6'>Post a New Job</h1>

          <div className='mb-4'>
            <label className='block text-gray-600 mb-1'>Job Title</label>
            <input type='text' name='title' value={input.title} onChange={changeHandler}
              placeholder='e.g. Frontend Developer'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-600 mb-1'>Description</label>
            <textarea rows='4' name='description' value={input.description} onChange={changeHandler}
              placeholder='Job description...'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-600 mb-1'>Requirements (comma separated)</label>
            <textarea rows='3' name='requirements' value={input.requirements} onChange={changeHandler}
              placeholder='e.g. React, Node.js, 2 years experience'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
          </div>

          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block text-gray-600 mb-1'>Salary (LPA)</label>
              <input type='text' name='salary' value={input.salary} onChange={changeHandler}
                placeholder='e.g. 12'
                className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
            </div>
            <div>
              <label className='block text-gray-600 mb-1'>Location</label>
              <input type='text' name='location' value={input.location} onChange={changeHandler}
                placeholder='e.g. Bangalore'
                className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block text-gray-600 mb-1'>Job Type</label>
              <select name='jobType' value={input.jobType} onChange={changeHandler}
                className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500'>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
              </select>
            </div>
            <div>
              <label className='block text-gray-600 mb-1'>Number of Openings</label>
              <input type='number' name='position' value={input.position} onChange={changeHandler}
                placeholder='e.g. 5'
                className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
            </div>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-600 mb-1'>Experience Level (Years)</label>
            <input type='number' name='experienceLevel' value={input.experienceLevel} onChange={changeHandler}
              placeholder='e.g. 2'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
          </div>

          <div className='mb-6'>
            <label className='block text-gray-600 mb-1'>Company</label>
            <select name='companyId' value={input.companyId} onChange={changeHandler}
              className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500'>
              <option value=''>Select Company</option>
              {companies.map((c) => (
                <option key={c._id} value={c._id}>{c.name}</option>
              ))}
            </select>
          </div>

          <button onClick={submitHandler}
            className='w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700'>
            Post Job
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostJob