import Navbar from '../components/shared/Navbar'

const JobDetail = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto px-4 py-10'>
        <div className='bg-white p-8 rounded-lg shadow-md border border-gray-100'>
          
          <div className='flex justify-between items-start'>
            <div>
              <h1 className='text-3xl font-bold text-gray-800'>Frontend Developer</h1>
              <p className='text-gray-500 mt-1'>Google · Bangalore · Full Time</p>
            </div>
            <button className='bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700'>
              Apply Now
            </button>
          </div>

          <div className='flex gap-3 mt-4'>
            <span className='bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm'>12 LPA</span>
            <span className='bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm'>Full Time</span>
            <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm'>5 Openings</span>
          </div>

          <hr className='my-6' />

          <div className='mb-6'>
            <h2 className='text-xl font-bold text-gray-800 mb-2'>Job Description</h2>
            <p className='text-gray-600 leading-relaxed'>
              We are looking for a skilled Frontend Developer to join our team. 
              You will be responsible for building and maintaining high-quality web applications.
            </p>
          </div>

          <div className='mb-6'>
            <h2 className='text-xl font-bold text-gray-800 mb-2'>Requirements</h2>
            <ul className='list-disc list-inside text-gray-600 space-y-1'>
              <li>2+ years of experience with React.js</li>
              <li>Strong knowledge of HTML, CSS, JavaScript</li>
              <li>Experience with REST APIs</li>
              <li>Good communication skills</li>
            </ul>
          </div>

          <div>
            <h2 className='text-xl font-bold text-gray-800 mb-2'>Job Details</h2>
            <div className='grid grid-cols-2 gap-4 text-gray-600'>
              <div><span className='font-medium'>Location:</span> Bangalore</div>
              <div><span className='font-medium'>Salary:</span> ₹12 LPA</div>
              <div><span className='font-medium'>Experience:</span> 2 Years</div>
              <div><span className='font-medium'>Job Type:</span> Full Time</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default JobDetail