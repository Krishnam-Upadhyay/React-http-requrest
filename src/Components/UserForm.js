import React from 'react';
import './UserForm.css';

function UserForm(props) {
    return <>
        <div id="myModal" class="modal">
            <div class="modal-content">
                <div class="close" onClick={props.closeForm}>&times;</div>
                <h3>Create new user</h3>
                <div class="user-form">
                    <form>
                        <div>
                            <input type="text" placeholder="First name" />
                            <input type="text" placeholder="Last name" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" />
                            <input type="password" placeholder="Confirm Password" />
                        </div>
                        <div>
                            <select name="country">
                                <option value="India">India</option>
                                <option value="Germany">Germany</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                            </select>
                            <select name="city">
                                <option value="Delhi">Delhi</option>
                                <option value="Berlin">Berlin</option>
                                <option value="New York">New York</option>
                                <option value="London">London</option>
                            </select>
                        </div>
                        <div>
                            <input type="date" placeholder="Date of Birth" />
                            <select name="gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Unknown">Unknown</option>
                            </select>
                        </div>
                        <button className='add-user-button'>Create User</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default UserForm;