import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewAll = (props) => {
    const {projects, setProjects, removeFromDom, status} = props;
    const [buttonText, setButtonText] = useState('Start Project')

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects')
        .then((res) => {
            console.log(res.data);
            setProjects(res.data)
        })
        .catch( (err) => {
            console.log(err)
        })
    },[])
    const deleteProject = (_id) => {
        axios.delete('http://localhost:8000/api/projects/' + _id)
        .then( res => {
            removeFromDom(_id)
        })
        .catch( (err) => {
            console.log(err)
        })
    }

    const handleMove = (project) => {
        if(project.status === 'inProgress'){
        setButtonText('In Progress');
    }else if(project.status === 'completed'){
        setButtonText('Completed')
    }
        const newProjects = projects.map((p) => {
            if (p._id === project._id) {
            const updatedProject = { ...p, status:status === 'backlog' ? 'inProgress' : 'completed'}
            return updatedProject;
            }
            return p;
        });
        setProjects(newProjects);
        };

        

        

    return (
    <>
        {projects.map(
        (project) =>
        project.status === status && (
            <div>
                <h2>{project.name}</h2>
                <p>Due: {project.date}</p>
                <br />
                <button onClick={() => handleMove(project)}>{buttonText}</button>
                <button onClick={() => deleteProject(project._id)}>Delete</button>
            </div>
            ),
        )}
    </>
    
    );
}

export default ViewAll


// if(status ==='backlog') {
//     status='inProgress';
// } else if (status === 'inProgress') {
//     status = 'completed'
// }else if (status === 'completed') {
//     status = 'completed'
// }}