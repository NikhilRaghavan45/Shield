import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Table.css';


const UserList = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:3001/users`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);
    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure want to delete");
        if (confirm) {
            axios.delete(`http://localhost:3001/users/${id}`)
                .then(res => {
                    window.location.reload()
                }).catch(err => console.log(err))
        }
    }

    return (
        <div className='container mt-5 '>
            <h3 className=' d-flex justify-content-center'>User List</h3>
            <div className=' d-flex justify-content-end'>
                {/* <Link to="/addsaree" className="btn btn-success">AddProduct
            </Link>{"\n"} */}
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr className='bg-secondary'>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile No</th>
                        <th>Email</th>
                        <th>Password</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => {
                        return <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.fname}</td>
                            <td>{d.lname}</td>
                            <td>{d.num}</td>
                            <td>{d.email}</td>
                            <td>{d.password}</td>

                            <td>
                                {/* <Link to="/edit" className='btn btn-sm btn-primary me-2'>View</Link> */}
                                <Link to={`/editusers/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                {/* <Link to="/delete" className='btn btn-sm btn-danger me-2' onClick={e => handleDelete(d.id)}>Delete</Link> */}
                                <button className='btn btn-sm btn-danger' onClick={e => handleDelete(d.id)}>Delete</button>

                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;
