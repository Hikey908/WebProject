// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//     const [input, setInput] = useState("");
//     const navigate = useNavigate();

//     const submitHandler = () => {
//         navigate(`/room/${input}`);
//     }
//     return (
//         <div>
//             <div>
//                 <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter your name.....'/>
//                 <button onClick ={submitHandler} >Join</button>
//             </div>
//         </div>
//     )
// }

// export default HomePage
import React from 'react'
import Navbar from './components/Navbar/Navbar'

function Meetings() {
  return (
    <div>
      <Navbar></Navbar>
      this is the meetings page 
    </div>
  )
}

export default Meetings
