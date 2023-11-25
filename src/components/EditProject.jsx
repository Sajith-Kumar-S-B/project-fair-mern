import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { BASE_URL } from '../services/baseUrl';
import { toast } from 'react-toastify';
import { EditProjectAPI } from '../services/allAPI';
function EditProject({project}) {

    const [projectDetails,setProjectDetails] = useState({
       id:project._id, title:project.title,languages:project.languages,overview:project.overview,gitHub:project.gitHub,website:project.website,projectImage:""
      })
      const [preview,setPreview] = useState("")

    const [show, setShow] = useState(false);
    const handleClose = () =>
    { setShow(false);

   setProjectDetails({
    id:project._id, title:project.title,languages:project.languages,overview:project.overview,gitHub:project.gitHub,website:project.website,projectImage:""
   })
    setPreview("")


    }
    const handleShow = () => setShow(true);


useEffect(()=>{
  if(projectDetails.projectImage){
    setPreview(URL.createObjectURL(projectDetails.projectImage))
  }
},[projectDetails.projectImage])


const handleUpdate = async (e)=>{

  e.preventDefault()
      const {id,title,languages,gitHub,website,overview,projectImage} = projectDetails


      if(!title || !languages || !gitHub || !website || !overview){
        toast.warning("please fill the details")
      }else{
        const reqBody = new FormData()
        reqBody.append("title",title)
        reqBody.append("languages",languages)
        reqBody.append("overview",overview)
        reqBody.append("gitHub",gitHub)
        reqBody.append("website",website)
        preview ? reqBody.append("projectImage",projectImage): reqBody.append("projectImage",project.projectImage)
          const token =  sessionStorage.getItem("token")

          if(preview){
             
            const reqHeader = {
              "Content-Type":"multipart/form-data",
              "Authorization":`Bearer ${token}`
            }

            // api call

            const result  = await EditProjectAPI(id,reqBody,reqHeader)
            if(result.status===200){
              handleClose()
              // pass response to projects
            }else{
              console.log(result);
              toast.error(result.response.data)
            }


          }else{

            const reqHeader = {
              "Content-Type":"application/form-data",
              "Authorization":`Bearer ${token}`
            }

          }
      }
}



  return (
    <>
<button onClick={handleShow} className="btn"><i className="fa-solid fa-pen-to-square"></i></button>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='row'>
            <div className='col-lg-6'>
            <label className='text-center mt-5'> 
      <input onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}  style={{display:'none'}}  type="file" />
               <img className=' img-fluid'  width={'100%'} src={preview?preview: `${BASE_URL}/uploads/${project.projectImage}`} alt="" /></label>
            </div>
            <div className='col-lg-6'>
            <Form className='mb-3 text-center'>
                
              <Form.Control onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} value={projectDetails.title}   className='mb-3 rounded'  type="text" placeholder="Project Title" />
              <Form.Control onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})} value={projectDetails.languages}  className='mb-3 rounded' type="text" placeholder="Languages Used" />
              <Form.Control onChange={e=>setProjectDetails({...projectDetails,gitHub:e.target.value})} value={projectDetails.gitHub}   className='mb-3 rounded'  type="text" placeholder="GitHub Link" />

              <Form.Control onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} value={projectDetails.website}   className='mb-3 rounded' type="text" placeholder="Website Link" />
              <Form.Control onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} value={projectDetails.overview}  className='mb-3 rounded' type="text" placeholder="Project Overview" />

      
              </Form>


            </div>

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button onClick={handleUpdate} type='submit'  variant="primary">update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProject