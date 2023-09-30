import React from "react";
import './UserDetails.css';

function UserDetails(){
    return <div className="user-details"> 
        <table className="users-table">
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Date Of Birth</th>
            <th>Gender</th>
            <th></th>
          </tr>
          <tr>
            <td>Mery Jane</td>
            <td>meryjane@gmail.com</td>
            <td>30 Aug 1991</td>
            <td>Female</td>
            <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete </button>
            </td>
          </tr>
        </table>
    </div>
}

export default UserDetails;