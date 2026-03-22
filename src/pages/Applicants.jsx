import Navbar from '../components/shared/Navbar'

const Applicants = () => {
  const applicants = [
    { name: 'Rahul Sharma', email: 'rahul@gmail.com', resume: 'resume.pdf', status: 'Pending' },
    { name: 'Priya Singh', email: 'priya@gmail.com', resume: 'resume.pdf', status: 'Accepted' },
    { name: 'Amit Kumar', email: 'amit@gmail.com', resume: 'resume.pdf', status: 'Rejected' },
    { name: 'Neha Gupta', email: 'neha@gmail.com', resume: 'resume.pdf', status: 'Pending' },
  ]

  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto px-4 py-10'>
        <h1 className='text-2xl font-bold text-gray-800 mb-6'>Applicants</h1>
        <div className='bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='text-left px-6 py-3 text-gray-600'>Name</th>
                <th className='text-left px-6 py-3 text-gray-600'>Email</th>
                <th className='text-left px-6 py-3 text-gray-600'>Resume</th>
                <th className='text-left px-6 py-3 text-gray-600'>Status</th>
                <th className='text-left px-6 py-3 text-gray-600'>Action</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant, i) => (
                <tr key={i} className='border-t border-gray-100'>
                  <td className='px-6 py-4 text-gray-800'>{applicant.name}</td>
                  <td className='px-6 py-4 text-gray-500'>{applicant.email}</td>
                  <td className='px-6 py-4'>
                    <a href='#' className='text-purple-600 hover:underline'>{applicant.resume}</a>
                  </td>
                  <td className='px-6 py-4'>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      applicant.status === 'Accepted' ? 'bg-green-100 text-green-700' :
                      applicant.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {applicant.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 flex gap-2'>
                    <button className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm'>
                      Accept
                    </button>
                    <button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm'>
                      Reject
                    </button>
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