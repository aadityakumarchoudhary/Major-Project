import Navbar from '../components/shared/Navbar'

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto px-4 py-10'>

        {/* Profile Card */}
        <div className='bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-6'>
          <div className='flex items-center gap-6'>
            <div className='w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-3xl font-bold text-purple-600'>
              A
            </div>
            <div>
              <h1 className='text-2xl font-bold text-gray-800'>Aadit Kumar</h1>
              <p className='text-gray-500'>Frontend Developer enthusiast</p>
            </div>
            <button className='ml-auto border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50'>
              Edit Profile
            </button>
          </div>
        </div>

        {/* Skills */}
        <div className='bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-6'>
          <h2 className='text-xl font-bold text-gray-800 mb-4'>Skills</h2>
          <div className='flex gap-2 flex-wrap'>
            {['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind'].map((skill) => (
              <span key={skill} className='bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm'>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Resume */}
        <div className='bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-6'>
          <h2 className='text-xl font-bold text-gray-800 mb-4'>Resume</h2>
          <div className='flex items-center justify-between'>
            <p className='text-gray-600'>resume.pdf</p>
            <button className='bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700'>
              Upload Resume
            </button>
          </div>
        </div>

        {/* Applied Jobs */}
        <div className='bg-white p-8 rounded-lg shadow-md border border-gray-100'>
          <h2 className='text-xl font-bold text-gray-800 mb-4'>Applied Jobs</h2>
          <div className='space-y-4'>
            {[
              { title: 'Frontend Developer', company: 'Google', status: 'Pending' },
              { title: 'React Developer', company: 'Zomato', status: 'Accepted' },
              { title: 'UI Designer', company: 'Microsoft', status: 'Rejected' },
            ].map((job, i) => (
              <div key={i} className='flex justify-between items-center border border-gray-100 p-4 rounded-lg'>
                <div>
                  <p className='font-medium text-gray-800'>{job.title}</p>
                  <p className='text-gray-500 text-sm'>{job.company}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  job.status === 'Accepted' ? 'bg-green-100 text-green-700' :
                  job.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {job.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile