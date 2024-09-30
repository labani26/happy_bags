import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {

    const [name, setAdminName] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [password, setpassword] = useState('');
    const [adminConPassword, setAdminConPassword] = useState('');

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const responseTo = await axios.post('https://happy-bags-4.onrender.com/admin/signup', {
                name, email, phone, password
            });

            console.log(' Admin Signup Successful:', responseTo);
            alert('Admin Signup successful!');

            navigate('/adminLogin')

        } catch (error) {
            console.error('Admin Signup Error:', error);
            alert('Admin Signup failed, please try again.');
        }
    };

    return (
        <div className='container mb-3'>
            <h2 className='my-3'><u>Admin Create an account</u></h2>
            <form onSubmit={onSubmit}>
                <div className="my-3">
                    <label htmlFor="name" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setAdminName(e.target.value)}
                        aria-describedby="adminnameHelp"
                        placeholder="Enter Username"
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
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Enter Admin Email"
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
                        onChange={(e) => setphone(e.target.value)}
                        placeholder="Enter Admin Phone"
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
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="Set Admin Password"
                        minLength={5}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="adminConPassword" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="adminConPassword"
                        value={adminConPassword}
                        onChange={(e) => setAdminConPassword(e.target.value)}
                        placeholder="Admin Confirm password"
                        minLength={5}
                        required
                    />
                </div>
                <div className="grid text-center">
                    <div className="submit"><button type="submit" className="btn btn-primary">Submit</button></div>
                </div>
            </form>
        </div>
    )
}

export default AdminSignup;