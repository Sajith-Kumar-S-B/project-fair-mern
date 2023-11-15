import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../components/MyProjects'
import MyProfile from '../components/MyProfile'

function DashBoard() {
const [userName,setUserName]= useState("")
   useEffect(()=>{

    if(sessionStorage.getItem("registeredUser")){

      setUserName(JSON.parse(sessionStorage.getItem("registeredUser")).username)
    }
       
   },[])


  return (
    <>
      <Header insideDashboard />

      <Row className='container-fluid mb-5' style={{marginTop:'60px'}}>
      <h1 className='mb-5'>Welcome <span className='text-warning'>{userName}</span></h1>

     <Col sm={12} md={8} >
      {/* my Projects */}
      <MyProjects/>
     </Col>

     <Col  sm={12} md={4}>
            {/* my Profile */}
            <MyProfile/>

     </Col>

      </Row>
    </>
  )
}

export default DashBoard