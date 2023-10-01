import React from "react";
import './UserDetails.css';

function UserDetails(props) {

  const oneditUserClicked = (e, user) => {
    props.onEditUser(user);

  }
  const onDeleteClick = (e, user) => {
    props.onDeleteUser(user);

  }
  return <div className="user-details">
    <table className="users-table">
      <tr>
        <th>Full Name</th>
        <th>Email</th>
        <th>Date Of Birth</th>
        <th>Gender</th>
        <th>city</th>
        <th>country</th>
        <th></th>
      </tr>

      {props.users.map((user) => {
        return <tr key={user.id}>
          <td>{user.firstname + " " + user.lastname}</td>
          <td>{user.email}</td>
          <td>{user.date}</td>
          <td>{user.gender}</td>
          <td>{user.city}</td>
          <td>{user.country}</td>
          <td>
            <button className="btn btn-primary" onClick={(e) => oneditUserClicked(e, user)}>Edit</button>
            <button className="btn btn-danger" onClick={(e) => onDeleteClick(e, user)}>Delete </button>
          </td>
        </tr>



      })}

    </table>
  </div>
}

export default UserDetails;