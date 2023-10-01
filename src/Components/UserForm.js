import React from 'react';
import './UserForm.css';
import { useRef } from 'react';

function UserForm(props) {
    const fnameRef = useRef();
    const lnameRef = useRef();
    const emailRef = useRef();
    const passRefRef = useRef();
    const countryRef = useRef();

    const cityRef = useRef();
    const dateRef = useRef();
    const genderRef = useRef();

    const onCreateUser = (e) => {
        e.preventDefault();
        let user = {
            firstname: fnameRef.current.value,
            lastname: lnameRef.current.value,
            email: emailRef.current.value,
            password: passRefRef.current.value,
            country: countryRef.current.value,
            city: cityRef.current.value,
            date: dateRef.current.value,
            gender: genderRef.current.value,
        };
        props.onCreateUser(user);


    }


    return <>
        <div id="myModal" class="modal">
            <div class="modal-content">
                <div class="close" onClick={props.closeForm}>&times;</div>
                <h3>Create new user</h3>
                <div class="user-form">
                    <form onSubmit={onCreateUser}>
                        <div>
                            <input type="text" placeholder="First name" ref={fnameRef} />
                            <input type="text" placeholder="Last name" ref={lnameRef} />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" ref={emailRef} />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" ref={passRefRef} />
                            <input type="password" placeholder="Confirm Password" />
                        </div>
                        <div>
                            <select name="country" ref={countryRef}>
                                <option value="India">India</option>
                                <option value="Germany">Germany</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                            </select>
                            <select name="city" ref={cityRef}>
                                <option value="Delhi">Delhi</option>
                                <option value="Berlin">Berlin</option>
                                <option value="New York">New York</option>
                                <option value="London">London</option>
                            </select>
                        </div>
                        <div>
                            <input type="date" placeholder="Date of Birth" ref={dateRef} />
                            <select name="gender" ref={genderRef}>
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