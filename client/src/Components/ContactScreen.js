import React from 'react';

const ContactScreen = (props) => { 
  return (
    <div className='contactContainer'>
        <div className='col-md-8'>
          <h3> {props.title + ' ' + props.firstName + ' ' + props.lastName} </h3>
        </div>  
        <div className='col-md-4'>
          <p className="p">DOB: {props.dob} </p>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <p className="p">Phone: {props.phone}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <p className="p">Email: {props.email}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <p className="p">Company: {props.company}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <p className="p">Occupation: {props.occupation}</p>
          </div>
        </div>   
        <div className='row'>
          <div className='col-md-8'>
            <p className="p">Address: {props.address + ' ' + props.city + ' ' + props.state + props.zipcode}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
           <p className="p">Domain: {props.domain}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <p className="p">Gender: {props.gender}</p>
          </div>
      </div>
    </div>
  )
}

export default ContactScreen;