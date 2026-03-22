import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import Profile from './pages/Profile'
import PostJob from './pages/PostJob'
import Applicants from './pages/Applicants'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/jobs', element: <Jobs /> },
  { path: '/jobs/:id', element: <JobDetail /> },
  { path: '/profile', element: <Profile /> },
  { path: '/admin/postjob', element: <PostJob /> },
  { path: '/admin/applicants', element: <Applicants /> },
])

function App() {
  return <RouterProvider router={router} />
}

export default App