import React from 'react'
import Header from '../components/Header'
import Projectcard from '../components/Projectcard'
import { Col, Row } from 'react-bootstrap'

function Projects() {
  return (

    <>
    <Header/>
      <h1 className='text-center mt-5'>All Projects</h1>
      <div style={{width:'500px',height:'50px'}} className='d-flex justify-content-center gap-2 align-items-center m-auto mb-5 mt-5'>
        <input  style={{height:'100%',width:'100%',outline:'none'}} className=' rounded p-2 bg-light' type="search" placeholder='Search Projects' />
         <div   className='btn bg-dark text-light rounded'>Search</div>
      </div>
    <Row>
       <Col sm={12} lg={4} md={6} className='container-fluid'> <Projectcard/>
       </Col>
       </Row>
    </>
  )
}

export default Projects