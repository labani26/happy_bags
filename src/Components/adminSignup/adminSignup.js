import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {

    const [adminname, setAdminName] = useState('');
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPhone, setAdminPhone] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [adminConPassword, setAdminConPassword] = useState('');

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const responseTo = await axios.post('http://localhost:4000/admin/signup', {
                adminname, adminEmail, adminPhone, adminPassword
            });

            console.log(' Admin Signup Successful:', responseTo);
            alert('Admin Signup successful!');

            navigate('/Ladminogin')

        } catch (error) {
            console.error('Admin Signup Error:', error);
            alert('Admin Signup failed, please try again.');
        }
    };

    return (
        <div className='container mb-3'>
            <h2 className='my-3'>Admin Create an account</h2>
            <form onSubmit={onSubmit}>
                <div className="my-3">
                    <label htmlFor="adminname" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="adminname"
                        name="adminname"
                        value={adminname}
                        onChange={(e) => setAdminName(e.target.value)}
                        aria-describedby="adminnameHelp"
                        placeholder="Enter Username"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="adminEmail" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="adminEmail"
                        name="adminEmail"
                        value={adminEmail}
                        onChange={(e) => setAdminEmail(e.target.value)}
                        placeholder="Enter Admin Email"
                        aria-describedby="adminEmailHelp"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="adminPhone" className="form-label">Phone number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="adminPhone"
                        name="adminPhone"
                        value={adminPhone}
                        onChange={(e) => setAdminPhone(e.target.value)}
                        placeholder="Enter Admin Phone"
                        aria-describedby="adminPhoneHelp"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="adminPassword" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="adminPassword"
                        name="adminPassword"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
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