import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbar from '../components/shared/Navbar'
import { APPLICATION_API_END_POINT } from '../utils/constant'

const Applicants = () => {
  const { id } = useParams()
  const [applicants, setApplicants] = useState([])

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/${id}/applicants`, { withCredentials: true })
        if (res.data.success) setApplicants(res.data.job?.applications || [])
      } catch (error) {
        toast.error('Failed to load applicants!')
      }
    }
    fetchApplicants()
  }, [id])

  const updateStatus = async (applicationId, status) => {
    try {
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${applicationId}/update`,
        { status },
        { withCredentials: true }
      )
      if (res.data.success) {
        toast.success(`Status updated to ${status}!`)
        setApplicants(prev => prev.map(app =>
          app._id === applicationId ? { ...app, status } : app
        ))
      }
    } catch (error) {
      toast.error('Failed to update status!')
    }
  }

  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto px-4 py-10'>
        <h1 className='text-2xl font-bold text-gray-800 mb-6'>Applicants ({applicants.length})</h1>
        <div className='bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='text-left px-6 py-3 text-gray-600'>Name</th>
                <th className='text-left px-6 py-3 text-gray-600'>Email</th>
                <th className='text-left px-6 py-3 text-gray-600'>Status</th>
                <th className='text-left px-6 py-3 text-gray-600'>Action</th>
              </tr>
            </thead>
            <tbody>
              {applicants.length === 0 ? (
                <tr><td colSpan='4' className='text-center py-10 text-gray-500'>No applicants yet.</td></tr>
              ) : applicants.map((app) => (
                <tr key={app._id} className='border-t border-gray-100'>
                  <td className='px-6 py-4 text-gray-800'>{app.applicant?.fullname}</td>
                  <td className='px-6 py-4 text-gray-500'>{app.applicant?.email}</td>
                  <td className='px-6 py-4'>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      app.status === 'accepted' ? 'bg-green-100 text-green-700' :
                      app.status === 'rejected' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>{app.status || 'pending'}</span>
                  </td>
                  <td className='px-6 py-4 flex gap-2'>
                    <button onClick={() => updateStatus(app._id, 'accepted')}
                      className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm'>Accept</button>
                    <button onClick={() => updateStatus(app._id, 'rejected')}
                      className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm'>Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Applicants