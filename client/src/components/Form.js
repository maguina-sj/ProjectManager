import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Form = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/projects', {
            name, 
            date,
            status: 'backlog'
        })
        .then((res) => {
            console.log(res.data);
            navigate('/');
        })
        .catch((err) => {
            console.log('POST ERROR', err);
            setErrors(err.response.data.errors)
        })
    }

  return (
    <div>
         <h1>Project Manager</h1>
        <form onSubmit={handleSubmit}>
            <label>Project:</label><br/>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
            {errors.name && <p>{errors.name.message}</p>} <br/>
            <label>Due Date:</label><br/>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} required/>
            {errors.date && <p>{errors.date.message}</p>} <br />
            <button >Plan Project</button>
            </form>
    </div>
  )
}

export default Form