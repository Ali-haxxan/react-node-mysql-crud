import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams, Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const AddEdit = () => {
    



    const [name,setAddName] = useState('')
    const [email,setAddEmail] = useState('')
    const [contact,setAddContact] = useState('')

    const [data,setData] = useState({
      name:'',
      email:'',
      contact:''
    })
    

    

    const addcontact = (e)=>{

      e.preventDefault();
        if(!name || !email ||!contact){
            toast.error("Please provide all fields!")
        }else{
          if(!id){
            axios.post('http://localhost:5001/add/contacts',{name,email,contact}).then((response)=>{
                // console.log(response);
                toast.success("New Record added Successfuly!");
                setAddName('');
            setAddEmail('');
            setAddContact('');
            }) 
          }
          else{
            axios.put(`http://localhost:5001/update/contact/${id}`,{name,email,contact}).then((response)=>{
                // console.log(response);
                toast.success("Record Updated Successfuly!");
            setAddName('');
            setAddEmail('');
            setAddContact('');
            }) 
          }
          
        }
    }

    


    const {id} =useParams()
    useEffect(()=>{
      axios.get(`http://localhost:5001/fetch/contact/${id}`).then((response)=> {
        // setData(response)
        setAddName(response.data[0].name)
    setAddEmail(response.data[0].email)
    setAddContact(response.data[0].contact)
      // console.log(response.data)
      // console.log(response.data[0].email)
    })
    },[id])



  return (
    <div>
    
    <h1 className='head'>AddEdit</h1>
    <div className='d-flex justify-content-end align-items-end'>
    <Link to={'/'}>

      <button className='btn btn-info mx-4'>Home</button>
    
    </Link>
    </div>
    <div  className="d-flex justify-content-center align-items-center container "> 

<div  className="row ">
    <form >
        <div  className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" name='name' id="name" value={name} onChange={(e)=>{ setAddName(e.target.value)}} />
        </div>
        <div  className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
          <input type="email" className="form-control" name='email' id="email" value={email} onChange={(e)=>{ setAddEmail(e.target.value)}} aria-describedby="email"/>
          <div id="email" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div  className="mb-3">
          <label htmlFor="contact" className="form-label">Contact No.</label>
          <input type="text" name='contact' className="form-control" value={contact} onChange={(e)=>{ setAddContact(e.target.value)}} id="Contact"/>
        </div>
        <button  className="btn btn-primary"  onClick={addcontact}>{id ? "Update" : "Save"}</button>
    </form>
    </div>
    
    </div>

    </div>
  )
}

export default AddEdit