import './App.css';
import { Fragment, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form';
import ViewAll from './components/ViewAll';
import { Link } from 'react-router-dom';

function App() {
  const [projects, setProjects] = useState([]);

  const removeFromDom = _id => {
    setProjects(projects.filter(project => project._id !== _id))
  }
  
  return ( 
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        <Route  path='/' element={ 
        <Fragment><h2 style={{ background: 'blue', color: 'black' }}>Backlog</h2>
        <ViewAll projects = {projects} setProjects = {setProjects} removeFromDom={removeFromDom} status="backlog"/>
        <h2 style={{ background: 'yellow', color: 'black' }}>In Progress</h2>
        <ViewAll projects = {projects} setProjects = {setProjects} removeFromDom={removeFromDom} status="inProgress"/>
        <h2 style={{ background: 'green', color: 'white' }}>Completed</h2>
        <ViewAll projects = {projects} setProjects = {setProjects} removeFromDom={removeFromDom} status="completed"/>
        <Link to={'/project'}>Add a Project</Link>
        </Fragment>}/>

        <Route element={<Form />} path='/project' />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
