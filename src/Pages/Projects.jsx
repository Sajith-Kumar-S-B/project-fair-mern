import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Projectcard from '../components/Projectcard'
import { Col, Row } from 'react-bootstrap'
import { allProjectAPI } from '../services/allAPI'

function Projects() {

  const [allProjects,setAllProjects] = useState([])
  const [searchKey,setSearchKey] = useState("")
  const getallProjects = async ()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json", "Authorization":`Bearer ${token}`
      }
      const result = await allProjectAPI(searchKey,reqHeader)
      if(result.status===200){
        setAllProjects(result.data)
      }else{
        console.log(result);
      }
    }
  }

  useEffect(()=>{
    getallProjects()
  },[searchKey])



  return (

    <>
    <Header/>
      <h1 className='text-center mt-5'>All Projects</h1>
      <div style={{width:'500px',height:'50px'}} className='d-flex justify-content-center gap-2 align-items-center m-auto mb-5 mt-5'>
        <input onChange={e=>setSearchKey(e.target.value)} style={{height:'100%',width:'100%',outline:'none'}} className=' rounded p-2 bg-light' type="search" placeholder='Search Projects' />
         <div   className='btn bg-dark text-light rounded'>Search</div>
      </div>
    <Row>
     {allProjects?.length>0 ? allProjects.map((project)=>(<Col sm={12} lg={4} md={6} className='container-fluid px-5'>
         <Projectcard project={project} />
       </Col>)):<p className='text-center fw-bolder text-danger'>Please Login</p>  }
       </Row>
    </>
  )
}

export default Projects