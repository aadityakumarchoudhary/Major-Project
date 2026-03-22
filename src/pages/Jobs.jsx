import { useNavigate } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'

const Jobs = () => {
  const navigate = useNavigate()

  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'Google', location: 'Bangalore', salary: '12 LPA', type: 'Full Time' },
    { id: 2, title: 'Backend Developer', company: 'Amazon', location: 'Hyderabad', salary: '15 LPA', type: 'Full Time' },
    { id: 3, title: 'UI/UX Designer', company: 'Microsoft', location: 'Pune', salary: '10 LPA', type: 'Part Time' },
    { id: 4, title: 'Data Analyst', company: 'Flipkart', location: 'Delhi', salary: '8 LPA', type: 'Full Time' },
    { id: 5, title: 'DevOps Engineer', company: 'Infosys', location: 'Chennai', salary: '14 LPA', type: 'Full Time' },
    { id: 6, title: 'React Developer', company: 'Zomato', location: 'Mumbai', salary: '11 LPA', type: 'Full Time' },
  ]

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto px-4 py-10'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6'>Browse Jobs</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {jobs.map((job) => (
            <div key={job.id} className='bg-white p-6 rounded-lg shadow-md border border-gray-100'>
              <h2 className='text-xl font-bold text-gray-800'>{job.title}</h2>
              <p className='text-gray-500 mt-1'>{job.company} · {job.location}</p>
              <p className='text-gray-500 mt-1'>{job.salary} · {job.type}</p>
              <button
                onClick={() => navigate(`/jobs/${job.id}`)}
                className='mt-4 bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700'
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Jobs