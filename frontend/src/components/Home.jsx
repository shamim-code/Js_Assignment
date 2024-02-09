import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Home() {


  const [userInfo, setUserInfo] = useState([]);

  useEffect( () =>{
    axios.get("http://localhost:5050/getall")
    .then((res)=> {
      console.log(res.data);
      setUserInfo(res.data);
    })
    .catch((err) => {
      console.error(err.message);
    });
  },[]);


  return (
    <div>
      <nav className=' bg-orange-500 text-white flex justify-evenly p-2 text-lg font-serif'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/registration'}>Registration</NavLink>
      </nav>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Nationality</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
           

            {
              userInfo.map( (user, index) => {
                return <tr>
                   <th>{index}</th>
                   <td>{user.firstName}</td>
                   <td>{user.lastName}</td>
                   <td>{user.email}</td>
                   <td>{user.gender}</td>
                   <td>{user.nationality}</td>
                   <td>{user.phone}</td>
                </tr>
              })
            }
            
            
          </tbody>
        </table>
      </div>

    </div>
  )
}
