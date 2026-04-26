import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbar from '../components/shared/Navbar'
import { JOB_API_END_POINT, APPLICATION_API_END_POINT } from '../utils/constant'

const JobDetail = () => {
  const { id } = useParams()
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [applying, setApplying] = useState(false)

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${id}`, { withCredentials: true })
        if (res.data.success) setJob(res.data.job)
      } catch (error) {
        toast.error('Failed to load job details!')
      } finally {
        setLoading(false)
      }
    }
    fetchJob()
  }, [id])

  const applyHandler = async () => {
    try {
      setApplying(true)
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${id}`, { withCredentials: true })
      if (res.data.success) {
        toast.success('Applied successfully!')
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Already applied or error!')
    } finally {
      setApplying(false)
    }
  }

  if (loading) return <div className='text-center py-20 text-gray-500'>Loading...</div>
  if (!job) return <div className='text-center py-20 text-gray-500'>Job not found.</div>

  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto px-4 py-10'>
        <div className='bg-white p-8 rounded-lg shadow-md border border-gray-100'>
          <div className='flex justify-between items-start'>
            <div>
              <h1 className='text-3xl font-bold text-gray-800'>{job.title}</h1>
              <p className='text-gray-500 mt-1'>{job.company?.name} · {job.location}</p>
            </div>
            <button
              onClick={applyHandler}
              disabled={applying}
              className='bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50'
            >
              {applying ? 'Applying...' : 'Apply Now'}
            </button>
          </div>

          <div className='flex gap-3 mt-4'>
            <span className='bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm'>₹{job.salary} LPA</span>
            <span className='bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm'>{job.jobType}</span>
            <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm'>{job.position} Openings</span>
          </div>

          <hr className='my-6' />

          <div className='mb-6'>
            <h2 className='text-xl font-bold text-gray-800 mb-2'>Job Description</h2>
            <p className='text-gray-600 leading-relaxed'>{job.description}</p>
          </div>

          <div className='mb-6'>
            <h2 className='text-xl font-bold text-gray-800 mb-2'>Requirements</h2>
            <ul className='list-disc list-inside text-gray-600 space-y-1'>
              {Array.isArray(job.requirements)
                ? job.requirements.map((r, i) => <li key={i}>{r}</li>)
                : <li>{job.requirements}</li>
              }
            </ul>
          </div>

          <div>
            <h2 className='text-xl font-bold text-gray-800 mb-2'>Job Details</h2>
            <div className='grid grid-cols-2 gap-4 text-gray-600'>
              <div><span className='font-medium'>Location:</span> {job.location}</div>
              <div><span className='font-medium'>Salary:</span> ₹{job.salary} LPA</div>
              <div><span className='font-medium'>Experience:</span> {job.experienceLevel} Years</div>
              <div><span className='font-medium'>Job Type:</span> {job.jobType}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail