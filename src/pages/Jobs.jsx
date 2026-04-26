import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbar from '../components/shared/Navbar'
import { JOB_API_END_POINT } from '../utils/constant'

const Jobs = () => {
  const navigate = useNavigate()
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get`, { withCredentials: true })
        if (res.data.success) {
          setJobs(res.data.jobs)
        }
      } catch (error) {
        toast.error('Failed to load jobs!')
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [])

  const filtered = jobs.filter(job =>
    job.title?.toLowerCase().includes(search.toLowerCase()) ||
    job.location?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto px-4 py-10'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>Browse Jobs</h1>
        <p className='text-gray-500 mb-6'>{jobs.length} jobs available</p>

        <input
          type='text'
          placeholder='Search by title or location...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full md:w-96 border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500 mb-8'
        />

        {loading ? (
          <div className='text-center py-20 text-gray-500'>Loading jobs...</div>
        ) : filtered.length === 0 ? (
          <div className='text-center py-20 text-gray-500'>No jobs found.</div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {filtered.map((job) => (
              <div key={job._id} className='bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition'>
                <h2 className='text-xl font-bold text-gray-800'>{job.title}</h2>
                <p className='text-gray-500 mt-1'>{job.company?.name} · {job.location}</p>
                <p className='text-gray-500 mt-1'>₹{job.salary} LPA · {job.jobType}</p>
                <div className='flex gap-2 mt-3'>
                  <span className='bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs'>{job.jobType}</span>
                  <span className='bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs'>{job.experienceLevel} yrs exp</span>
                </div>
                <button
                  onClick={() => navigate(`/jobs/${job._id}`)}
                  className='mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700'
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Jobs