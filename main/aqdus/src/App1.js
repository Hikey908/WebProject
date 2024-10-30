import './App1.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Meetings1 from './component1/Meetings1';
import VideoPage from './component1/VideoPage';


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Meetings1/>
    },
    {
      path:"/room/:id",
      element:<VideoPage/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
