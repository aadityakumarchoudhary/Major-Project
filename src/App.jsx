import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import Profile from './pages/Profile'
import PostJob from './pages/PostJob'
import Applicants from './pages/Applicants'
import RegisterCompany from './pages/RegisterCompany'

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth)
  if (!user) return <Navigate to='/login' />
  return children
}

const RecruiterRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth)
  if (!user) return <Navigate to='/login' />
  if (user.role !== 'recruiter') return <Navigate to='/' />
  return children
}

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/jobs', element: <ProtectedRoute><Jobs /></ProtectedRoute> },
  { path: '/jobs/:id', element: <ProtectedRoute><JobDetail /></ProtectedRoute> },
  { path: '/profile', element: <ProtectedRoute><Profile /></ProtectedRoute> },
  { path: '/admin/postjob', element: <RecruiterRoute><PostJob /></RecruiterRoute> },
  { path: '/admin/applicants/:id', element: <RecruiterRoute><Applicants /></RecruiterRoute> },
  { path: '/admin/registercompany', element: <RecruiterRoute><RegisterCompany /></RecruiterRoute> },
])

function App() {
  return <RouterProvider router={router} />
}

export default App