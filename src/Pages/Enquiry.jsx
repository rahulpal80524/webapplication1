import React, { useState } from 'react'
import './Enquiry.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export default function Enquiry() {
    let [formData,setFormData] = useState({
        name:'',
        email: '',
        subject: '',
        message: '',
        index: ''

    });

    let [userData, setUserData] = useState([]);

    let getValue =(event)=>{
      let oldData = {...formData}
      let inputName = event.target.name; //field name
      let inputValue = event.target.value; //field value
      oldData[inputName]  = inputValue;
      setFormData(oldData);
     
    }

    let handlesubmit=(event)=>{
        let currentUserFormData= {
            name:formData.name,
            email:formData.email,
            subject: formData.subject,
            message: formData.message
        }

        if(formData.index===""){
            let checkFilter = userData.filter((v)=>v.email === formData.email)
            if(checkFilter.length>=1){
                toast.error("Email already present!");
              
               event.preventDefault();
            }else{
                let oldUserData = [...userData,currentUserFormData] // old Array + new Array elements
                setUserData(oldUserData)
                setFormData({
                    name:'',
                    email: '',
                    subject: '',
                    message: '',
                    index: ''
            
                })
                
            }
        }else{
          let  editIndex = formData.index;
          let oldData = userData;

          let checkFilter = oldData.filter((v,i)=>v.email === formData.email && i!=editIndex)
          if(checkFilter.length>=1){
            toast.error("Email already present!");
          
           event.preventDefault();
        }else{
            oldData[editIndex]['name'] = formData.name;
            oldData[editIndex]['email'] = formData.email;
            oldData[editIndex]['subject'] = formData.subject;
            oldData[editIndex]['message'] = formData.message;
            setUserData(oldData)
            setFormData({
              name:'',
              email: '',
              subject: '',
              message: '',
              index: ''
      
          })
        }

        }


        event.preventDefault();
    }
    let deleteRow = (indexNum) =>{
        let afterDelete = userData.filter((v,i)=> i!==indexNum)
        setUserData(afterDelete)
    }
    let editRow=(indexNum)=>{
        let editData = userData.filter((v,i)=> i===indexNum)[0]
        editData['index'] = indexNum
        setFormData(editData)
    }



  return (
    <div className="container">
    <ToastContainer/>    
    <h1>Enquiry Form</h1>
    <br/>
    {userData.length}
    <form onSubmit={handlesubmit}> 
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" onChange={getValue} value={formData.name} name="name" className="form-control" required/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" onChange={getValue} value={formData.email} name="email" className="form-control" required/>
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input type="text" onChange={getValue} value={formData.subject} name="subject" className="form-control" required/>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea name="message" onChange={getValue} value={formData.message} className="form-control" rows="4" required/>
      </div>
      <div className="form-group">
        <button type="submit" className="saveButton">
            {
                formData.index!=="" ? "Update": "Save"
            }
        </button>
      </div>
    </form>
    <div className="user-data">
        <h2>Saved Enquiries</h2>
        {userData.map((user, index) => (
          <div key={index} className="user-entry">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Subject:</strong> {user.subject}</p>
            <p><strong>Message:</strong> {user.message}</p>
            <button onClick={()=>editRow(index)}>Edit</button>
            <button onClick={()=>deleteRow(index)}>Delete</button>
          </div>
        ))}
      </div>
  </div>
  )
}
