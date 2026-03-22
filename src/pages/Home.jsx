import Navbar from '../components/shared/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto px-4 py-20 text-center'>
        <h1 className='text-5xl font-bold text-gray-800 mb-4'>
          Find Your <span className='text-purple-600'>Dream Job</span>
        </h1>
        <p className='text-gray-500 text-lg mb-8'>
          Thousands of jobs waiting for you. Start your search today.
        </p>
        <div className='flex justify-center gap-2'>
          <input
            type='text'
            placeholder='Search for jobs...'
            className='border border-gray-300 px-4 py-2 rounded-l-full w-80 outline-none focus:border-purple-500'
          />
          <button className='bg-purple-600 text-white px-6 py-2 rounded-r-full hover:bg-purple-700'>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home