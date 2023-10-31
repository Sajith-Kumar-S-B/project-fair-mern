import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../components/MyProjects'
import MyProfile from '../components/MyProfile'

function DashBoard() {
  return (
    <>
      <Header insideDashboard />

      <Row className='container-fluid mb-5' style={{marginTop:'100px'}}>
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