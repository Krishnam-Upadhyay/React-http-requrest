
import React, { useState } from 'react';
import UserForm from './Components/UserForm';
import './styles.css';
import UserDetails from './Components/UserDetails';
import axios from 'axios';


function App() {
  let [showForm, setShowForm] = useState(false);
  let [users, setUsers] = useState([])

  function addUserHandler() {
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false)
  }

  const onCreateUser = (user) => {
    /*  fetch('https://react-http-tutorials-a3736-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', {
       method: "POST",
       body: JSON.stringify(user),
       headers: {
         'Content-Type': 'application/json',
       }
     }).then((response) => {
       console.log(response);
     }) */
    axios.post('https://react-http-tutorials-a3736-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', user).then((response) => {
      console.log(response.data);

    })

  };

  const onFetchUser = () => {
    /*  fetch('https://react-http-tutorials-a3736-default-rtdb.asia-southeast1.firebasedatabase.app/users.json').then(((response) => {
       return response.json()
     })).then((data) => {
 
       let userData = []
       for (let key in data) {
         userData.push({ ...data[key], id: key });
       };
       setUsers(userData);
 
 
     }) */
    axios.get('https://react-http-tutorials-a3736-default-rtdb.asia-southeast1.firebasedatabase.app/users.json').then(((response) => {
      return response.data;
    })).then((data) => {

      let userData = []
      for (let key in data) {
        userData.push({ ...data[key], id: key });
      };
      setUsers(userData);


    })
  }

  return (
    <div>
      <div className='page-header'>
        <button className='btn btn-success' onClick={addUserHandler}>Add User</button>
        <button className='btn btn-normal' onClick={onFetchUser}>Get Users</button>
      </div>
      <UserDetails users={users}></UserDetails>
      {showForm && <UserForm closeForm={closeForm} onCreateUser={onCreateUser}></UserForm>}
    </div>
  );
}

export default App;
