// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar/Navbar';


// const Meetings1 = () => {
//     const [input, setInput] = useState("");
//     const navigate = useNavigate();

//     const submitHandler = () => {
//         navigate(`/room/${input}`);
//     }
//     return (
       
//         <div>
//             <div>
//                 <Navbar></Navbar>

//                 <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter your name.....'/>
//                 <button onClick ={submitHandler} >Join</button>
//             </div>
//         </div>
       
//     )
// }

// export default Meetings1
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Meetings1 = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = () => {
        if (input.trim()) {
            navigate(`/room/${input}`);
        } else {
            alert("Please enter your name before joining!");
        }
    }

    // Inline styles
    const styles = {
        page: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(135deg, #74ebd5, #ACB6E5)',
            fontFamily: 'Arial, sans-serif',
        },
        container: {
            flex: 1, // Take up all the remaining space below the navbar
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        card: {
            background: 'white',
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            width: '400px',
        },
        title: {
            fontSize: '24px',
            marginBottom: '20px',
            color: '#333',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            marginBottom: '20px',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s ease',
        },
        button: {
            backgroundColor: '#74ebd5',
            border: 'none',
            color: 'white',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
        },
        inputFocus: {
            borderColor: '#74ebd5',
        },
        buttonHover: {
            backgroundColor: '#ACB6E5',
        },
    };

    return (
        <div style={styles.page}>
            <Navbar /> {/* The navbar takes its normal position at the top */}
            <div style={styles.container}>
                <div style={styles.card}>
                    <h2 style={styles.title}>Join a Meeting</h2>
                    <input
                        style={styles.input}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="Enter your name..."
                        onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
                        onBlur={(e) => e.target.style.borderColor = '#ddd'} // Reset border color on blur
                    />
                    <button
                        style={styles.button}
                        onClick={submitHandler}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor} // Reset background color on mouse out
                    >
                        Join
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Meetings1;



