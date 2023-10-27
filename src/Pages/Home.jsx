import React from 'react'
import {Row,Col, Button} from 'react-bootstrap'
import titleImg from '../Assets/4183733.webp'
import Projectcard from '../components/Projectcard'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
function Home() {
  return (
    <>
    <Header/>
    {/* landing page */}
    
     <div style={{backgroundColor:'#e7f1da',width:'100%',height:'600px'}} className='container-fluid rounded' >
        <Row  className='align-items-center ms-5 p-5'>
        <Col sm={12} md={6}>
          <h1 style={{fontSize:'50px'}}  className='fw-bolder text-dark'>Project Fair</h1>
          <p>One stop destination for all yopur projects. Where user can add ad manage their projects. As wella s access all our projects inn our website...</p>
          <Link to={'/login'} className='btn bg-dark text-light'> Explore </Link>
        </Col>
        <Col sm={12} md={6}>
         <img  className='w-75 ms-5 img-fluid' src={titleImg} alt="" />
        </Col>

        </Row>
     </div>
    {/* Projects */}
    <div style={{width:'100%',height:'600px'}} className='all-projects mt-5'>
      <h1 className='text-center mb-5'>Explore Our Projects</h1>
      <marquee scrollAmount={25}>

        <Row>

        <Col sm={12} md={6} lg={4}>
          <Projectcard/>
        </Col>
       
        </Row>


      </marquee>
      <div className='mt-5 text-center'>
       <Button > <Link to={'/projects'} style={{textDecoration:'none',color:'#ffffff'}}>View All Projects</Link></Button>
      </div>

    </div>
    
    </>
  )
}

export default Home