import React from 'react'
import Card from 'react-bootstrap/Card';
import projectPic from '../Assets/d8f43445-c6df-4fc7-a919-f89cfdf1ae0c.gif'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';



function Projectcard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     <Card style={{ width: '18rem',height:'14rem' }} className='shadow mb-5 border-0' onClick={handleShow} >
      <Card.Img style={{width:'100%',height:'12rem'}} className='img-fluid p-1'  variant="top" src={projectPic} />
      <Card.Body>
        <Card.Title className='text-center'>Card Title</Card.Title>
        
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                <img  height={'200px'} className='img-fluid' src={projectPic} alt="" />

                </Col>
                <Col md={6}>
                    <h3 className='mb-3 mt-3'>Project Title</h3>
                    <p>Project Overview : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum necessitatibus ab voluptatum dignissimos iusto saepe sequi nam iure quis, consequatur quidem temporibus cumque? Dolorem ipsam totam numquam illum nobis aut?</p>
                   <hr />
                    <p>Languages used: <span className='fw-bold'>HTML,CSS,React.JS</span></p>
                </Col>
            </Row>
            <div className='mt-3'>
                <a className='me-3 btn bg-light shadow rounded' href=""><i className='fa-brands fa-github fa-2x '></i></a>
                <a className='me-3 btn bg-light shadow rounded' href=""><i className='fa-solid fa-link fa-2x'></i></a>
               

            </div>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default Projectcard