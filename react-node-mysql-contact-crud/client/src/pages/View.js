import React,{useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const View = () => {
    const {user , setUser}=useEffect({})
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:5001/fetch/contact/${id}`).then((response)=> {
            setUser({...response.data[0]})
        console.log(response)
        // console.log(response.data[0].email)
      })
      },[id])


  return (
    <div>
    
    <h1 className='head'>View Contact</h1>

    <div className='d-flex justify-content-end align-items-end'>
        <Link to={'/'}>
            <button className='btn btn-info mx-4'>Home</button>
        </Link>
    </div>

    <div  className="d-flex justify-content-center align-items-center container "> 

        <div  className="row ">

            <div  className="mb-3">
                <strong>Name:</strong>
                <span>{user.name}</span>
                <p></p>
            </div>
            <div  className="mb-3">
                <strong>Email:</strong>
                <span>{user.email}</span>
                <p></p>
            </div>
            <div  className="mb-3">
                <strong>Contact:</strong>
                <span>{user.contact}</span>
                <p></p>
            </div>

        </div>
    
    </div>

    </div>
  )
}

export default View