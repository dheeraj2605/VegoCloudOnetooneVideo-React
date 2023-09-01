import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home(){


    const [roomID,setRoomID]=useState();
    const navigate=useNavigate();
    const handleJoin=()=>{
        navigate(`/room/${roomID} `)

    }

    return(
        <div className='first' > 
           
           <input className='input' placeholder='Enter Room ID' type='text' value={roomID} onChange={(e)=>setRoomID(e.target.value)} />
            
             <button className='btn' onClick={handleJoin}>join</button>
    </div>
    )
}

export default Home;