
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
const Home = () => {

  const [data, setData] = useState([])

  const [fetchData, setFetchData] = useState(true);

  const triggerDataFetch = () => setFetchData(t => !t);
  
    React.useEffect(()=>{
      axios.get('http://localhost:5001/fetch/contacts').then((response)=>{
        setData(response.data)
      })
    },[fetchData])

  
  

  const deleteContact =(id)=>{
      if(window.confirm("Please Confirm to delete this contact!")){
        axios.delete(`http://localhost:5001/delete/contacts/${id}`);
        toast.success('Contact Deleted Successfuly!')
        setTimeout(()=> triggerDataFetch(),500)
      }
  }

  
  return (
    <div>
    <h2 className='head'>Home</h2>
    <div className='d-flex justify-content-end align-items-end'>
    <Link to={'/Add-Edit-Employee'}>
      <button className='btn btn-info mx-4'>Add +</button>
    </Link>
    </div>
    <div className='d-flex justify-content-center align-items-center'>
    <div className='row'>

    <table className="table table-striped table-hover col-10">
      <thead>
        <tr>
          <th className='mx-4'>No.</th>
          <th className='mx-4'>Name</th>
          <th className='mx-4'>Email</th>
          <th className='mx-4'>Contact No.</th>
          <th className='mx-4'>Actions</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item,index)=>{
          return(
            <tr key={item.id}>
          <td className='mx-4'>{index+1}</td>
          <td className='mx-4'>{item.name}</td>
          <td className='mx-4'>{item.email}</td>
          <td className='mx-4'>{item.contact}</td>
          <td className='mx-4'> 

          <Link to={`/Edit-Employee/${item.id}`}>
            <button className='btn btn-primary mx-2'>Edit</button>
          </Link>

            <button className='btn btn-danger mx-2' onClick={()=>{ deleteContact(item.id)}}>Delete</button>
          
          {/* <Link to={`/view/${item.id}`}>
            <button className='btn btn-info mx-2'>View</button>
          </Link> */}

          </td>
        </tr>
          )
      })}
        
      </tbody>
    </table>
    </div>
    </div>

    </div>
  )
}

export default Home