import React, { useEffect, useState } from 'react'
import AddProjects from './AddProjects'
import { userProjectAPI } from '../services/allAPI'
import { toast } from 'react-toastify'

function MyProjects() {

  const [userProjects,setUserProjects] = useState([])


      const getUserProjects = async ()=>{
        if(sessionStorage.getItem("token")){
          const token = sessionStorage.getItem("token")

          const reqHeader = {
            "Content-Type":"application/json", "Authorization":`Bearer ${token}`
          }
          const result = await userProjectAPI(reqHeader)

          if(result.status===200){
            setUserProjects(result.data)
          }else{
            console.log(result);
            toast.warning(result.response.data)
          }
        }
      }


      useEffect(()=>{
        getUserProjects()
      },[])
  return (
    <div className='card shadow p-3'>
      <div className='d-flex'>
        <h3 style={{textTransform:'none'}}>My Projects</h3>
        <div className='ms-auto'>
          <AddProjects/>
        </div>

      </div>
      <div className='mt-5'>

       {userProjects?.length>0 ? userProjects.map(project=>(<div className='shadow d-flex align-items-center rounded p-2'>
          <h5>{project.title}</h5>
          <div className='icons ms-auto'>
            <button className="btn"><i className="fa-solid fa-pen-to-square"></i></button>
            <a href={`${project.gitHub}`} target='_blank' className="btn"><i className="fa-brands fa-github"></i></a>
            <button className="btn"><i className="fa-solid fa-trash"></i></button>
          </div>
        </div> )) :

        <p className='text-danger mt-5'>No Projects Uploaded</p>
}
      </div>

    </div>
  )
}

export default MyProjects