
import React, { useState } from 'react';
import UserForm from './Components/UserForm';
import './styles.css';
import UserDetails from './Components/UserDetails';


function App() {
  let [showForm, setShowForm] = useState(false);

  function addUserHandler() {
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false)
  }

  return (
    <div>
      <div className='page-header'>
        <button className='btn btn-success' onClick={addUserHandler}>Add User</button>
        <button className='btn btn-normal'>Get Users</button>
      </div>
      <UserDetails></UserDetails>
      {showForm && <UserForm closeForm={closeForm}></UserForm>}
    </div>
  );
}

export default App;
