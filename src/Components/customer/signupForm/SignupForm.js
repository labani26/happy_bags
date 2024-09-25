import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const SignupForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            if(password === conPassword) {
                await axios.post('http://localhost:4000/customer/signup', {
                    name, email, phone, password
                });
                console.log('Signup Successful:');
                alert('Signup successful!');
    
                navigate('/login')
            }
            else {
                alert("Password mismatch!!!");
            }
        } catch (error) {
            console.error('Signup Error:', error);
            alert(error);
            console.log(error.response.data)
        }
    };

    return (
        <div className='container mb-3'>
            <h2 className='my-3'><u>Create an account</u></h2>
            <form onSubmit={onSubmit}>
                <div className="my-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-describedby="nameHelp"
                        placeholder="Enter username"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        aria-describedby="emailHelp"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone"
                        aria-describedby="phoneHelp"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Set password"
                        minLength={5}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="conpassword" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="conpassword"
                        value={conPassword}
                        onChange={(e) => setConPassword(e.target.value)}
                        placeholder="Confirm password"
                        minLength={5}
                        required
                    />
                </div>
                <div className="grid text-center">
                    <div className="submit"><button type="submit" className="btn btn-primary">Submit</button></div>
                </div>
            </form>
          <div className="container"><p><Link to="/adminSignup" className="my-link-class">Admin Signup</Link></p></div>
        </div>
    )
}

export default SignupForm;
