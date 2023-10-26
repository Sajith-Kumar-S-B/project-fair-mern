import React from 'react'
import Card from 'react-bootstrap/Card';
import projectPic from '../Assets/web-development-5617617-4674328.webp'
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
     <Card style={{ width: '18rem' }} className='shadow mb-5' onClick={handleShow} >
      <Card.Img variant="top" src={projectPic} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        
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
                    <p>Languages used: <span>HTML,CSS,React.JS</span></p>
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