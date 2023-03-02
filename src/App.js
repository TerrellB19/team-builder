import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({name: '', email: '', role: ''})
  
  const update = () => {

  }

  const onSubmit = () => {
    setMembers([values, ...members])
    setValues({name: '', email: '', role: ''})
  }
  const onChange = (name, value) => {
    setValues({ ...values, [name]: value})
  }
  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form 
      values={values}
      change={onChange}
      submit={onSubmit}
      />
      {members.map((member, idx) => {
        return (
          <div key={idx}>
            <h5>Name: {member.name}</h5>
            <h5>Email: {member.email}</h5>
            <h5>Role: {member.role}</h5>   
          </div>
        )
      })}
    </div>
  );
}

export default App;
