
import React, { useEffect, useState } from 'react';
import UserForm from './Components/UserForm';
import './styles.css';
import UserDetails from './Components/UserDetails';
import axios from 'axios';
import Loader from './Components/Loader';


function App() {
  let [showForm, setShowForm] = useState(false);
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(false);
  let [errormsg, setErrormsg] = useState(null);
  let [editMode, setEditMode] = useState(false);
  let [userToEdit, setUser] = useState(null);

  useEffect(() => {
    onFetchUser();
  }, []);

  const onEditUser = (user) => {
    setEditMode(true);
    console.log('editmode ' + editMode)
    setShowForm(true);
    console.log(user);
    setUser(user);
  }
  const onDeleteUser = (user) => {
    let del = window.confirm('do you really want to delte ' + user.firstname + " " + user.lastname + " ?");
    if (del) {
      axios.delete('https://react-http-tutorials-a3736-default-rtdb.asia-southeast1.firebasedatabase.app/users/' + user.id + '.json').then((response) => {
        console.log(response)
        onFetchUser();
      }).catch((err) => setErrormsg(err.msg));
    }
  }

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

    if (!editMode) {
      console.log('editmode if side oncreateuser ' + editMode)
      axios.post('https://react-http-tutorials-a3736-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', user).then((response) => {
        console.log(response.data);
        onFetchUser();


      });

    } else {
      axios.put('https://react-http-tutorials-a3736-default-rtdb.asia-southeast1.firebasedatabase.app/users/' + userToEdit.id + '.json', user).then((response) => {
        console.log(response);
        onFetchUser();
      }).catch((err) => {
        setErrormsg(err.msg)
      })

    };
    setShowForm(false);



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
    setLoading(true);
    axios.get('https://react-http-tutorials-a3736-default-rtdb.asia-southeast1.firebasedatabase.app/users.json').then(((response) => {
      return response.data;
    })).then((data) => {

      let userData = []
      for (let key in data) {
        userData.push({ ...data[key], id: key });
      };
      setUsers(userData);
      setLoading(false);


    }).catch((err) => setErrormsg('request failed with ' + 404));
  }

  return (
    <div>
      <div className='page-header'>
        <button className='btn btn-success' onClick={addUserHandler}>Add User</button>
        <button className='btn btn-normal' onClick={onFetchUser}>Get Users</button>
      </div>

      {!loading && !errormsg && <UserDetails users={users} onEditUser={onEditUser} onDeleteUser={onDeleteUser}></UserDetails>}
      {errormsg && <h1>{errormsg}</h1>}
      {showForm && <UserForm closeForm={closeForm} onCreateUser={onCreateUser} editMode={editMode} user={userToEdit}></UserForm>}
    </div>
  );
}

export default App;
