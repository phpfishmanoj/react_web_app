import { RouterProvider } from 'react-router-dom'
import router from './router'
import './App.css'


function App() {

  return (
    <>
      <div className='App'>
        Hello from React App
        <RouterProvider router={router} />
        Loaded
      </div>
    </>
  )
}

export default App
