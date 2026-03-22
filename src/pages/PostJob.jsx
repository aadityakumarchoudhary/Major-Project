import Navbar from '../components/shared/Navbar'

const PostJob = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-3xl mx-auto px-4 py-10'>
        <div className='bg-white p-8 rounded-lg shadow-md border border-gray-100'>
          <h1 className='text-2xl font-bold text-gray-800 mb-6'>Post a New Job</h1>

          <div className='mb-4'>
            <label className='block text-gray-600 mb-1'>Job Title</label>
            <input type='text' placeholder='e.g. Frontend Developer'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-600 mb-1'>Description</label>
            <textarea rows='4' placeholder='Job description...'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-600 mb-1'>Requirements</label>
            <textarea rows='3' placeholder='e.g. React, Node.js, 2 years experience'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
          </div>

          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block text-gray-600 mb-1'>Salary (LPA)</label>
              <input type='text' placeholder='e.g. 12'
                className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
            </div>
            <div>
              <label className='block text-gray-600 mb-1'>Location</label>
              <input type='text' placeholder='e.g. Bangalore'
                className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block text-gray-600 mb-1'>Job Type</label>
              <select className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500'>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
              </select>
            </div>
            <div>
              <label className='block text-gray-600 mb-1'>Number of Openings</label>
              <input type='number' placeholder='e.g. 5'
                className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
            </div>
          </div>

          <div className='mb-6'>
            <label className='block text-gray-600 mb-1'>Experience Level (Years)</label>
            <input type='number' placeholder='e.g. 2'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500' />
          </div>

          <button className='w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700'>
            Post Job
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostJob