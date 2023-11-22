import React from 'react'
import Card from 'react-bootstrap/Card';
import projectPic from '../Assets/d8f43445-c6df-4fc7-a919-f89cfdf1ae0c.gif'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/baseUrl';



function Projectcard({project}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    {project && <Card style={{ width: '25rem',height:'20rem',margin:'auto' }} className='shadow mb-5 border-0' onClick={handleShow} >
      <Card.Img style={{width:'100%',height:'16rem'}} className='img-fluid p-1'  variant="top" src={project?`${BASE_URL}/uploads/${project.projectImage}`:projectPic} />
      <Card.Body>
        <Card.Title className='text-center'>{project?.title}</Card.Title>
        
      </Card.Body>
    </Card>}

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                <img  height={'200px'} className='img-fluid' src={project?`${BASE_URL}/uploads/${project.projectImage}`:projectPic} alt="" />

                </Col>
                <Col md={6}>
                    <h3 className='mb-3 mt-3'>{project?.title}</h3>
                    <p>Project Overview : {project?.overview}</p>
                   <hr />
                    <p>Languages used: <span className='fw-bold text-info'>{project.languages}</span></p>
                </Col>
            </Row>
            <div className='mt-3'>
                <a className='me-3 btn bg-light shadow rounded' href={project?.gitHub}><i className='fa-brands fa-github fa-2x '></i></a>
                <a className='me-3 btn bg-light shadow rounded' href={project?.website}><i className='fa-solid fa-link fa-2x'></i></a>
               

            </div>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default Projectcard